
import './App.css';
import React , {useState} from "react";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");


  const handleButtonClick = (value) => {
    if(result){
      setInput(result + value);
      setResult("");
    }else{
      setInput(input + value);
    }
  }

  const clearInput = () => {
    setInput("");
    setResult("");
  } 


  const calculateResult = () => {
    try{
      const evalResult = eval(input);
      setResult(evalResult.toString());
    }
    catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="display">
        <input
          type="text"
          value={result || input}
          readOnly
          placeholder="0"
        />
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={clearInput} className="clear">
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;


// Why Use result || input?
// This logic ensures that:

// When there's a calculated result (result): The result is shown in the input field, overriding the current input.
// When there's no result (result is falsy): The field displays the user-typed expression (input


// Why Doesn't the if Block Run Initially?
// The if block runs only if result is truthy (e.g., after a calculation has been performed and result contains a value). Since the first three button presses don't trigger a calculation, result remains an empty string, and the else block executes each time.

