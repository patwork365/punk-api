import { useState } from "react";
// import BeerInfo from "./BeerInfo/BeerInfo";
import "./BeerTiles.scss"
import React from 'react'

export const BeerTiles = (props) => {
    const {beerArr}=props;
    
        const beerTilesJSX=beerArr.map((beer)=>(
        <div className="beer-grid"> 
            <div className="beer-tiles" key={beer.id}>   
              <img 
                    className="beer-tiles__img"
                    src={beer.image_url}
                    alt=""
              />     
            
                  {/* key={beer.id} */}
              <h2 className="beer-tiles__name"> {beer.name}   </h2>
              <span> ABV = {beer.abv} </span> <span> pH = {beer.ph} </span>
              <p className="beer-tiles__desp">{beer.description}</p>
            </div>
        </div>  
        ));
    return (
    <>
       <div className="beer-grid">{beerTilesJSX}</div>
      {/* <BeerInfo beertiles={beerArr}/> */}
    </>
  );
};
export default BeerTiles



// import { useState } from "react";
// import "./BeerTiles.scss"
// import React from 'react'

// export const BeerTiles = (props) => {
//     const {beerArr}=props;

//     const beerTilesJSX=beerArr.map((beer)=>(
//       //added lines 12 and 18
//      <div className="beer-grid"> 
//         <div className="beer-tiles" key={beer.id}>   
//         {/* <Link to={`/beers/${beer.id}`} key={beer.id}>   */}
//             <img 
//                 className="beer-tiles__img"
//                 src={beer.image_url}
//                 alt=""
//             />     
//         {/* </Link>     */}
//                {/* key={beer.id} */}
//             <h2 className="beer-tiles__name"> {beer.name}   </h2>
//             <p className="beer-tiles__desp">{beer.description}</p>
//         </div>
//      </div>  
//     ));
//   return (
//     <>
//     <div className="beer-grid">{beerTilesJSX}</div>
//       {/* <BeerInfo beertiles={beerArr}/> */}
//     </>
//   );
// };
// export default BeerTiles