import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";
class Modal extends React.Component {
  render() {
    if (!this.props.show) {
      return null; // Render nothing if the "show" prop is false
    }
    return (
      <div className="backdrop">
        <div className="modal">
          {this.props.children}
            Source: https://github.com/ajaichemmanam/react_3D_Keypad
          <div className="footer">
            <button className="close" onClick={this.props.onClose}>OK</button>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default Modal;
