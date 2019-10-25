import React, { Component } from "react";
import "./spinner.css"

class Spinner extends Component {
  render() {
    return (
      <div className="mx-auto">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Spinner;
