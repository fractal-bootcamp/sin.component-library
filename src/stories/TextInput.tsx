//on render, component needs the cursor position

import React, { useRef, useState, useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./textinput.css";
import TitleIcon from "@mui/icons-material/Title";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

interface TextInputProps {
  placeholder: string;
  isDisabled: boolean;
  isPassword: boolean;
  validationRegex: RegExp | string;
}

const TextInput = ({
  placeholder,
  isDisabled,
  isPassword,
  validationRegex,
}: TextInputProps) => {
  const [infoHover, setInfoHover] = useState(false);
  const [infoMouseDown, setInfoMouseDown] = useState(false);
  const [submitHover, setSubmitHover] = useState(false);
  const [submitMouseDown, setSubmitMouseDown] = useState(false);
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const [realValue, setRealValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const regex = new RegExp(validationRegex);
  const isValid = regex.test(realValue);
  const validCharacters = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029]$/;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Backspace") {
      if (selectionStart === selectionEnd) {
        setRealValue(
          realValue.slice(0, selectionStart - 1) +
            realValue.slice(selectionEnd, realValue.length)
        );
      } else {
        setRealValue(
          realValue.slice(0, selectionStart) +
            realValue.slice(selectionEnd, realValue.length)
        );
      }
      if (textareaRef.current) {
        textareaRef.current.setSelectionRange(0, 0);
      }
      //flickers
    } else if (validCharacters.test(e.key)) {
      setRealValue(
        realValue.slice(0, selectionStart) +
          e.key +
          realValue.slice(selectionEnd, realValue.length)
      );
    }
  };

  const handleSelectionChange = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    setSelectionStart(e.currentTarget.selectionStart);
    setSelectionEnd(e.currentTarget.selectionEnd);
  };

  useEffect(() => {
    setDisplayValue(isPassword ? "•".repeat(realValue.length) : realValue);
    console.log(realValue, displayValue);
  }, [realValue, isPassword]);

  return (
    <div style={{ display: "flex" }} className="storybook-textInput">
      <TitleIcon style={{ paddingBottom: "180px", zIndex: 1 }} />
      <textarea
        ref={textareaRef}
        disabled={isDisabled}
        value={displayValue}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onSelect={handleSelectionChange}
        style={{
          width: "200px",
          height: "200px",
          marginLeft: "-25px",
          textIndent: "25px",
          lineHeight: "30px",
          color: isValid ? "green" : "red",
          animation: isValid ? "none" : "shake 0.75s ",
          resize: "none",
        }}
      />
      <KeyboardReturnIcon
        style={{
          marginLeft: "-30px",
          marginTop: "180px",
          color: submitHover ? "lightblue" : "black",
          transform: submitMouseDown ? "scale(0.9)" : "scale(1)",
        }}
        onClick={isDisabled ? () => {} : () => console.log(realValue)}
        onMouseEnter={isDisabled ? () => {} : () => setSubmitHover(true)}
        onMouseLeave={isDisabled ? () => {} : () => setSubmitHover(false)}
        onMouseDown={isDisabled ? () => {} : () => setSubmitMouseDown(true)}
        onMouseUp={isDisabled ? () => {} : () => setSubmitMouseDown(false)}
      />
      <InfoIcon
        style={{
          marginLeft: "-20px",
          color: infoHover ? "lightblue" : "black",
          transform: infoMouseDown ? "scale(0.9)" : "scale(1)",
        }}
        onClick={isDisabled ? () => {} : () => console.log("Info")}
        onMouseEnter={isDisabled ? () => {} : () => setInfoHover(true)}
        onMouseLeave={isDisabled ? () => {} : () => setInfoHover(false)}
        onMouseDown={isDisabled ? () => {} : () => setInfoMouseDown(true)}
        onMouseUp={isDisabled ? () => {} : () => setInfoMouseDown(false)}
      />
    </div>
  );
};

export default TextInput;

/*
complete 
- Toggle hidden password option
- Disabled state
- Prefix and suffix icons
- Placeholder text
- Value and onChange handler
- Validation states (error, success)
- Focus animation with border color change and slight shadow.
- Shake animation on validation error.
- Popover info icon
- Consider regex as a prop, digits not allowed
- Newlines are valid input in password mode
- Perhaps make submit button clickable
- No resizing
*/

/*
const [realValue, setRealValue] = useState("");
const [displayValue, setDisplayValue] = useState("");
const [cursorPosition, setCursorPosition] = useState(0);


const handleChange = (e) => {
  setRealValue()
};

//if the key is backspace, remove the character at the cursor position
//if the key is a character, add the inputted character at the cursor position

//maybe event target value


<textarea onChange={handleChange} value={displayValue} />

*/
