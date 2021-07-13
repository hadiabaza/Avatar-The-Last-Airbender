import NavBar from './NavBar';
import AvatarContainer from './AvatarContainer';
import FavoritesContainer from './FavoritesContainer';

import { useState, useEffect } from 'react';

const MainContainer = () => {

    const [characters, setCharacters] = useState([])
    const [myCharacters, setMyCharacters] = useState([])

    const [seeFavorites, setSeeFavorites] = useState(false)

    

function addFavorite(character) {
        if(!myCharacters.includes(character)) {
            const updateMyFavorites = [...myCharacters, character]
            setMyCharacters(updateMyFavorites)
        }
    }

function removeFavorite(character) {
    const updateMyFavorites = [...myCharacters].filter(myCharacter => myCharacter.id !== character.id)
        setMyCharacters(updateMyFavorites)
        
    }

    useEffect(() => {
        fetch('http://localhost:3001/characters')
        .then(res => res.json())
        .then(data => setCharacters(data))
    }, [])

    if(seeFavorites === true) {
    return (
        <div id="main-container">
            <NavBar
            handleClick={setSeeFavorites}
            />
            <FavoritesContainer 
            myCharacters={myCharacters}
            handleClick={removeFavorite}
            />

        </div>
    )
    } else if(seeFavorites === false) {
        return (
            <div id="main-container">
                <NavBar
                handleClick={setSeeFavorites}
                />
                <AvatarContainer 
                characters={characters}
                handleClick={addFavorite}
                />
            </div>
        );
    }
}


export default MainContainer;
