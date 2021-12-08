import React, { Component } from "react";

class ClassHook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.changeCount}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassHook;
