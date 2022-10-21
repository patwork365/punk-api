import React from "react";
import { useState } from "react";
import NavCheckbox from "../../components/NavCheckbox/NavCheckbox";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Nav.scss";

const Nav = (props) => {
  // const {beerArr} = props;  //this works
  const { searchTerm, handleInput, handleToggle } = props;
  // const [searchTerm, setSearchTerm] = useState("");
  // const [toggle, setToggle] = useState(false);

  // const handleToggle = () => {setToggle(!toggle); };

  console.log(searchTerm);

  return (
    <div>
      {/* <NavCheckbox setToggle={handleToggle}/> */}

      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />

      <div className="checkbox">
        {/* <div onClick={handleToggle}> */}
          <label>
            <input type="checkbox" className="checkbox__checkbox1"></input>High AVP(beyond 6.0%)
          </label>
        {/* </div> */}
        <label>
          <input type="checkbox" value=""className="checkbox__checkbox2"></input>Classic Range{" "}</label>
        <label>
          <input type="checkbox" value=""className="checkbox__checkbox3"></input>Acidic (less 4pH)
        </label>
      </div>
      <div className="navbar__checkbox2" type="checkbox" how></div>
      <div type="checkbox" are you></div>

      {/* <input className="navbar__input" placeholder="Enter criteria"></input> */}
      
    </div>
  );
};

export default Nav;
