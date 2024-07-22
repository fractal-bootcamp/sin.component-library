//import "./textInput.css";
import { useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import TitleIcon from "@mui/icons-material/Title";
interface TextInputProps {
  placeholder: string;
  isDisabled: boolean;
  //isPassword: boolean;
  //prefixIcon: React.ReactNode; //likely an icon in a div
  //suffixIcon: React.ReactNode; //likely an icon in a div
}

const TextInput = ({
  placeholder,
  isDisabled,
  //isPassword,
  //prefixIcon,
  //suffixIcon,
}: TextInputProps) => {
  const [value, setValue] = useState("");
  const isValid = !/[0-9]/.test(value); //derived state

  return (
    <div
      style={{
        border: "1px solid black",
        display: "flex",
        width: "max-content",
      }}
    >
      <TitleIcon />
      <textarea
        //type={isPassword ? "password" : "text"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        disabled={isDisabled}
        className={`${isValid ? "bg-green-500" : "bg-red-500"}`}
        style={{
          width: "200px",
          height: "200px",
          lineHeight: "36px",
        }}
      />
      <KeyboardReturnIcon
        style={{ marginLeft: "-30px", paddingTop: "180px" }}
      />
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

// - Why props?
// - If we use props, how does it make sense that we have to pass the placeholdername into props? (perhaps it does make sebse)
//
