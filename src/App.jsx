import axios from "axios";
import React, { Component } from "react";
import "./App.css";
import Characters from "./Characters";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );
    this.setState({ simpsons: data });
  }

  render() {
    console.log(this.state.simpsons);
    if (!this.state.simpsons) {
      return <p>Loading...</p>;
    }

    return <Characters characters={this.state.simpsons} />;
  }
}

export default App;
