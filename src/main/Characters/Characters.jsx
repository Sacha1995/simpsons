import { Component } from "react";
import Character from "./CharacterCard";

class Characters extends Component {
  render() {
    return (
      <div>
        {this.props.characters.map((item, index) => {
          return (
            <Character
              key={index}
              item={item}
              toggleFav={this.props.toggleFav}
              onDelete={this.props.onDelete}
            />
          );
        })}
      </div>
    );
  }
}

export default Characters;
