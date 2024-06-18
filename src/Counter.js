import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  onIncrement = () => {
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(this.state.count);
    }); //async
  };

  render() {
    return (
      <>
        <button onClick={this.onIncrement}>Increment</button>
        <p>{this.state.count}</p>
      </>
    );
  }
}

export default Counter;
