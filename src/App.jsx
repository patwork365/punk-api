import React from 'react'
import "./App.scss"
import Nav from "./containers/Nav/Nav"
import Main from "./containers/Main/Main"

import { useState } from "react";

const App = () => {
  
  // const beerz=()=>{
    
      
  //       fetch("https://api.punkapi.com/v2/beers")
  //       .then(res=>res.json())
  //       .then (data =>data)
  //       .catch((error) => console.log(error));
  //       // setBeers(data);
  //     }
  //   beerz();

  return (
    <div className="app">
        <div className="app__frame">
            {/* <section className="app__frame__nav-side">
              <Nav />
            </section> */}
            <section className="app__frame__main"> Beer List
             <Main />
            </section>
            
        </div>
    </div>
  )
}

export default App



















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
