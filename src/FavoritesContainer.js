import React from 'react';
import CharacterCard from './CharacterCard';

const FavoritesContainer = ({myCharacters, handleClick, isFavorite}) => {
    return (
            <ul className="character-container">
                {
            myCharacters.map(character => (
            <CharacterCard 
            key = {character.id}
            character={character}
            handleClick={handleClick}
            isFavorite={isFavorite}
            />
            ))
            }
            </ul>
    );
}

export default FavoritesContainer;
