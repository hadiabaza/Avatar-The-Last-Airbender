import React from 'react';

const NavBar = ({handleClick, setFilter, resetFilter}) => {
    return (
        <div id="Nav-Bar">
            <div className="dropdown">
                <button className="dropbtn">Filter</button>
                <div className="dropdown-content">
                    <a onClick={() => setFilter("affiliation")} href="#">Affiliation</a>
                    <a onClick={() => setFilter("element")} href="#">Element</a>
                    <a onClick={() => setFilter("show")} href="#">Show</a>
                    <a onClick={() => { 
                        setFilter("all");
                        resetFilter();
                }} href="#">All</a>
                </div>
            </div>
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
