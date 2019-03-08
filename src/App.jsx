import React, { Component } from "react";
import Form from "./Form";

class App extends Component {
  state = {
    started: false,
    form: {}
  };

  handleFormSubmit = ({ email }) => {
    const { form } = this;

    this.setState({
      ...form,
      email
    });
  };

  handleClick = () => {
    this.setState({
      started: !this.state.started
    })
  };

  render() {
    return (
      <div className='apps'>
        <div data-hook="hi button" onClick={this.handleClick}>Start</div>

        {this.state.started && <Form onSubmit={this.handleFormSubmit}/>}
      </div>
    );
  }
}

export default App;
