import React from 'react'
import { useState } from 'react';
import "./NavCheckbox.scss"

// function onChange(id)
// {
//   return $("#"+id).next().text();
  
// }
// function handleChange(){
//    if(value=="No") {
//       //some function to call here
//   }else{
//      //other function to call here
//   }
// }


const NavCheckbox = ({handleChange,handleToggle }) => {

    
  return (
            <div className="checkbox"> 
                 <label value="one" className="checkbox__checkbox1">
                    <input type="checkbox"  
                      onChange={handleChange}
                      handleToggle={true}>
                      {/* onChange={() => handleChange(checkboxId)}
                      index={checkboxId}   */}
                    </input> High AVP( beyond 6.0%)
                  </label>
                 <label className="checkbox__checkbox2">
                   <input type="checkbox" ></input > Classic Range{" "}</label>
                 <label className="checkbox__checkbox3">
                  <input type="checkbox" ></input> Acidic (less 4pH)
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
