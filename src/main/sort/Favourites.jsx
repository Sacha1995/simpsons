import React, { Component } from "react";

class TotalFavourites extends Component {
  render() {
    const faved = this.props.characters.filter((item) => {
      return item.fav === true;
    });

    return <h3>Total Favourites: {faved.length}</h3>;
  }
}

export default TotalFavourites;
