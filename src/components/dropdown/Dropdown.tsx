import { useEffect, useState } from "react"
import "./dropdown.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [selectedOption, setSelectedOption] = useState('Select')

    const updateSelection = (e) => {
        // console.log(e.target.value)
        const targetVal = e.target.getAttribute('value')
        console.log(targetVal)
        setSelectedOption(e.target.innerHTML)
        setIsOpen(false)
    }

    useEffect(() => {
        setIsOpen(false)

    }, [])
    const handleClick = (e) => {
        console.log(e.target.value)
        setIsOpen(!isOpen)

    }

    return <>
        <h1>Hello i am a dropdown</h1>
        {/* make default view, nothing selected */}
        <div className="dropdownContainer">
            <button value={selectedOption} className='button' onClick={handleClick}>{selectedOption} <KeyboardArrowUpIcon className={isOpen ? "arrowIconUp" : "arrowIconDown"} /> </button>
            {/* make list of select items */}
            {isOpen &&
                <div className="optionsContainer">
                    <ul >
                        <li onClick={updateSelection} value='option1'>option 1</li>
                        <li onClick={updateSelection} value='option2'>option 2</li>
                        <li onClick={updateSelection} value='option3'>option 3</li>

                    </ul>
                </div>
            }
        </div>
    </>
}

export default Dropdown