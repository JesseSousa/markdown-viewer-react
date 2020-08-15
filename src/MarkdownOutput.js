import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./MarkdownOutput.css";

class MarkdownOutput extends Component {
  render() {
    return (
      <div className="MarkdownOutput">
        <ReactMarkdown source={this.props.source} />
      </div>
    );
  }
}

export default MarkdownOutput;
