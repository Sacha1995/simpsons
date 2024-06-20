import TotalFavourites from "./Favourites.jsx";
import Search from "./Search.jsx";
import Sort from "./Sort.jsx";

const Header = ({ characters, callback, searchStr }) => {
  return (
    <div className="containerHeader">
      <TotalFavourites characters={characters} />
      <Search callback={callback} searchStr={searchStr} />
      <Sort callback={callback} />
    </div>
  );
};

export default Header;
