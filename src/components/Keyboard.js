import React, { Component } from "react";
import Pressure from "react-pressure";
import KeyboardButtons from "./KeyboardButtons";
import "./Keyboard.css";
class Keyboard extends Component {
  state = {
    value: [],
    forceValue: [],
    isActive: false,
    registeredValue: [],
    registeredForceValue: [],
    showKeyboard: true,
  };

  handleClick = (event) => {
    const value = event.target.innerText;
    // if (value) {
    let fvArray = this.state.forceValue;
    if (this.props.force > 0.5) {
      fvArray.push("1");
    } else {
      fvArray.push("0");
    }
    let currentValue = this.state.value;
    let newValue = currentValue.concat(value);
    this.setState({
      value: newValue,
      forceValue: fvArray,
    });
    // }
  };

  handleChange = (event) => {
    const { onChange } = this.props;
  };

  handleInputClick = (event) => {
    this.setState({ isActive: true });
  };

  handleDelete = (event) => {
    const value = this.state.value;
    const fvalue = this.state.forceValue;
    const v = value.slice(0, value.length - 1);
    const fv = fvalue.slice(0, fvalue.length - 1);
    this.setState({
      value: v,
      forceValue: fv,
    });
  };

  handleEnter = () => {
    const { onEnter } = this.props;
    const value = this.state.value;
    if (onEnter) {
      if (this.state.value.join("") === this.state.registeredValue.join("")) {
        if (
          this.state.forceValue.join("") ===
          this.state.registeredForceValue.join("")
        ) {
          this.setState({
            showKeyboard: false,
          });
        } else {
          alert("Force Mismatch");
        }
      } else {
        alert("Wrong Input");
      }
    }
  };
  handleRegister = () => {
    const value = this.state.value;
    this.setState({
      registeredValue: value,
      registeredForceValue: this.state.forceValue,
      value: [],
      forceValue: [],
    });
  };
  handleClear = () => {
    this.setState({
      value: [],
      forceValue: [],
    });
  };

  render() {
    const message = this.props.pressing ? "Stop please" : "Touch me";

    return (
      <div>
        {this.state.showKeyboard ? (
          <div className="keyboard">
            <div className="display-toolbar">
              <div className="display">
                <textarea
                  className="display-input"
                  id="display"
                  value={this.state.value.join("")}
                  onChange={this.handleChange}
                  onClick={this.handleInputClick}
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <KeyboardButtons
              onClear={this.handleClear}
              onDigit={this.handleClick}
              onDelete={this.handleDelete}
              onRegister={this.handleRegister}
              onEnter={this.handleEnter}
            />
          </div>
        ) : null}
        <p>{message}</p>
        <p>Click to see 3D Touch in action</p>
        <p> {Math.round(this.props.force * 100) / 100} force</p>
      </div>
    );
  }
}
const configs = {
  polyfill: true,
  polyfillSpeedUp: 1000,
  polyfillSpeedDown: 1000,
  preventSelect: true,
  only: null,
};

export default Pressure(Keyboard, configs);
