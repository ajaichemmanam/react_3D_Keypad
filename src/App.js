import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Keypad from "./components/Keypad.js";
import Keyboard from "./components/Keyboard.js";
function App() {
  const [comp, setComp] = React.useState(false);
  const handleClick = () => setComp(!comp);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="CompSwitch" onClick={handleClick}>
          {comp ? "Show Keypad" : "Show Keyboard"}
        </button>
        {comp ? (
          <Keyboard onEnter={function () {}} />
        ) : (
          <Keypad onEnter={function () {}} />
        )}
      </header>
    </div>
  );
}

export default App;
