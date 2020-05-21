import React, { Component } from "react";
import "./KeyboardButtons.css";

export default class KeyboardButtons extends Component {
  state = {
    shift: false,
  };

  onShift = () => {
    let s = this.state.shift;
    this.setState({ shift: !s });
    console.log(s);
  };

  render() {
    return (
      <div className="keyboardbuttons">
        <button id="q" onClick={this.props.onDigit}>
          {this.state.shift ? "Q" : "q"}
        </button>
        <button id="w" onClick={this.props.onDigit}>
          {this.state.shift ? "W" : "w"}
        </button>
        <button id="e" onClick={this.props.onDigit}>
          {this.state.shift ? "E" : "e"}
        </button>
        <button id="r" onClick={this.props.onDigit}>
          {this.state.shift ? "R" : "r"}
        </button>
        <button id="t" onClick={this.props.onDigit}>
          {this.state.shift ? "T" : "t"}
        </button>
        <button id="y" onClick={this.props.onDigit}>
          {this.state.shift ? "Y" : "y"}
        </button>
        <button id="u" onClick={this.props.onDigit}>
          {this.state.shift ? "U" : "u"}
        </button>
        <button id="i" onClick={this.props.onDigit}>
          {this.state.shift ? "I" : "i"}
        </button>
        <button id="o" onClick={this.props.onDigit}>
          {this.state.shift ? "O" : "o"}
        </button>
        <button id="p" onClick={this.props.onDigit}>
          {this.state.shift ? "P" : "p"}
        </button>
        <button id="a" onClick={this.props.onDigit}>
          {this.state.shift ? "A" : "a"}
        </button>
        <button id="s" onClick={this.props.onDigit}>
          {this.state.shift ? "S" : "s"}
        </button>
        <button id="d" onClick={this.props.onDigit}>
          {this.state.shift ? "D" : "d"}
        </button>
        <button id="f" onClick={this.props.onDigit}>
          {this.state.shift ? "F" : "f"}
        </button>
        <button id="g" onClick={this.props.onDigit}>
          {this.state.shift ? "G" : "g"}
        </button>
        <button id="h" onClick={this.props.onDigit}>
          {this.state.shift ? "H" : "h"}
        </button>
        <button id="j" onClick={this.props.onDigit}>
          {this.state.shift ? "J" : "j"}
        </button>
        <button id="k" onClick={this.props.onDigit}>
          {this.state.shift ? "K" : "k"}
        </button>
        <button id="l" onClick={this.props.onDigit}>
          {this.state.shift ? "L" : "l"}
        </button>
        <button id="l" onClick={this.onShift}>
          Shift
        </button>
        <button id="z" onClick={this.props.onDigit}>
          {this.state.shift ? "Z" : "z"}
        </button>
        <button id="x" onClick={this.props.onDigit}>
          {this.state.shift ? "X" : "x"}
        </button>
        <button id="c" onClick={this.props.onDigit}>
          {this.state.shift ? "C" : "c"}
        </button>
        <button id="v" onClick={this.props.onDigit}>
          {this.state.shift ? "V" : "v"}
        </button>
        <button id="b" onClick={this.props.onDigit}>
          {this.state.shift ? "B" : "b"}
        </button>
        <button id="n" onClick={this.props.onDigit}>
          {this.state.shift ? "N" : "n"}
        </button>
        <button id="m" onClick={this.props.onDigit}>
          {this.state.shift ? "M" : "m"}
        </button>
        <button id="clear" onClick={this.props.onDelete}>
          Del
        </button>
        <button id="enter" onClick={this.props.onEnter}>
          Enter
        </button>
        <button id="register" onClick={this.props.onRegister}>
          Register
        </button>
      </div>
    );
  }
}
