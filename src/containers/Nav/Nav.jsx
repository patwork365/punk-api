import React from "react";
import { useState } from "react";
import NavCheckbox from "../../components/NavCheckbox/NavCheckbox";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Nav.scss";

const Nav = (props) => {
   const { searchTerm, handleInput, toggleCheckedFilter, filterArr } = props; 

  return (
    <div >
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <NavCheckbox toggleCheckedFilter={toggleCheckedFilter} filterArr={filterArr}/>
    </div>
  );
};

export default Nav;
