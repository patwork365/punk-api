import { useState } from "react";
import "./BeerTiles.scss"
import React from 'react'

export const BeerTiles = (props) => {
    const {beerArr}=props;
    const beerTilesJSX=beerArr.map((beer)=>(
    //  <div className="beer-grid"> 
        <div className="beer-tiles" key={beer.id}>   
            <img 
                className="beer-tiles__img"
                src={beer.image_url}
                alt=""
                // key={beer.id}
            />   
            <h2 className="beer-tiles__name"> {beer.name}   </h2>
            <p className="beer-tiles__desp">{beer.description}</p>
        </div>
    //  </div>  
    ));
  return (
    <>
    <div className="beer-grid">{beerTilesJSX}</div>
    </>
  );
};
export default BeerTiles