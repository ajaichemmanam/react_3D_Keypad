import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Keypad from "./components/Keypad.js";
import Keyboard from "./components/Keyboard.js";
import Modal from "./components/Modal.js";
function App() {
  const [comp, setComp] = React.useState(false);
  const [info, setInfo] = React.useState(false);
  const handleSwitch = () => setComp(!comp);
  const handleClick = () => setInfo(!info);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="CompSwitch" onClick={handleSwitch}>
          {comp ? "Show Keypad" : "Show Keyboard"}
        </button>
        <button className="InfoSwitch" onClick={handleClick}>
          Info &#9432;
        </button>
        {comp ? (
          <Keyboard onEnter={function () {}} />
        ) : (
          <Keypad onEnter={function () {}} />
        )}
        <Modal show={info} onClose={handleClick}>
          <p style={{textAlign:"left"}}>
        <ul>
        <li>Enter any number (Eg. 1486)</li>
          <li> Keep Pressing on any digit (Eg.4) for a higher force </li>
          <li>Click Register </li>
          <li>Try to enter with same number but without force or long press on the digit (Fails) </li>
          <li>Try to enter using the same force applied on the digit (Success)</li>
          </ul>
          </p>
        </Modal>
      </header>
    </div>
  );
}

export default App;
