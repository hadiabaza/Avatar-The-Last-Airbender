import { useState } from "react";

function CharacterCard({ character, handleClick }) {
  const [isToggled, setToggled] = useState(false);
  const [isFavorite, setFavorite] = useState(false);

  if (isToggled === true) {
    return (
      <div id="button-card">
        <div id="big-card">
          <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt="character"></img>
          </div>
          <h3>Affiliation: {character.affiliation}</h3>
          <h3>Element: {character.element}</h3>
          <h3>Show: {character.show}</h3>
        </div>
        <br></br>
        <button
          onClick={function () {
            handleClick(character);
            setFavorite(!isFavorite);
          }}
        >
          Favorite
        </button>
        <button onClick={() => setToggled(!isToggled)}>Show Less</button>
      </div>
    );
  } else if (isToggled === false) {
    return (
      <div id="button-card">
        <div id="small-card">
          <div>
            <h2>{character.name}</h2>
            <img src={character.image} alt="character"></img>
          </div>
        </div>
        <br></br>
        <button
          onClick={function () {
            handleClick(character);
            setFavorite(!isFavorite);
          }}
        >
          Favorite
        </button>
        <button onClick={() => setToggled(!isToggled)}>Show More</button>
      </div>
    );
  }
}

export default CharacterCard;
