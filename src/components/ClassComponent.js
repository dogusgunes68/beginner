import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { date: new Date(), counter: 0 };

    //this.increment = this.increment.bind(this); //increment func is binded to this keyword
  }

  render() {
    const { name, lastname } = this.props;
    return (
      <div>
        <h1>
          This is class component:{name} {lastname}
        </h1>
        <h2>STATE : {this.state.date.toLocaleTimeString()}</h2>
        <h2>state : {this.state.counter}</h2>
        <button onClick={this.increment}>Increase</button>
      </div>
    );
  }

  increment = () => {
    //If func is an arrow func, then we access the this keyword.So we dont need to bind this keyword to the increment function
    this.setState({
      counter: this.state.counter + 1,
    });
  };
}
