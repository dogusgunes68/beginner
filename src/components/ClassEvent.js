import { Component } from "react";

export default class ClassEvent extends Component {
  handleEvent() {
    console.log("Clicked");
  }
  render() {
    return (
      <div className="App">
        This is a class based component
        <button onClick={this.handleEvent}>Click</button>
      </div>
    );
  }
}
