import { Component } from "react";
import Image from "./Image";
import Name from "./Name";
import Quote from "./Quote";

class CharacterCard extends Component {
  state = {
    isLiked: false,
  };

  Like = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  render() {
    const { character, characterDirection, image, quote } = this.props.item;
    let { isLiked } = this.state;
    return (
      <div
        className={`characterCard ${character} ${
          this.state.isLiked ? "liked" : ""
        }`}
      >
        <Name name={character} />

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
