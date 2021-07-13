import React from 'react';
import CharacterCard from './CharacterCard';

const AvatarContainer = ({characters}) => {
    return (
        <ul>
            <ul className="character-container">
            {
            characters.map(character => (
            <CharacterCard 
            key = {character.id}
            character={character}
            />
            ))
            }
            </ul>
        </ul>
    );
}

export default AvatarContainer;
