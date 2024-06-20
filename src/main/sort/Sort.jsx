import React, { Component } from "react";

class Sort extends Component {
  state = { value: "original" };

  onChange = (e) => {
    console.log(e.target.value);
    // this.setState({ value: value });
    this.props.sort(e.target.value);
  };

  render() {
    return (
      <div className="dropdown">
        <label for="order">Order:</label>
        <select id="order" name="order" onChange={this.onChange}>
          <option value="Original">Original</option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
          <option value="Liked">Liked</option>
        </select>
      </div>
    );
  }
}

export default Sort;
