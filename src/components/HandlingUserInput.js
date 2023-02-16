import { Component } from "react";
export default class HandlingUserInput extends Component {
  state = {
    firstname: "",
    lastname: "",
  };

  handleChange = (event) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fname: this.state.firstname,
      lname: this.state.lastname,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.firstname}
          />
          <input
            type="text"
            value={this.state.lastname}
            onChange={this.handleLastNameChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
