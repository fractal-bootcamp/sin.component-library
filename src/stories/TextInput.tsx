import React, { useState, useEffect } from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./textinput.css";
import TitleIcon from "@mui/icons-material/Title";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

interface TextInputProps {
  placeholder: string;
  isDisabled: boolean;
  isPassword: boolean;
  validationRegex: RegExp;
}

//This component starts by taking in placeholder, isDisabled, and isPassword props.
//Wherever this component is used, each property in TextInputProps needs to be specified
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

  //realValue and setRealValue stores the actual value of the input
  const [realValue, setRealValue] = useState("");
  //displayValue is used to show a masked input
  const [displayValue, setDisplayValue] = useState("");
  //isValid is false if there are integers detected in the realValue string
  const isValid = validationRegex.test(realValue);
  //this hook checks if isPassword is true. Then, it either sets DisplayValue equal to either bullets or realvalue
  //it fires whenever realValue, or isPassword changes

  useEffect(() => {
    setDisplayValue(isPassword ? "•".repeat(realValue.length) : realValue);
  }, [realValue, isPassword]);

  //this function is in charge of calculating and storing the "real value" of the input!
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //first, get the newValue from event target value
    //e.target value looks like ••••••k, because masking logic is applied at the end
    const newValue = e.target.value;
    if (isPassword) {
      if (newValue.includes("\n")) {
        // Prevent user from entering new lines
        return;
      }
      if (newValue.length > realValue.length) {
        //Bullets from e.target.value removed
        const addedChars = newValue.replace(/•/g, "");
        //New character(s) added
        setRealValue((prev) => prev + addedChars);
      } else {
        // Character(s) removed
        setRealValue((prev) => prev.slice(0, newValue.length));
      }
    } else {
      setRealValue(newValue);
    }
  };

  return (
    <div style={{ display: "flex" }} className="storybook-textInput">
      <TitleIcon style={{ paddingBottom: "180px", zIndex: 1 }} />
      <textarea
        value={displayValue}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={isDisabled}
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
        onClick={() => console.log(realValue)}
        onMouseEnter={() => setSubmitHover(true)}
        onMouseLeave={() => setSubmitHover(false)}
        onMouseDown={() => setSubmitMouseDown(true)}
        onMouseUp={() => setSubmitMouseDown(false)}
      />

      <InfoIcon
        style={{
          marginLeft: "-20px",
          color: infoHover ? "lightblue" : "black",
          transform: infoMouseDown ? "scale(0.9)" : "scale(1)",
        }}
        onClick={() => console.log("Info")}
        onMouseEnter={() => setInfoHover(true)}
        onMouseLeave={() => setInfoHover(false)}
        onMouseDown={() => setInfoMouseDown(true)}
        onMouseUp={() => setInfoMouseDown(false)}
      />
    </div>
  );
};

export default TextInput;

/*
complete (rank by difficulty)
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
