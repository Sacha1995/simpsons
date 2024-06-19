import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Characters from "./Characters";
import Search from "./Search";

class App extends Component {
  state = {};

  originalData;

  async componentDidMount() {
    let { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.originalData = [...data];
    this.setState({ simpsons: data });
  }

  sortRandom = () => {
    this.setState({ simpsons: [...this.originalData] });
  };

  sortAZ = (input) => {
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
  };

  sortZA = (input) => {
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
  };

  search = (searchStr) => {
    let regex = new RegExp(searchStr, "gi");
    let output = this.state.simpsons.filter((item) =>
      regex.test(item.character)
    );
    console.log("made it here with search", searchStr);
    this.setState({ simpsons: output });
  };

  render() {
    const { simpsons } = this.state;
    if (!simpsons) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <Search searchData={simpsons} search={this.search} />
        <button className="btn" onClick={() => this.sortRandom()}>
          Original
        </button>
        <button className="btn" onClick={() => this.sortZA(simpsons)}>
          Z-A
        </button>
        <button className="btn" onClick={() => this.sortAZ(simpsons)}>
          A-Z
        </button>
        <Characters characters={simpsons} />;
      </div>
    );
  }
}

export default App;
