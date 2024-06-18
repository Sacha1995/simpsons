import React, { Component } from "react";

class Quote extends Component {
  state = {};
  render() {
    return <q>{this.props.quote}</q>;
  }
}

export default Quote;
