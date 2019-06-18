import React, { Component } from "react";
import List from "./listcomponent";

class Pending extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="text-center p-3">Pending Activities</h2>
          {this.props.pending.map(pending => (
            <div>
              <List data={pending} />
            </div>
          ))}
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Pending;
