import React, { Component } from "react";
import "./MarkdownInput.css";

class MarkdownInput extends Component {
  handleChange = (evt) => {
    this.props.handleChange(evt);
  };

  render() {
    return (
      <textarea
        onChange={this.handleChange}
        name="markdownInput"
        className="MarkdownInput"
      ></textarea>
    );
  }
}

export default MarkdownInput;
