import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./Characters/Characters.jsx";
import Header from "./Header/Header.jsx";
import Loading from "./Loading.jsx";
import "./fonts.css";
import "./loading.css";

const App = () => {
  const [simpsons, setSimpsons] = useState();
  const [searchStr, setSearchStr] = useState("");
  const [error, setError] = useState();
  const [select, setSelect] = useState("Original");

  const onFormEvent = (e) => {
    setSearchStr(e.target.value);
  };

  const getApiData = async () => {
    try {
      const { data } = await axios.get(
        `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
      );
      data.forEach((element, index) => {
        element.id = index + 1;
      });
      console.log(data);
      setSimpsons(data);
    } catch (e) {
      setError("API DOWN");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const toggleFav = (id) => {
    const _simpsons = [...simpsons];

    const indexOf = _simpsons.findIndex((item) => {
      return item.id === id;
    });

    _simpsons[indexOf].fav = !_simpsons[indexOf].fav;
    setSimpsons(_simpsons);
  };

  const onDelete = (id) => {
    const _simpsons = [...simpsons];
    const indexof = _simpsons.findIndex((item) => {
      return item.id === id;
    });

    _simpsons.splice(indexof, 1);
    setSimpsons(_simpsons);
  };

  // defensive checks
  if (error) {
    return <h1>The API is down, please come back later.</h1>;
  }

  if (!simpsons) {
    return <Loading />;
  }

  const getFilteredAndSorted = (e) => {
    let filtered = [...simpsons];

    // filter by search
    if (searchStr) {
      filtered = filtered.filter((item) => {
        return item.character.toLowerCase().includes(searchStr.toLowerCase());
      });
    }
    //  sort
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

  const filteredList = getFilteredAndSorted();

  return (
    <div>
      <Header
        characters={getFilteredAndSorted()}
        callback={onFormEvent}
        // searchTermRef={searchTermRef}
      />
      <h1>The Simpsons Quotes</h1>
      {searchStr !== "" && !filteredList.length && (
        <p className="message">There are no matches.</p>
      )}
      {!searchStr && !filteredList.length && (
        <p className="message">You have deleted all the quotes.</p>
      )}
      <Characters
        characters={getFilteredAndSorted()}
        toggleFav={toggleFav}
        onDelete={onDelete}
      />
    </div>
  );
};

export default App;
