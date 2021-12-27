import React from "react";

const NavBar = ({ handleClick, setFilter, resetFilter }) => {
  return (
    <div id="Nav-Bar">
      <div className="dropdown">
        <button className="dropbtn">Filter</button>
        <div className="dropdown-content">
          <div onClick={() => setFilter("affiliation")}>Affiliation</div>
          <div onClick={() => setFilter("element")}>Element</div>
          <div onClick={() => setFilter("show")}>Show</div>
          <div
            onClick={() => {
              setFilter("all");
              resetFilter();
            }}
          >
            All
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          handleClick(false);
          resetFilter();
        }}
      >
        Characters
      </button>

      <button
        onClick={() => {
          handleClick(true);
          resetFilter();
        }}
      >
        Favorites
      </button>
    </div>
  );
};

export default NavBar;
