import React, { Component } from "react";

class Search extends Component {
  state = { searchValue: "" };

  // fetchData = (value) => {
  //   this.props.searchData;
  // };

  render() {
    // const searchData = this.props.searchData.map((item) => {
    //   return item.character;
    // });
    // console.log(searchData);

    const handleChange = (value) => {
      this.setState({ searchValue: value });
      // this.fetchData(value);
      console.log(value);

      this.props.search(value);
    };

    return (
      <div className="input-box">
        <input
          type="search"
          name="search-characterCards"
          id="search-characterCards"
          className="search-input"
          placeholder="Search character"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    );
  }
}

export default Search;
