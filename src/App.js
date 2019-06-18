import React, { Component } from "react";
import NavBar from "./components/navbar";
import Completed from "./components/completedlist";
import Pending from "./components/pendinglist";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    pending: [],
    completed: []
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value != "") {
      const pending = this.state.pending;
      pending.push(this.state.value);
      this.setState({ pending });
    }
    console.log(this.state.pending);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          pending={this.state.pending}
        />
        <Pending pending={this.state.pending} />
        <Completed completed={this.state.completed} />
      </React.Fragment>
    );
  }
}

export default App;
