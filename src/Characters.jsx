import { Component } from "react";
import Character from "./CharacterCard";

class Characters extends Component {
  state = {};

  render() {
    return this.props.characters.map((item, index) => {
      return <Character key={index} item={item} />;
    });
  }
}
export default Characters;
