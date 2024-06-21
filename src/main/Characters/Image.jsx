import React, { Component } from "react";

class Image extends Component {
  state = { src: this.props.src, alt: this.props.alt.replace(/\s/g, "") };
  i = 0;

  animation() {
    let gifName = this.state.alt;
    gifName = `./${gifName}.gif`;
    return gifName;
  }

  render() {
    let { alt, src } = this.props;

    return (
      <img
        src={
          this.state.alt === "BartSimpson" || this.state.alt === "HomerSimpson"
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
