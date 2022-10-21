import React from 'react'
import { useState } from 'react';
import "./NavCheckbox.scss"


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


const NavCheckbox = (props) => {
//  {beerArr}=props;
    const [checked, setChecked] = useState(false); 
    // const filterVal=
  return (
    <div className="checkbox">
      <label><input type="checkbox" className="checkbox__checkbox1"></input>High AVP(beyond 6.0%)</label>
        <label><input type="checkbox" value=""className="checkbox__checkbox2"></input>Classic Range </label>
        <label ><input type="checkbox" value=""className="checkbox__checkbox3"></input>Acidic (less 4pH)</label>

    </div>
  )
}

export default NavCheckbox