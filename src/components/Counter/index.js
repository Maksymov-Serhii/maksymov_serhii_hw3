import React from "react";
import "./counter.css"

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() {
    return (
      <div className="some-component">
        <h2>Count component</h2>
        <p>Count: {this.state.counter}</p>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
        <button onClick={this.handleClick}>-</button>
      </div>
    )
  }
}

export default Counter;
