import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div className="containerLoading">
        <div class="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p className="loading">Loading...</p>
      </div>
    );
  }
}

export default Loading;
