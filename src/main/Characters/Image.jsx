import React, { Component } from "react";

class Image extends Component {
  animation() {
    let gifName = this.props.alt.replace(/\s/g, "");
    gifName = `./${gifName}.gif`;
    return gifName;
  }

  render() {
    const { alt, src } = this.props;

    return (
      <img
        src={
          alt === "Bart Simpson" || alt === "Homer Simpson"
            ? this.animation()
            : src
        }
        alt={alt}
        className={alt}
      />
    );
  }
}

export default Image;
