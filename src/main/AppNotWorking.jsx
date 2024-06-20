import axios from "axios";
import { Component } from "react";
import "./App.css";
import Characters from "./Characters/Characters";
import Search from "./Search/Search.jsx";
import TotalFavourites from "./sort/Favourites";
import Sort from "./sort/Sort.jsx";

class App extends Component {
  //state imagina
  //state = {simpsons: {AZ: AZorderedlist, original: originallist, ZA: ZAoreredlist, liked: likedorderedlist}}

  state = {};

  async componentDidMount() {
    let { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    data.forEach((element, index) => {
      element.id = index + 1;
      element.fav = false;
      element.match = false;
    });
    console.log(data);
    // this.setState({ simpsons: { original: data } });
    this.setState({ searchStr: "" });
    // make AZ list
    let AZlist = [...data];
    AZlist.sort((a, b) => {
      if (a.character < b.character) {
        return -1;
      }
      if (a.character > b.character) {
        return 1;
      }
      return 0;
    });
    // this.setState({
    //   simpsons: { ...this.state.simpsons, AZ: AZlist },
    // });
    // make ZA list
    let ZAlist = [...data];
    ZAlist.sort((a, b) => {
      if (a.character > b.character) {
        return -1;
      }
      if (a.character < b.character) {
        return 1;
      }
      return 0;
    });
    // this.setState({ simpsons: { ...this.state.simpsons, ZA: ZAlist } });
    // make liked list
    let likedList = [...data];
    likedList.sort((a) => {
      if (a.fav) {
        return -1;
      }
      return 0; // gets rid of warning
    });
    // this.setState({ simpsons: { ...this.state.simpsons, liked: likedList } });
    this.setState({
      simpsons: { original: data, AZ: AZlist, ZA: ZAlist, liked: likedList },
    });
  }

  originalData;

  // async componentDidMount() {
  //   let { data } = await axios.get(
  //     `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
  //   );
  //   data.forEach((element, index) => {
  //     element.id = index + 1;
  //     element.fav = false;
  //     element.match = false;
  //   });
  //   console.log(data);
  //   this.originalData = [...data];
  //   this.setState({ simpsons: data });
  //   this.setState({ searchStr: "" });
  // }

  toggleFav = (id) => {
    let simpsons = [...this.state.simpsons];

    const indexOf = simpsons.findIndex((item) => {
      return item.id === id;
    });

    simpsons[indexOf].fav = !simpsons[indexOf].fav;
    this.setState({ simpsons: simpsons });
  };

  sort = (sortType) => {
    const { AZ, ZA, original, liked } = this.state;
    switch (sortType) {
      case "AZ":
        return AZ;
      case "Original":
        return original;
      case "ZA":
        return ZA;
      case "Liked":
        return liked;
      default:
        console.log("something went wrong");
    }
  };

  // sort = (sortType) => {
  //   let input = [...this.state.simpsons];
  //   switch (sortType) {
  //     case "AZ":
  //       input.sort((a, b) => {
  //         if (a.character < b.character) {
  //           return -1;
  //         }
  //         if (a.character > b.character) {
  //           return 1;
  //         }
  //         return 0;
  //       });
  //       this.setState({ simpsons: input });
  //       break;
  //     case "Original":
  //       this.setState({ simpsons: [...this.originalData] });
  //       break;
  //     case "ZA":
  //       input.sort((a, b) => {
  //         if (a.character > b.character) {
  //           return -1;
  //         }
  //         if (a.character < b.character) {
  //           return 1;
  //         }
  //         return 0;
  //       });
  //       this.setState({ simpsons: input });
  //       break;
  //     case "Liked":
  //       input.sort((a) => {
  //         if (a.fav) {
  //           return -1;
  //         }
  //         return 0; // gets rid of warning
  //       });
  //       this.setState({ simpsons: input });
  //       break;
  //     default:
  //       console.log("nothing happened");
  //       break;
  //   }
  // };

  // search = (searchStr) => {
  //   const simpsons = [...this.originalData];
  //   const output = simpsons.filter((item) => {
  //     return item.character.toLowerCase().includes(searchStr.toLowerCase());
  //   });

  //   this.setState({ simpsons: output });
  //   this.setState({ searchStr: searchStr });
  // };

  // onDelete = (id) => {
  //   const simpsons = [...this.state.simpsons];
  //   const indexof = simpsons.findIndex((item) => {
  //     return item.id === id;
  //   });

  //   simpsons.splice(indexof, 1);
  //   this.setState({ simpsons: simpsons });
  // };

  render() {
    console.log(this.state);
    const { original } = this.state.simpsons;
    if (!original) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <Search searchData={original} search={this.search} />
        <Sort sort={this.sort} />
        <TotalFavourites characters={original} />
        {this.state.searchstr !== "" &&
          !this.state.simpsons.original.length && <p>There are no matches.</p>}
        {!this.state.searchStr && !this.state.simpsons.original.length && (
          <p>You have deleted all the quotes.</p>
        )}
        <Characters
          characters={original}
          toggleFav={this.toggleFav}
          onDelete={this.onDelete}
        />
      </div>
    );
  }

  // render() {
  //   const { simpsons } = this.state;
  //   if (!simpsons) {
  //     return <p>Loading...</p>;
  //   }

  //   return (
  //     <div>
  //       <Search searchData={simpsons} search={this.search} />
  //       <Sort sort={this.sort} />
  //       <TotalFavourites characters={simpsons} />
  //       {this.state.searchstr !== "" && !this.state.simpsons.length && (
  //         <p>There are no matches.</p>
  //       )}
  //       {!this.state.searchStr && !this.state.simpsons.length && (
  //         <p>You have deleted all the quotes.</p>
  //       )}
  //       <Characters
  //         characters={simpsons}
  //         toggleFav={this.toggleFav}
  //         onDelete={this.onDelete}
  //       />
  //     </div>
  //   );
  // }
}

export default App;
