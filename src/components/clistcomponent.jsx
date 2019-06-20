import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./list.css";

class CList extends Component {
  state = {
    trash: "grey",
    tick: "green"
  };
  handleTrashColor = () => {
    let trash = this.state.trash;
    if (trash === "red") trash = "gray";
    else trash = "red";
    this.setState({ trash });
  };
  handleTickColor = () => {
    let tick = this.state.tick;
    if (tick === "green") tick = "gray";
    else tick = "green";
    this.setState({ tick });
  };
  render() {
    return (
      <React.Fragment>
        <div className="list p-3 mb-3">
          <span>
            {this.props.data}
            <button
              className="btn action-buttons"
              onClick={this.props.doAgain}
              onMouseOver={this.handleTickColor}
              onMouseOut={this.handleTickColor}
            >
              <FontAwesomeIcon
                icon={faCheckCircle}
                size="2x"
                color={this.state.tick}
              />
            </button>
            <button
              className="btn action-buttons"
              onClick={this.props.deleteList}
              onMouseOver={this.handleTrashColor}
              onMouseOut={this.handleTrashColor}
            >
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="2x"
                color={this.state.trash}
              />
            </button>
            <div className="clearfix" />
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default CList;
