import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { date: new Date(), counter: 0 };
  }

  render() {
    return (
      <div>
        <h1>This is class component:{this.props.name}</h1>
        <h2>STATE : {this.state.date.toLocaleTimeString()}</h2>
        <h2>state : {this.state.counter}</h2>
        <button onClick={() => this.counter()}>Click</button>
      </div>
    );
  }

  counter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}
