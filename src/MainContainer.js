import NavBar from './NavBar';
import AvatarContainer from './AvatarContainer';
import FavoritesContainer from './FavoritesContainer';

import { useState, useEffect } from 'react';

const MainContainer = () => {

    const [characters, setCharacters] = useState([])
    const [myCharacters, setMyCharacters] = useState([])

    const [isFavorite, setFavorite] = useState(false)

    function toggleFavorite(character) {

        setFavorite(!isFavorite)

        if(!isFavorite === true) {
        if(!myCharacters.includes(character)) {
            const updateMyFavorites = [...myCharacters, character]
            setMyCharacters(updateMyFavorites)
        }
    } else if(!isFavorite === false) {

        const updateMyFavorites = [...myCharacters].filter(myCharacter => myCharacter.id !== character.id)
        setMyCharacters(updateMyFavorites)
}
    }

    useEffect(() => {
        fetch('http://localhost:3001/characters')
        .then(res => res.json())
        .then(data => setCharacters(data))
    }, [])
    
    return (
        <div id="main-container">
            <NavBar 
            
            />
            <AvatarContainer 
            characters={characters}
            handleClick={toggleFavorite}
            isFavorite={isFavorite}
            />
            <FavoritesContainer 
            myCharacters={myCharacters}
            handleClick={toggleFavorite}
            isFavorite={isFavorite}
            />
        </div>
    );
}


export default MainContainer;
