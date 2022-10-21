import "./SearchBox.scss";
import React from "react";

const SearchBox = (props) => {
  
  const {searchTerm, handleInput } = props;
 
  return (
    <form className="search-box">
      {/* <label htmlFor={label} className="search-box__label"> */}
      {/* <label className="search-box__label"> */}
        {/* {capitalizedLabel} */}
      {/* </label> */}
      <input type="text" placeholder="Enter Search Criteria" value={searchTerm} onInput={handleInput}
        // className="search-box__input"
        
      />
    </form>
  );
};

export default SearchBox;
