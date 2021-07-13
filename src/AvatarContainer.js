import React from 'react';
import CharacterCard from './CharacterCard';

const AvatarContainer = ({characters, handleClick, isFavorite }) => {
    return (
            <ul className="character-container">
            {
            characters.map(character => (
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

export default AvatarContainer;
