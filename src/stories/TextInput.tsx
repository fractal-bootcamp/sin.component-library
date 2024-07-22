import { useEffect, useState } from "react";
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

const TextInput = ({
  placeholder,
  isDisabled,
  isPassword,
  //prefixIcon,
  //suffixIcon,
}: TextInputProps) => {
  const [value, setValue] = useState("");
  const isValid = !/[0-9]/.test(value); //derived state

  return (
    <div className="relative">
      <input
        //prefix={prefixIcon}
        //suffix={suffixIcon}
        type={isPassword ? "password" : "text"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        disabled={isDisabled}
        className={`${isValid ? "bg-green-500" : "bg-red-500"}`}
      />
      <TitleIcon className="absolute left-0 top-0" />
      <KeyboardReturnIcon className="absolute right-0 top-0" />
    </div>
  );
};

export default TextInput;

// - Placeholder text (done)
// - Value and onChange handler (done)
// - Toggle hidden password option (done)
// - Disabled state (done)

// - Validation states (error, success) (done)

// - Prefix and suffix icons (in progress)

// - Popover info icon  (in progress)

// - thus these have to be css

// - Focus animation with border color change and slight shadow. (in progress)

// - Shake animation on validation error. (in progress)
