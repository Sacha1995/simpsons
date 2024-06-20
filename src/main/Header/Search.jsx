import FormElements from "../Reusable/FormElements";

const Search = ({ callback, searchStr }) => {
  // inputRef = React.createRef();

  // componentDidMount() {
  //   if (this.inputRef.current) {
  //     this.inputRef.current.focus();
  //   }
  // }

  return (
    <div className="inputBox">
      <FormElements
        // ref={this.inputRef}
        type="text"
        id="searchStr"
        callback={callback}
        placeholder="Search character"
        value={searchStr}
      />
    </div>
  );
};

export default Search;
