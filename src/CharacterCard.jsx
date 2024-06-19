import { Component } from "react";
import Image from "./Image";
import Name from "./Name";
import Quote from "./Quote";

class CharacterCard extends Component {
  state = {
    isLiked: false,
    isClosed: false,
  };

  Like = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  Close = () => {
    this.setState({ isClosed: true });
  };

  render() {
    const { character, characterDirection, image, quote } = this.props.item;
    let { isLiked } = this.state;
    return (
      <div
        className={`characterCard ${character} ${
          this.state.isLiked ? "liked" : ""
        } ${this.state.isClosed ? "off" : ""}`}
      >
        <Name name={character} />
        <p className="close" onClick={this.Close}>
          X
        </p>

        <div
          className={`containerQuote ${
            characterDirection === "Left" ? "left" : "right"
          }`}
        >
          <Quote quote={quote} />
          <Image src={image} alt={character} />
        </div>
        <img
          src={isLiked ? "./liked.svg" : "./like.svg"}
          alt="Like icon"
          className="thumbsup"
          onClick={this.Like}
        ></img>
      </div>
    );
  }
}

export default CharacterCard;
