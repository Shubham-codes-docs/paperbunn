import "./App.css";
import Form from "./components/forms/FormWrapper";

function App() {
  return (
    <>
      <div className="App container flex flex-col items-center justify-center">
        <h4 className="text-lg sm:text-3xl font-medium text-white">
          Let's get to know you better!
        </h4>
        <Form />
      </div>
    </>
  );
}

export default App;
