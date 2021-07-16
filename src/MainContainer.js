import NavBar from "./NavBar";
import AvatarContainer from "./AvatarContainer";
import FavoritesContainer from "./FavoritesContainer";

import { useState, useEffect } from "react";

const MainContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [myCharacters, setMyCharacters] = useState([]);

  const [seeFavorites, setSeeFavorites] = useState(false);

  const [filterType, setFilterType] = useState("all");

  const [filter, setFilter] = useState([]);
  const [favoriteFilter, setFavoriteFilter] = useState([]);

  function addFavorite(character) {
    if (!myCharacters.includes(character)) {
      const updateMyFavorites = [...myCharacters, character];
      setMyCharacters(updateMyFavorites);
    }
  }

  function removeFavorite(character) {
    const updateMyFavorites = [...myCharacters].filter(
      (myCharacter) => myCharacter.id !== character.id
    );
    setMyCharacters(updateMyFavorites);
  }

  useEffect(() => {
    fetch("http://localhost:3001/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  function favNations(nation) {
    const filteredFav = myCharacters.filter(
      (character) => character.affiliation === nation
    );
    setFavoriteFilter(filteredFav);
  }

  function favElements(element) {
    const filteredFav = myCharacters.filter(
      (character) => character.element === element
    );
    setFavoriteFilter(filteredFav);
  }

  function favShows(show) {
    const filteredFav = myCharacters.filter(
      (character) => character.show === show
    );
    setFavoriteFilter(filteredFav);
  }

  function favReset() {
    const filteredFav = myCharacters;
    setFavoriteFilter(filteredFav);
  }

  function nations(nation) {
    const filteredList = characters.filter(
      (character) => character.affiliation === nation
    );
    setFilter(filteredList);
  }

  function elements(element) {
    const filteredList = characters.filter(
      (character) => character.element === element
    );
    setFilter(filteredList);
  }

  function shows(show) {
    const filteredList = characters.filter(
      (character) => character.show === show
    );
    setFilter(filteredList);
  }

  function reset() {
    const filteredList = characters;
    setFilter(filteredList);
  }

  if (seeFavorites === true) {
    if (filterType === "affiliation") {
      return (
        <div id="main-container">
          <NavBar
            handleClick={setSeeFavorites}
            setFilter={setFilterType}
            resetFilter={favReset}
          />
          <br></br>
          <span className="filter-btns">
            <button onClick={() => favNations("Air Nomads")}>Air Nomads</button>
            <button onClick={() => favNations("Water Tribe")}>
              Water Tribe
            </button>
            <button onClick={() => favNations("Fire Nation")}>
              Fire Nation
            </button>
            <button onClick={() => favNations("Earth Kingdom")}>
              Earth Kingdom
            </button>
            <button onClick={() => favNations("Republic City")}>
              Republic City
            </button>
          </span>

          <FavoritesContainer
            myCharacters={
              favoriteFilter.length === 0 ? myCharacters : favoriteFilter
            }
            handleClick={removeFavorite}
          />
        </div>
      );
    } else if (filterType === "all") {
      return (
        <div id="main-container">
          <NavBar
            handleClick={setSeeFavorites}
            setFilter={setFilterType}
            resetFilter={favReset}
          />
          <FavoritesContainer
            myCharacters={myCharacters}
            handleClick={addFavorite}
          />
        </div>
      );
    } else if (filterType === "element") {
      return (
        <div id="main-container">
          <NavBar
            handleClick={setSeeFavorites}
            setFilter={setFilterType}
            resetFilter={favReset}
          />
          <br></br>
          <span className="filter-btns">
            <button onClick={() => favElements("Air")}>Air</button>
            <button onClick={() => favElements("Water")}>Water</button>
            <button onClick={() => favElements("Fire")}>Fire</button>
            <button onClick={() => favElements("Earth")}>Earth</button>
            <button onClick={() => favElements("None")}>None</button>
          </span>
          <FavoritesContainer
            myCharacters={
              favoriteFilter.length === 0 ? myCharacters : favoriteFilter
            }
            handleClick={removeFavorite}
          />
        </div>
      );
    } else if (filterType === "show") {
      return (
        <div id="main-container">
          <NavBar
            handleClick={setSeeFavorites}
            setFilter={setFilterType}
            resetFilter={favReset}
          />
          <br></br>
          <span className="filter-btns">
            <button onClick={() => favShows("Avatar, The Last Airbender")}>
              Avatar, The Last Airbender
            </button>
            <button onClick={() => favShows("The Legend of Korra")}>
              The Legend of Korra
            </button>
          </span>
          <FavoritesContainer
            myCharacters={
              favoriteFilter.length === 0 ? myCharacters : favoriteFilter
            }
            handleClick={removeFavorite}
          />
        </div>
      );
    }
  } else if (seeFavorites === false) {
    if (filterType === "affiliation") {
      return (
        <div id="main-container">
          <NavBar
            handleClick={setSeeFavorites}
            setFilter={setFilterType}
            resetFilter={reset}
          />

          <br></br>
          <span className="filter-btns">
            <button onClick={() => nations("Air Nomads")}>Air Nomads</button>
            <button onClick={() => nations("Water Tribe")}>Water Tribe</button>
            <button onClick={() => nations("Fire Nation")}>Fire Nation</button>
            <button onClick={() => nations("Earth Kingdom")}>
              Earth Kingdom
            </button>
            <button onClick={() => nations("Republic City")}>
              Republic City
            </button>
          </span>

          <AvatarContainer
            characters={filter.length === 0 ? characters : filter}
            handleClick={addFavorite}
          />
        </div>
      );
    } else if (filterType === "all") {
      return (
        <div id="main-container">
          <NavBar
            handleClick={setSeeFavorites}
            setFilter={setFilterType}
            resetFilter={reset}
          />
          <AvatarContainer characters={characters} handleClick={addFavorite} />
        </div>
      );
    } else if (filterType === "element") {
      return (
        <div id="main-container">
          <NavBar
            handleClick={setSeeFavorites}
            setFilter={setFilterType}
            resetFilter={reset}
          />
          <br></br>
          <span className="filter-btns">
            <button onClick={() => elements("Air")}>Air</button>
            <button onClick={() => elements("Water")}>Water</button>
            <button onClick={() => elements("Fire")}>Fire</button>
            <button onClick={() => elements("Earth")}>Earth</button>
            <button onClick={() => elements("None")}>None</button>
          </span>
          <AvatarContainer
            characters={filter.length === 0 ? characters : filter}
            handleClick={addFavorite}
          />
        </div>
      );
    } else if (filterType === "show") {
      return (
        <div id="main-container">
          <NavBar
            handleClick={setSeeFavorites}
            setFilter={setFilterType}
            resetFilter={reset}
          />
          <br></br>
          <span className="filter-btns">
            <button onClick={() => shows("Avatar, The Last Airbender")}>
              Avatar, The Last Airbender
            </button>
            <button onClick={() => shows("The Legend of Korra")}>
              The Legend of Korra
            </button>
          </span>
          <AvatarContainer
            characters={filter.length === 0 ? characters : filter}
            handleClick={addFavorite}
          />
        </div>
      );
    }
  }
};

export default MainContainer;
