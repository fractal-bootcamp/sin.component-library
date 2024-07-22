import { useEffect, useState } from "react"
import "./dropdown.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export enum DropdownSelectType {
    CHECKBOX = 'CHECKBOX',
    LIST = 'LIST',
}
export interface DropdownProps {
    options: { label: string, value: string }[];
    defaultText: string;
    type?: DropdownSelectType;
    boxStyle?: {};
    listStyle?: {};
    disabled?: boolean;
}

const Dropdown = (props: DropdownProps) => {
    // Set default to list if no style selected
    let defaultDropdownType: DropdownSelectType = props.type as DropdownSelectType || DropdownSelectType.LIST;

    const [isOpen, setIsOpen] = useState(true)
    const [selectedOption, setSelectedOption] = useState(props.defaultText)

    const updateSelection = (e: React.MouseEvent<HTMLLIElement>) => {
        // console.log(e.target.value)
        if (e.target instanceof HTMLElement) {
            const targetVal = e.target.getAttribute('value')
            console.log(targetVal)
            setSelectedOption(e.target.textContent || '')
            setIsOpen(false)
        }
    }

    useEffect(() => {
        setIsOpen(false)
    }, [])
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // console.log(e.currentTarget.value)
        setSearchQuery('')
        setIsOpen(!isOpen)
    }

    const clearSelection = () => {
        setSelectedOption(props.defaultText)
        setSearchQuery('')
        setIsOpen(false)
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        // Allow users to click enter to select option
        if (event.key === 'Enter') {
            event.preventDefault();
            const focusedElement = document.activeElement as HTMLElement;
            if (focusedElement.tagName === 'LI') {
                focusedElement.click();
            }
        }
    };

    const [searchQuery, setSearchQuery] = useState('')
    const filteredOptions = props.options.filter(option => option.label.toLowerCase().includes(searchQuery.toLowerCase()))

    // handle logic for checkboxes
    const clearCheckboxes = () => {
        const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox: HTMLInputElement) => {
            checkbox.checked = false;
        });
        setSearchQuery('')
    }

    return <>
        {/* make default view, nothing selected */}
        <div className="dropdownContainer">
            <button style={props.boxStyle} value={selectedOption} className='button' onClick={(e) => { !props.disabled && handleClick(e) }}>{selectedOption} <KeyboardArrowUpIcon className={isOpen ? "arrowIconDown" : "arrowIconUp"} /> </button>
            {/* make list of select items */}
            {isOpen && defaultDropdownType === DropdownSelectType.LIST &&
                <div className="optionsContainer">
                    <ul style={props.listStyle} onKeyDown={handleKeyDown}>
                        <input className="searchBar" type="text" placeholder="Search.." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <li key={0} tabIndex={0} onClick={clearSelection} value={props.defaultText}>Clear selection</li>
                        {filteredOptions.map((option, idx) => {
                            return <li key={idx + 1} tabIndex={0} onSelect={updateSelection} onClick={updateSelection} value={option.value}>{option.label}</li>
                        })}
                    </ul>
                </div>
            }
            {/* make select checkboxes here */}
            {isOpen && defaultDropdownType === DropdownSelectType.CHECKBOX &&
                <div className="optionsContainer">
                    <ul style={props.listStyle} >
                        <input className="searchBar" type="text" placeholder="Search.." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <li key={0} value={props.defaultText} onClick={clearCheckboxes}>
                            Clear selection
                        </li>
                        {filteredOptions.map((option, idx) => {
                            return <li key={idx + 1} value={option.value}>
                                <input type="checkbox" />
                                {option.label}</li>
                        })}
                    </ul>
                </div>
            }
        </div>
    </>
}

export default Dropdown