import "./progressBar.css";
import { useState } from "react";

interface ProgressBarProps {
  backgroundColor: string;
  progressColor: string;
  linearOrCircular: "linear" | "circular";
  isStriped: boolean;
}

const ProgressBar = ({
  backgroundColor,
  progressColor,
  linearOrCircular,
  isStriped,
}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  const makeProgress = () => {
    if (progress < 100) {
      setProgress(progress + 1);
    }
  };

  if (linearOrCircular === "linear") {
    return (
      <div>
        <div
          style={{
            animation: progress === 100 ? "pulse 1s infinite" : "",
            aspectRatio: "16 / 1",
            height: "20px",
            backgroundColor: backgroundColor,
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundImage: isStriped
                ? `repeating-linear-gradient(45deg, ${progressColor}, ${progressColor} 10px, ${backgroundColor} 10px, ${backgroundColor} 20px)`
                : `linear-gradient(to right, ${progressColor} 100%, ${backgroundColor} 0%)`,
            }}
          ></div>
        </div>
        <button style={{ backgroundColor: "green" }} onClick={makeProgress}>
          Click to make progress
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            animation: progress === 100 ? "pulse 1s infinite" : "",
            borderRadius: "100%",
            aspectRatio: "1 / 1",
            height: "500px",
            backgroundImage: `conic-gradient( ${progressColor} ${progress}%, ${backgroundColor} 0%)`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: "100%",
              aspectRatio: "1 / 1",
              height: "80%",
              backgroundColor: "white",
            }}
          ></div>
        </div>
        <button style={{ backgroundColor: "green" }} onClick={makeProgress}>
          Click to make progress
        </button>
      </div>
    );
  }
};

export default ProgressBar;

/*

completed
- Color
- Linear / Circular
- Customizable progress percentage
- Smooth progress increase animation
- Pulse effect on completion.
- Striped and animated stripes option
- Smooth progress increase animation
- Color customization based on progress (?)
*/
