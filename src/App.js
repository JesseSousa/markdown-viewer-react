import React, { Component } from "react";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownInput: "",
    };
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Markdown Previewer</h1>
        </header>
        <div className="markdown-container">
          <MarkdownInput handleChange={this.handleChange} />
          <MarkdownOutput source={this.state.markdownInput} />
        </div>
        <footer>
          Made by{" "}
          <a href="https://github.com/JesseSousa" target="noopener">
            Jesse Sousa
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
