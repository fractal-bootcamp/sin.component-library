import { Page } from "./stories/Page";
import TextInput from "./stories/TextInput";

function App() {
  return (
    <>
      <TextInput
        placeholder="     Enter your text"
        isDisabled={false}
        isPassword={false}
      ></TextInput>
    </>
  );
}

export default App;
