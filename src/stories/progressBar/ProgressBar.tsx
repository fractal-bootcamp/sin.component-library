interface ProgressBarProps {
  backgroundColor: string;
  progressColor: string;
  linearOrCircular: "linear" | "circular";
  isStriped: boolean;
  progress: number;
}

const ProgressBar = ({
  backgroundColor,
  progressColor,
  linearOrCircular,
  isStriped,
  progress,
}: ProgressBarProps) => {
  if (linearOrCircular === "linear") {
    return (
      <div
        style={{
          aspectRatio: "16 / 1",
          height: "20px",
          backgroundImage: `linear-gradient(to right, ${progressColor} ${progress}%, ${backgroundColor} 0%)`,
        }}
      ></div>
    );
  } else {
    return (
      <div
        style={{
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
    );
  }
};

export default ProgressBar;

/*

completed
- Color
- Linear / Circular
- Customizable progress percentage


- Color customization based on progress (?)
- Striped and animated stripes option
- Smooth progress increase animation
- Pulse effect on completion.

background: repeating-linear-gradient(
  45deg,
  #606dbc,
  #606dbc 10px,
  #465298 10px,
  #465298 20px
); 


*/
