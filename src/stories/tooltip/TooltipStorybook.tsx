import { useState } from "react";
import Tooltip, { TooltipProps } from "./Tooltip";

// Example component for Storybook; actual Tooltip is in Tooltip.tsx
export default function TooltipStorybook(props: TooltipProps) {
  const [focused, setFocused] = useState<boolean>(false);

  function mouseOver() {
    setFocused(true);
  }

  function mouseLeave() {
    setFocused(false);
  }
  return (
    <div style={{color: 'white', position: 'relative'}} onMouseOver={mouseOver} onMouseLeave={mouseLeave}>
      Sample text.
      <Tooltip {...props} focused={focused} />
    </div>
  )
}