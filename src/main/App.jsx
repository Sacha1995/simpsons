import axios from "axios";
import { Component } from "react";
import "./App.css";
import Characters from "./Characters/Characters.jsx";
import Loading from "./Loading.jsx";
import Search from "./Search/Search.jsx";
import "./loading.css";
import TotalFavourites from "./sort/Favourites.jsx";
import Sort from "./sort/Sort.jsx";

class App extends Component {
  state = {};

  originalData;

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
    this.originalData = [...data];
    this.setState({ simpsons: data });
    this.setState({ searchStr: "" });
  }

  toggleFav = (id) => {
    let simpsons = [...this.state.simpsons];

    const indexOf = simpsons.findIndex((item) => {
      return item.id === id;
    });

    simpsons[indexOf].fav = !simpsons[indexOf].fav;
    this.setState({ simpsons: simpsons });
  };

  sort = (sortType) => {
    let input = [...this.state.simpsons];
    switch (sortType) {
      case "AZ":
        input.sort((a, b) => {
          if (a.character < b.character) {
            return -1;
          }
          if (a.character > b.character) {
            return 1;
          }
          return 0;
        });
        this.setState({ simpsons: input });
        break;
      case "Original":
        this.setState({ simpsons: [...this.originalData] });
        break;
      case "ZA":
        input.sort((a, b) => {
          if (a.character > b.character) {
            return -1;
          }
          if (a.character < b.character) {
            return 1;
          }
          return 0;
        });
        this.setState({ simpsons: input });
        break;
      case "Liked":
        input.sort((a) => {
          if (a.fav) {
            return -1;
          }
          return 0; // gets rid of warning
        });
        this.setState({ simpsons: input });
        break;
      default:
        console.log("nothing happened");
        break;
    }
  };

  search = (searchStr) => {
    const simpsons = [...this.originalData];
    const output = simpsons.filter((item) => {
      return item.character.toLowerCase().includes(searchStr.toLowerCase());
    });

    this.setState({ simpsons: output });
    this.setState({ searchStr: searchStr });
  };

  onDelete = (id) => {
    const simpsons = [...this.state.simpsons];
    const indexof = simpsons.findIndex((item) => {
      return item.id === id;
    });

    simpsons.splice(indexof, 1);
    this.setState({ simpsons: simpsons });
  };

  render() {
    const { simpsons } = this.state;
    if (!simpsons) {
      return <Loading />;
    }

    return (
      <div>
        <div className="containerHeader">
          <TotalFavourites characters={simpsons} />
          <Search searchData={simpsons} search={this.search} />
          <Sort sort={this.sort} />
        </div>
        {this.state.searchstr !== "" && !this.state.simpsons.length && (
          <p className="message">There are no matches.</p>
        )}
        {!this.state.searchStr && !this.state.simpsons.length && (
          <p className="message">You have deleted all the quotes.</p>
        )}
        <h1>The Simpsons Quotes</h1>
        <Characters
          characters={simpsons}
          toggleFav={this.toggleFav}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
