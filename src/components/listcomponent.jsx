import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./list.css";

class List extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="list p-3 mb-3">
          <span>
            {this.props.data}
            <button className="btn action-buttons">
              <FontAwesomeIcon icon={faCheckCircle} size="2x" color="green" />
            </button>
            <button className="btn action-buttons">
              <FontAwesomeIcon icon={faTrashAlt} size="2x" color="red" />
            </button>
            <div className="clearfix" />
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default List;
