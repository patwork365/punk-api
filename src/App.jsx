import React from 'react'
import "./App.scss"
import Nav from "./containers/Nav/Nav"
import Main from "./containers/Main/Main"
// import beers from "./data/beers.js"
import { useState } from "react";

const App = () => {
  
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
