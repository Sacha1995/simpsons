import { useEffect, useRef, useState } from "react";
import FormElements from "../Reusable/FormElements";

const Search = ({ callback }) => {
  const [isFocussed, setIsFocussed] = useState(false);
  const searchTermRef = useRef();

  //set focus to searchbar
  useEffect(() => {
    if (!isFocussed && searchTermRef && searchTermRef.current) {
      searchTermRef.current.focus();
      setIsFocussed(true);
    }
  }, [isFocussed]);

  return (
    <FormElements
      searchTermRef={searchTermRef}
      type="text"
      id="searchStr"
      callback={callback}
      placeholder="Search character"
    />
  );
};

export default Search;
