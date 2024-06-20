import axios from "axios";
import { Component } from "react";
import "./App.css";
import Characters from "./Characters/Characters.jsx";
import Header from "./Header/Header.jsx";
import Loading from "./Loading.jsx";
import "./loading.css";

class App extends Component {
  state = { searchStr: "Simpson", select: "Original" };

  async componentDidMount() {
    try {
      let { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
      );
      data.forEach((element, index) => {
        element.id = index + 1;
      });
      console.log(data);
      this.setState({ simpsons: data });
    } catch (e) {
      this.setState({ error: "API DOWN" }); // it does not update the state
      console.log(this.state);
      console.log(this.state.error); // it does show console.log
    }
  }

  toggleFav = (id) => {
    let simpsons = [...this.state.simpsons];

    const indexOf = simpsons.findIndex((item) => {
      return item.id === id;
    });

    simpsons[indexOf].fav = !simpsons[indexOf].fav;
    this.setState({ simpsons: simpsons });
  };

  onFormEvent = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  getFilteredAndSorted = (e) => {
    const { searchStr, simpsons, select } = this.state;
    let filtered = [...simpsons];

    // filter by search
    if (searchStr) {
      filtered = filtered.filter((item) => {
        return item.character.toLowerCase().includes(searchStr.toLowerCase());
      });
    }

    //sort
    switch (select) {
      case "AZ":
        filtered.sort((a, b) => {
          if (a.character > b.character) {
            return 1;
          } else if (a.character < b.character) {
            return -1;
          }
          return 0;
        });
        break;
      case "ZA":
        filtered.sort((a, b) => {
          if (a.character < b.character) {
            return 1;
          } else if (a.character > b.character) {
            return -1;
          }
          return 0;
        });
        break;
      case "Liked":
        filtered.sort((a) => {
          if (a.fav) {
            return -1;
          }
          return 0; // gets rid of warning
        });
        break;
      case "Original":
        break;
      default:
        console.log("something went wrong with the sorting");
        break;
    }

    return filtered;
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
    const { simpsons, error, searchStr } = this.state;

    if (error) {
      <h1>The API is down, please come back later.</h1>;
    }

    if (!simpsons) {
      return <Loading />;
    }

    const filteredList = this.getFilteredAndSorted();

    return (
      <div>
        <Header
          characters={this.getFilteredAndSorted()}
          callback={this.onFormEvent}
          searchStr={searchStr}
        />
        <h1>The Simpsons Quotes</h1>
        {searchStr !== "" && !filteredList.length && (
          <p className="message">There are no matches.</p>
        )}
        {!searchStr && !filteredList.length && (
          <p className="message">You have deleted all the quotes.</p>
        )}
        <Characters
          characters={this.getFilteredAndSorted()}
          toggleFav={this.toggleFav}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
