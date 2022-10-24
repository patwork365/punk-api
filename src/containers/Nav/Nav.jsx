import React from "react";
import { useState } from "react";
import NavCheckbox from "../../components/NavCheckbox/NavCheckbox";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Nav.scss";

const Nav = (props) => {
   const { searchTerm, handleInput, handleToggle, handleChange } = props; 
  // const [searchTerm, setSearchTerm] = useState("");
  // const [toggle, setToggle] = useState(false);
  // const handleToggle = () => {setToggle(!toggle); };

  console.log(searchTerm);

  return (
    <div >
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      <NavCheckbox setToggle={handleToggle} handleChange={handleChange}/>
      

    </div>
  );
};

export default Nav;
