import React, { Component } from "react";

class Completed extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="text-center p-3">Completed Activities</h2>
          {this.props.completed.map(completed => (
            <div>{completed}</div>
          ))}
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Completed;
