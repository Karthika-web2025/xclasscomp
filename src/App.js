import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
     Count: 0
    };
  }

  Increment = () => {
    this.setState({ Count: this.state.Count + 1 });
  };

    Decrement = () => {
    this.setState({ Count: this.state.Count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <h2>Count: {this.state.Count}</h2>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>

      </div>
    );
  }
}
export default Counter