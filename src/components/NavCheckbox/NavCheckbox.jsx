import React from 'react'
import { useState } from 'react';
import "./NavCheckbox.scss"


const NavCheckbox = ({filterArr,toggleCheckedFilter }) => {
console.log (toggleCheckedFilter)
  return (
            <div className="checkbox"> 
                 <label value="one" className="checkbox__checkbox1">
                 <input id="checkbox__checkbox1" type="checkbox" checked={filterArr[0].checked} onChange={(event) => toggleCheckedFilter(filterArr[0].id)}
                      /> {filterArr[0].text}
                  </label>
                 <label className="checkbox__checkbox2">
                 <input id="checkbox__checkbox2 "type="checkbox"
                     checked={filterArr[1].checked}
                      onChange={(event) => toggleCheckedFilter(filterArr[1].id)}
                      /> {filterArr[1].text}
                   
                   </label>
                 <label className="checkbox__checkbox3">
                  <input type="checkbox"
                   checked={filterArr[2].checked}
                   onChange={(event) => toggleCheckedFilter(filterArr[2].id)}
                   /> {filterArr[2].text}
                </label>
            </div>
  )
}

export default NavCheckbox


// return (
//   <div className="checkbox">
//     <label><input type="checkbox" className="checkbox__checkbox1"></input>High AVP(beyond 6.0%)</label>
//       <label><input type="checkbox" value=""className="checkbox__checkbox2"></input>Classic Range </label>
//       <label ><input type="checkbox" value=""className="checkbox__checkbox3"></input>Acidic (less 4pH)</label>

//   </div>
// )


// const highAVP = beerArr.filter((beer =>{
//   return beer.abv>6.0;
// }))
// console.log(highAVP);

// const classicRange = beerArr.filter((beer =>{
//   return beer.abv>6.0;
// }))
// console.log(classicRange);

// const acidicPH = beerArr.filter((beer =>{
//   return beer.ph<4.0;
// }))
// console.log(acidicPH);
// handleToggle={true}>
                      {/* onChange={() => handleChange(checkboxId)}
                      index={checkboxId}   */}