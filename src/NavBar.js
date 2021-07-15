import React from 'react';


const NavBar = ({handleClick, setFilter, resetFilter}) => {
    return (
        <div id="Nav-Bar">
            <div className="dropdown">
                <button className="dropbtn">Filter</button>
                <div className="dropdown-content">
                    <a onClick={() => setFilter("affiliation")}>Affiliation</a>
                    <a onClick={() => setFilter("element")}>Element</a>
                    <a onClick={() => setFilter("show")}>Show</a>
                    <a onClick={() => { 
                        setFilter("all");
                        resetFilter();
                }}>All</a>
                </div>
            </div>
            
            <button
            onClick={() => {
            handleClick(false);
            resetFilter();
            }}
            >Characters</button>
            
            <button
            onClick={() => {
            handleClick(true);
            resetFilter();
            }}
            >Favorites</button>
            
        </div>
    );
}

export default NavBar;
