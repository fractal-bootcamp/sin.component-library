import "./textinput.css";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import TitleIcon from "@mui/icons-material/Title";
interface TextInputProps {
  placeholder: string;
  isDisabled: boolean;
  isPassword: boolean;
  //prefixIcon: React.ReactNode; //likely an icon in a div
  //suffixIcon: React.ReactNode; //likely an icon in a div
}

//make a style change conditional on the value of a pro

const TextInput = ({
  placeholder,
  isDisabled,
  isPassword,
  //prefixIcon,
  //suffixIcon,
}: TextInputProps) => {
  const [value, setValue] = useState("");
  const isValid = !/[0-9]/.test(value); //derived state

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
    setValue(e.target.value); //problem here
  };

  const displayValue = isPassword ? "•".repeat(value.length) : value;

  return (
    <div style={{ display: "flex" }} className="storybook-textInput">
      <TitleIcon style={{ paddingBottom: "180px", zIndex: 1 }} />
      <textarea
        value={displayValue}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={isDisabled}
        className={`${isValid ? "bg-green-500" : "bg-red-500"}`}
        style={{
          width: "200px",
          height: "200px",
          marginLeft: "-25px",
          textIndent: "25px",
          lineHeight: "30px",
        }}
      />
      <KeyboardReturnIcon
        style={{ marginLeft: "-30px", paddingTop: "180px" }}
      />
      <button onClick={() => console.log(value)}>test</button>
    </div>
  );
};

export default TextInput;

// - Placeholder text (done)
// - Value and onChange handler (done)
// - Disabled state (done)

// - Toggle hidden password option (done)

// - Validation states (error, success) (done)

// - Prefix and suffix icons (done)

// - Popover info icon  (in progress)

// - Focus animation with border color change and slight shadow. (in progress)

// - Shake animation on validation error. (in progress)
