import TextInput from "./stories/TextInput";

function App() {
  return (
    <>
      <TextInput
        placeholder="Enter your text"
        isDisabled={true}
        isPassword={false}
        validationRegex={/^[a-zA-Z0-9]+$/}
      ></TextInput>
    </>
  );
}

export default App;
