import React, { Component } from "react";
import { BartSimpson, HomerSimpson } from "../img/Animations";

class Image extends Component {
  state = { src: this.props.src, array: this.props.alt.replace(/\s/g, "") };
  i = 0;

  animation(array) {
    this.setState({ src: array[this.i].src });
    this.setState({ array: "nothing" });
    setTimeout(() => {
      if (this.i === array.length - 1) {
        this.i = 0;
      } else {
        this.i++;
      }
      this.animation(array);
    }, array[this.i].duration);
  }

  render() {
    let { alt } = this.props;
    if (this.state.array === "BartSimpson") {
      this.animation(BartSimpson);
    }

    if (this.state.array === "HomerSimpson") {
      this.animation(HomerSimpson);
    }

    return <img src={this.state.src} alt={alt} className={alt} />;
  }
}

export default Image;

// const Image = ({ src, alt }) => {
//   let i = 0;

//   let array = alt.replace(/\s/g, "");

//   function animation(array) {
//     src = array[i].src;
//     let timeout = setTimeout(() => {
//       if (i === array.length - 1) {
//         i = 0;
//       } else {
//         i++;
//       }
//       animation(array);
//     }, array[i].duration);
//   }

//   if (array === "BartSimpson") {
//     for (let i = 0; i < BartSimpson.length - 1; i++) {
//       src = array[i].src;
//     }
//   }

//   if (array === "HomerSimpson") {
//     animation(HomerSimpson);
//   }

//   return <img src={src} alt={alt} className={alt} />;
// };

// export default Image;
