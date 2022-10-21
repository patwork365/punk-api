import React from 'react'
import "./Main.scss"
import { useState } from 'react'
// import beerz from "../../data/beers.js"
import Nav from '../Nav/Nav'
import BeerTiles from "../../components/BeerTiles/BeerTiles"
// for api - https://api.punkapi.com/v2/beers

const Main = (props) => {
  const url = "https://api.punkapi.com/v2/beers";
  const [beers, setBeers] = useState(beerz);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(false);

    //sam way
    // const beerz=()=>{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then (data =>data)
    //     .catch((error) => console.log(error));
    //     // setBeers(data);
    //   }
    // beerz();

    //ollie way
     
        const beerz=async()=>{
          try{
              const res=await fetch(url);
              const data=await res.json();
             }catch(error){
              console.log(error);
              }
                console.log(data);
                setBeers(data); //goes in loop cause setProfile state rerenders
        };

    console.log("line16",beers)
    console.log(searchTerm)
        const handleToggle=()=> {
           setToggle(!toggle)

         }
        // console.log(beers);

        // Filter by search that comes from SearchBox 
        // const filteredBeerArr=beers.filter((beer)=>{
        //      if (searchTerm !==" "){
        //        const beerTitleLower = beer.name.toLowerCase();
        //           if (beerTitleLower.includes(searchTerm)){
        //             return  setBeers(beerTitleLower)
        //           }
                  
        //     }
        //   }) 
    
        // const filteredArr = beers.filter((beer) => {return beer.name.toLower()
        //    if(filteredArr.includes(searchTerm)){
        //    setBeers(filteredArr)
        //  }
        // } 




       //Calculate highAVP 
        const highAVP = beers.filter((beer) =>{
          return beer.abv>6.0;
        });
        console.log(highAVP);
    
        //Calculate ClassicRange
        const classicRange = beers.filter((beer) =>{
          const yearChk = beer.first_brewed.substring(beer.first_brewed.length-4, beer.first_brewed.length); 
          return yearChk>2010;
        })
        // console.log("classicRange",classicRange);
    
        //Calculate achdicPH
        const acidicPH = beers.filter((beer =>{
          return beer.ph<4.0;
        }))
         console.log("acidicPH", acidicPH);

        const handleInput=(event)=> {
          console.log(event.target.value)
          setSearchTerm(event.target.value.toLowerCase())
        }  
    // const handleInput=event=>{
    //   const inputValue=event.target.value.toLowerCase();
    //   setSearchTerm(inputValue);
    //  }   
    console.log("Main.jsx",searchTerm);
    return (
      <div className="app__frame">
        <section className="app__frame__nav-side">
          {/* this works */}
          {/* <Nav beerArr={beers}/>    */}
          {/* Attempt to get value of Filter and Toggle from Nav */}
          <Nav searchTerm={searchTerm} handleInput={handleInput} handleToggle={handleToggle} />

        </section>
        <section className="beer-grid">
          <BeerTiles beerArr={beers} />
        </section>

      </div>

    )
  }

export default Main
