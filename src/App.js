import React, { Component, useState } from "react";
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

function FunctionApp() {

  const [value, setValue] = useState('');
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleChange = e => {
    const value = e.target.value;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value !== "") {
      setPending([
        ...pending,
        value,
      ]);
    }
    console.log(pending);
  };

  return (
    <React.Fragment>
      <NavBar
        onSubmit={handleSubmit}
        onChange={handleChange}
        pending={pending}
      />
      <Pending pending={pending} />
      <Completed completed={completed} />
    </React.Fragment>
  );
}

export default FunctionApp;
