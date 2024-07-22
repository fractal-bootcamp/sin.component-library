import { useEffect, useState } from "react"
import "./dropdown.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export interface DropdownProps {
    props: {
        options: { label: string, value: string }[];
        defaultText: string;
        boxStyle?: {};
        listStyle?: {};
        disabled?: boolean;
    }
}

// const exampleProps = {
//     options: [
//         { label: 'Default Option 1', value: 'default1' },
//         { label: 'Default Option 2', value: 'default2' }
//     ],
//     defaultText: 'Select an option',
//     disabled: true,

// }

const Dropdown = ({ props }: DropdownProps) => {
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
        setIsOpen(!isOpen)
    }

    const clearSelection = () => {
        setSelectedOption(props.defaultText)
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

    return <>
        {/* make default view, nothing selected */}
        <div className="dropdownContainer">
            <button style={props.boxStyle} value={selectedOption} className='button' onClick={(e) => { !props.disabled && handleClick(e) }}>{selectedOption} <KeyboardArrowUpIcon className={isOpen ? "arrowIconDown" : "arrowIconUp"} /> </button>
            {/* make list of select items */}
            {isOpen &&
                <div className="optionsContainer">
                    <ul style={props.listStyle} onKeyDown={handleKeyDown}>
                        <li tabIndex={0} onClick={clearSelection} value={props.defaultText}>Clear selection</li>
                        {props.options.map((option, idx) => {
                            console.log(idx)
                            return <li tabIndex={0} onSelect={updateSelection} onClick={updateSelection} value={option.value}>{option.label}</li>
                        })}
                    </ul>
                </div>
            }
            {/* make select checkboxes here */}

        </div>
    </>
}

export default Dropdown