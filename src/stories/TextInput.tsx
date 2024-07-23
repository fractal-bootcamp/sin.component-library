import React, { useState, useEffect, useRef } from "react";
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

  const [realValue, setRealValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  //textAreaRef.current contains a reference to the textarea DOM node
  //refs always have a current property

  const regex = new RegExp(validationRegex);
  const isValid = regex.test(realValue);

  //this effect runs when either realValue or isPassword changes
  //it sets the displayValue to •s if isPassword is true, otherwise it sets it to the realValue
  useEffect(() => {
    setDisplayValue(isPassword ? "•".repeat(realValue.length) : realValue);
  }, [realValue, isPassword]);

  useEffect(() => {
    //if textAreaRef.current exists, set the selection range (the DOM node has a setSelectionRange method)
    if (textAreaRef.current) {
      textAreaRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [cursorPosition, displayValue]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    //set the cursor position to the selection start
    const newCursorPosition = e.target.selectionStart || 0;

    if (newValue.includes("\n") || newValue.includes("\r")) {
      return;
    }

    if (isPassword) {
      let updatedRealValue = realValue;
      if (newValue.length > realValue.length) {
        // Characters added (including paste)
        const addedChars = newValue.slice(realValue.length);
        updatedRealValue =
          realValue.slice(0, newCursorPosition - addedChars.length) +
          addedChars +
          realValue.slice(newCursorPosition - addedChars.length);
      } else if (newValue.length < realValue.length) {
        // Characters removed
        const removedCount = realValue.length - newValue.length;
        updatedRealValue =
          realValue.slice(0, newCursorPosition) +
          realValue.slice(newCursorPosition + removedCount);
      }
      setRealValue(updatedRealValue);
    } else {
      setRealValue(newValue);
    }

    setCursorPosition(newCursorPosition);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const selectionStart = e.currentTarget.selectionStart || 0;
    const selectionEnd = e.currentTarget.selectionEnd || 0;

    const newValue =
      realValue.slice(0, selectionStart) +
      pastedText +
      realValue.slice(selectionEnd);
    setRealValue(newValue);
    setCursorPosition(selectionStart + pastedText.length);
  };

  return (
    <div style={{ display: "flex" }} className="storybook-textInput">
      <TitleIcon style={{ paddingBottom: "180px", zIndex: 1 }} />
      <textarea
        ref={textAreaRef}
        disabled={isDisabled}
        value={displayValue}
        placeholder={placeholder}
        onChange={handleChange}
        onPaste={handlePaste}
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
