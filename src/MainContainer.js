import NavBar from './NavBar';
import AvatarContainer from './AvatarContainer';
import FavoritesContainer from './FavoritesContainer';

import { useState, useEffect } from 'react';

const MainContainer = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/characters')
        .then(res => res.json())
        .then(data => setCharacters(data))
    }, [])
    
    return (
        <div id="main-container">
            <NavBar />
            <AvatarContainer 
            characters={characters}
            />
            <FavoritesContainer />
        </div>
    );
}

export default MainContainer;
