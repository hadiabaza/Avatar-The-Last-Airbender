import { useState } from 'react';

function CharacterCard({character, handleClick}) {

    return( 
        <div id="character-card" 
        onClick={function() {
            handleClick(character);
        }} >
            <h2>{character.name}</h2>
            <img src={character.image}></img>
            <h3>Affiliation: {character.affiliation}</h3>
            <h3>Element: {character.element}</h3>
            <h3>Show: {character.show}</h3>
        </div>
    )
}

export default CharacterCard;