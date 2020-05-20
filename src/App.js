import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Keypad from "./components/keypad.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Keypad placeholder="Passcode" onEnter={function () {}} />
      </header>
    </div>
  );
}

export default App;
