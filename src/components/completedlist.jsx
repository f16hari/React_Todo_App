import React, { Component } from "react";
import CList from "./clistcomponent";

class Completed extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="text-center p-3 text-primary">Completed Activities</h2>
          <p className="text-center text-secondary">{this.props.empty}</p>
          {this.props.completed.map(completed => (
            <div>
              <CList
                data={completed}
                deleteList={() => this.props.deleteList({ completed })}
                doAgain={() => this.props.doagain({ completed })}
              />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Completed;
