import React, { useState, useEffect } from "react";
import "./dropdown.scss";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export enum DropdownSelectType {
    CHECKBOX = 'CHECKBOX',
    LIST = 'LIST',
}

export interface DropdownProps {
    options: { label: string, value: string }[];
    defaultText: string;
    type?: DropdownSelectType;
    boxStyle?: React.CSSProperties;
    listStyle?: React.CSSProperties;
    disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
    options,
    defaultText,
    type = DropdownSelectType.LIST,
    boxStyle,
    listStyle,
    disabled = false
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [text, setText] = useState(defaultText)

    const toggleDropdown = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    useEffect(() => {
        if (type === DropdownSelectType.LIST) {
            setText(selectedOptions.length ? selectedOptions[0] : defaultText)
        }


    }, [selectedOptions])

    const updateSelection = (option: { label: string, value: string }) => {
        if (type === DropdownSelectType.CHECKBOX) {
            const selectedIndex = selectedOptions.indexOf(option.value);
            if (selectedIndex === -1) {
                setSelectedOptions([...selectedOptions, option.value]);
            } else {
                setSelectedOptions(selectedOptions.filter(item => item !== option.value));
            }
        } else {
            setSelectedOptions([option.value]);
            setIsOpen(false);
        }
    };

    const clearSelection = () => {
        setSelectedOptions([]);
        setSearchQuery('');
        setIsOpen(false);
    };

    const handleCheckboxChange = (option: { label: string, value: string }) => {
        const selectedIndex = selectedOptions.indexOf(option.value);
        if (selectedIndex === -1) {
            setSelectedOptions([...selectedOptions, option.value]);
        } else {
            setSelectedOptions(selectedOptions.filter(item => item !== option.value));
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
        // Allow users to click enter to select option
        if (event.key === 'Enter') {
            event.preventDefault();
            const focusedElement = document.activeElement as HTMLElement;
            if (focusedElement.tagName === 'LI') {
                focusedElement.click();
            }
        }
    };

    const filteredOptions = options.filter(option => option.label.toLowerCase().includes(searchQuery.toLowerCase()));

    useEffect(() => {
        setIsOpen(false);
    }, []);

    return (
        <div className="dropdownContainer">
            <button style={boxStyle} className='button' onClick={toggleDropdown}>
                {text} <KeyboardArrowUpIcon className={isOpen ? "arrowIconDown" : "arrowIconUp"} />
            </button>
            {isOpen && (
                <div className="optionsContainer">
                    <ul style={listStyle} onKeyDown={handleKeyDown}>
                        <input className="searchBar" type="text" placeholder="Search.." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <li key={0} tabIndex={0} onClick={clearSelection} >
                            Clear selection
                        </li>
                        {filteredOptions.map((option, idx) => (
                            <li key={idx + 1} tabIndex={0} onClick={() => updateSelection(option)} value={option.value}>
                                {type === DropdownSelectType.CHECKBOX && (
                                    <input type="checkbox" checked={selectedOptions.includes(option.value)} onChange={() => handleCheckboxChange(option)} onClick={(e) => e.stopPropagation()} />
                                )}
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
