import "./SearchBox.scss";
import React from "react";


const SearchBox = (props) => {
  
  const {searchTerm, handleInput,} = props;

 
 
  return (
    <form className="search-boxs">
 
      <input className="search-box" id="search-box"type="text" placeholder="Enter Beer Search Criteria" value={searchTerm} onInput={handleInput}/>
       
    </form>
  );
};

export default SearchBox;
