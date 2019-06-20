import React, { Component } from "react";
import NavBar from "./components/navbar";
import Completed from "./components/completedlist";
import Pending from "./components/pendinglist";
import "./App.css";

class App extends Component {
  state = {
    value: "",
    pending: [],
    completed: [],
    empty1: "No pending Activity",
    empty2: "No pending activities completed"
  };

  format = () => {
    let empty1;
    let empty2;
    if (this.state.pending.length) {
      empty1 = "";
      this.setState({ empty1 });
    } else {
      empty1 = "No pending Activity";
      this.setState({ empty1 });
    }

    if (this.state.completed.length) {
      empty2 = "";
      this.setState({ empty2 });
    } else {
      empty2 = "No pending activities completed";
      this.setState({ empty2 });
    }
  };
  handleChange = e => {
    const value = e.target.value;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    document.getElementById("inputdata").value = "";
    if (this.state.value !== "") {
      const pending = this.state.pending;
      pending.reverse();
      pending.push(this.state.value);
      pending.reverse();
      this.setState({ pending });
    }
    let value = this.state.value;
    value = "";
    this.setState({ value });
    this.format();
  };

  handleDeletePending = target => {
    const dataToBeDelted = target.pending;
    var index = this.state.pending.indexOf(dataToBeDelted);
    if (index !== -1) {
      const pending = this.state.pending;
      pending.splice(index, 1);
      this.setState({ pending });
    }
    this.format();
    return dataToBeDelted;
  };

  handleDeleteCompleted = target => {
    const dataToBeDelted = target.completed;
    var index = this.state.completed.indexOf(dataToBeDelted);
    if (index !== -1) {
      const completed = this.state.completed;
      completed.splice(index, 1);
      this.setState({ completed });
    }
    this.format();
    return dataToBeDelted;
  };

  handleComplete = target => {
    const data = this.handleDeletePending(target);
    const completed = this.state.completed;
    completed.reverse();
    completed.push(data);
    completed.reverse();
    this.setState(completed);
    this.format();
  };

  handleDoAgain = target => {
    const data = this.handleDeleteCompleted(target);
    const pending = this.state.pending;
    pending.reverse();
    pending.push(data);
    pending.reverse();
    this.setState(pending);
    this.format();
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          pending={this.state.pending}
        />
        <Pending
          pending={this.state.pending}
          deleteList={this.handleDeletePending}
          completeList={this.handleComplete}
          empty={this.state.empty1}
        />
        <Completed
          completed={this.state.completed}
          deleteList={this.handleDeleteCompleted}
          doagain={this.handleDoAgain}
          empty={this.state.empty2}
        />
      </React.Fragment>
    );
  }
}

export default App;
