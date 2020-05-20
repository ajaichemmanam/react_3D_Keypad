import React from "react";
import "./Buttons.css";

export default class Buttons extends React.Component {
  render() {
    return (
      <div className="buttons">
        <button id="seven" onClick={this.props.onDigit}>
          7
        </button>
        <button id="eight" onClick={this.props.onDigit}>
          8
        </button>
        <button id="nine" onClick={this.props.onDigit}>
          9
        </button>
        <button id="four" onClick={this.props.onDigit}>
          4
        </button>
        <button id="five" onClick={this.props.onDigit}>
          5
        </button>
        <button id="six" onClick={this.props.onDigit}>
          6
        </button>
        <button id="one" onClick={this.props.onDigit}>
          1
        </button>
        <button id="two" onClick={this.props.onDigit}>
          2
        </button>
        <button id="three" onClick={this.props.onDigit}>
          3
        </button>
        <button id="clear" onClick={this.props.onDelete}>
          Del
        </button>

        <button id="zero" onClick={this.props.onDigit}>
          0
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
