import React from 'react';
import CharacterCard from './CharacterCard';

const AvatarContainer = ({characters, handleClick}) => {
    return (
            <ul className="character-container">
            {
            characters.map(character => (
            <CharacterCard 
            key = {character.id}
            character={character}
            handleClick={handleClick}
            />
            ))
            }
        </ul>
    );
}

export default AvatarContainer;
