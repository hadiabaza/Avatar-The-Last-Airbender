import React from 'react';

const NavBar = ({handleClick}) => {
    return (
        <div id="Nav-Bar">
            <button
            onClick={() => handleClick(false)}
            >Characters</button>
            <button
            onClick={() => handleClick(true)}
            >Favorites</button>
        </div>
    );
}

export default NavBar;
