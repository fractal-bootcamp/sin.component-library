import ProgressBar from "./stories/progressBar/ProgressBar";

function App() {
  return (
    <>
      <ProgressBar
        backgroundColor="pink"
        progressColor="blue"
        linearOrCircular="linear"
        isStriped={true}
      />
    </>
  );
}

export default App;
