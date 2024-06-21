import React, { Component } from "react";

class Image extends Component {
  state = { src: this.props.src, alt: this.props.alt.replace(/\s/g, "") };
  i = 0;

  animation() {
    let gifName = this.state.alt;
    this.setState({ src: `./${gifName}.gif` });
    this.setState({ alt: "nothing" });
  }

  render() {
    let { alt } = this.props;
    if (this.state.alt === "BartSimpson" || "HomerSimpson") {
      this.animation();
    }

    return <img src={this.state.src} alt={alt} className={alt} />;
  }
}

export default Image;
