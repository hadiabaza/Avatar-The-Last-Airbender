import NavBar from './NavBar';
import AvatarContainer from './AvatarContainer';
import FavoritesContainer from './FavoritesContainer';

import { useState, useEffect } from 'react';

const MainContainer = () => {

    const [characters, setCharacters] = useState([])
    const [myCharacters, setMyCharacters] = useState([])

    const [seeFavorites, setSeeFavorites] = useState(false)

    const [filterType, setFilterType] = useState("all")

    

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
        if(filterType === "affiliation") {
        return (
            <div id="main-container">
                <NavBar
                handleClick={setSeeFavorites}
                setFilter={setFilterType}
                />
                <br></br>
                <span className="filter-btns">
                    <button>Air Nomad</button>
                    <button>Water Tribe</button>
                    <button>Fire Nation</button>
                    <button>Earth Kingdom</button>
                    <button>Republic City</button>
                </span>
                <AvatarContainer 
                characters={characters}
                handleClick={addFavorite}
                />
            </div>
        );
        } else if(filterType === "all"){
            return (
                <div id="main-container">
                    <NavBar
                    handleClick={setSeeFavorites}
                    setFilter={setFilterType}
                    />
                    <AvatarContainer 
                    characters={characters}
                    handleClick={addFavorite}
                    />
                </div>
            );
        } else if(filterType === "element") {
            return (
                <div id="main-container">
                    <NavBar
                    handleClick={setSeeFavorites}
                    setFilter={setFilterType}
                    />
                    <br></br>
                    <span className="filter-btns">
                        <button>Air</button>
                        <button>Water</button>
                        <button>Fire</button>
                        <button>Earth</button>
                        <button>None</button>
                    </span>
                    <AvatarContainer 
                    characters={characters}
                    handleClick={addFavorite}
                    />
                </div>
            );
        } else if(filterType === "show") {
            return (
                <div id="main-container">
                    <NavBar
                    handleClick={setSeeFavorites}
                    setFilter={setFilterType}
                    />
                    <br></br>
                    <span className="filter-btns">
                        <button>Avatar, The Last Airbender</button>
                        <button>The Legend of Korra</button>
                    </span>
                    <AvatarContainer 
                    characters={characters}
                    handleClick={addFavorite}
                    />
                </div>
            );
        }
    }
}


export default MainContainer;
