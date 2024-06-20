import { Component } from "react";
import Image from "./Image";
import Name from "./Name";
import Quote from "./Quote";

class CharacterCard extends Component {
  render() {
    const { character, characterDirection, image, quote, fav, id, match } =
      this.props.item;
    const { toggleFav, onDelete } = this.props;
    return (
      <div
        className={`characterCard ${character} ${fav ? "liked" : ""} ${
          match ? "match" : ""
        }`}
      >
        <Name name={character} />
        <div className="containerClose" onClick={() => onDelete(id)}>
          <p className="close">X</p>
        </div>

        <div
          className={`containerQuote ${
            characterDirection === "Left" ? "left" : "right"
          }`}
        >
          <Quote quote={quote} />
          <Image src={image} alt={character} />
        </div>
        <img
          src={fav ? "./liked.svg" : "./like.svg"}
          alt="Like icon"
          className="thumbsup"
          // onClick={this.Like}
          onClick={() => toggleFav(id)}
        ></img>
      </div>
    );
  }
}

export default CharacterCard;
