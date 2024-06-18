import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    const { src, alt } = this.props;
    return (
      <>
        <img src={src} alt={alt}></img>
      </>
    );
  }
}

export default Image;
