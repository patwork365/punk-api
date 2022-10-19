import React from 'react'
import "./Main.scss"
import beers from "../../data/beers.js"
import Nav from '../Nav/Nav'
import BeerTiles from "../../components/BeerTiles/BeerTiles"


const Main = (props) => {
  console.log(beers);
    // const {beerArr} =props;
  return (
    <div className="app__frame">
          <section className="app__frame__nav-side">
            <Nav />
          </section>
          <section className="beer-grid"> 
             <BeerTiles beerArr={beers}/>
          </section>
    
     </div>





    //  <div className="beer-grid"> 
    //        <BeerTiles beerArr={beers}/>
    // </div>
    
  )
}

export default Main

// import React from 'react'
// import "./Main.scss"
// import beers from "../../data/beers.js"

// import BeerTiles from "../../components/BeerTiles/BeerTiles"


// const Main = (props) => {
//   console.log(beers);
//     const {beerArr} =props;
//   return (
//          <div className="beer-grid"> 
//            <BeerTiles beerArr={beers}/>
//     </div>
    
//   )
// }

// export default Main
