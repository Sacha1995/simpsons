import React, { Component } from "react";

class Search extends Component {
  state = { searchValue: "" };
  inputRef = React.createRef();

  componentDidMount() {
    if (this.inputRef.current) {
      this.inputRef.current.focus();
    }
  }

  render() {
    const handleChange = (value) => {
      this.setState({ searchValue: value });
      console.log(value);

      this.props.search(value);
    };

    return (
      <div className="inputBox">
        <input
          ref={this.inputRef}
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
