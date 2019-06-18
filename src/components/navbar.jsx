import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
          <form
            className="form-inline my-2 my-md-0 justify-content-md-center w-100 "
            onSubmit={this.props.onSubmit}
          >
            <input
              className="form-control w-50"
              type="text"
              placeholder="Enter new todo item ....."
              aria-label="Search"
              onChange={this.props.onChange}
            />
            <button className="btn btn-primary m-3" type="submit">
              ADD
            </button>
          </form>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
