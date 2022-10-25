import React from 'react'
import "./Main.scss"
import { useState, useEffect } from 'react'
import beerz from "../../data/beers.js"
import Nav from '../Nav/Nav'
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import BeerTiles from "../../components/BeerTiles/BeerTiles"
import NavCheckbox from "../../components/NavCheckbox/NavCheckbox"
// import BeerInfo from "./components/BeerInfo/BeerInfo";


const Main = (props) => {
  
  const [beers, setBeers] = useState([]);
  // const [beers, setBeers] = useState(beerz);
  const [searchTerm, setSearchTerm] = useState("");
  const [toggle, setToggle] = useState(false);
  const initFilterArr = [
    {id: 1, text: "High ABV (>6/0%)", checked: false},
    {id: 2, text: "Classic Range", checked: false},
    {id: 3, text: "Acidic (ph < 4)", checked: false}
  ];
   const [filterArr, updateFilterArr] = useState(initFilterArr);

  
    fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=40`)
      .then((response) => response.json())
      .then((json) => {
        setBeers(json);
      });
    
      //  useEffect(() => {
      //    setBeers(beers);
      //     // setPageCount(Math.ceil(beerData.length /20));
      //   }, [beers]);
       
      const toggleCheckedFilter = (filterId) => {
           const updatedFilterArr = filterArr.map((filter) => {
            if (filterId===filter.id){
              return {...filter, checked: !filter.checked}
            }else{
              return {...filter}
            }})
           updateFilterArr (updatedFilterArr)
           }
    
         
         const handleInput=(event)=> {
          setSearchTerm(event.target.value.toLowerCase())
        }   
       
        const filteredArr = beers.filter((beer) =>{
            if (filterArr[0].checked){
                 return beer.abv>6.0
            }
            })
       
       
      const filteredBeers = beers.filter((beer) =>{
           const beersTitleLower = beer.name.toLowerCase();
           return beersTitleLower.includes(searchTerm)
             && (filterArr[0].checked ? beer.abv > 6: true )
             && (filterArr[1].checked ? beer.first_brewed.substr(3,6) < 2010: true )
             && (filterArr[2].checked ? beer.ph < 4: true )
         })

    if (beers.length<filteredBeers.length ) {
        beers=filteredBeers;

    } 
     
    return (
      // <Router>
        <div className="app__frame">
            <section className="app__frame__nav-side">
                  <Nav searchTerm={searchTerm} handleInput={handleInput} 
                    filterArr={filterArr} 
                    toggleCheckedFilter={toggleCheckedFilter} />
             </section>
            {/* <Route  */}
            <section className="beer-grid">
                <BeerTiles beerArr={filteredBeers} />
            </section>
        </div>
      // {/* </Router>   */}
    )
  }

export default Main



//  const id=5;

//   useEffect(() => {
//     const fetchBeer = async() => {
//       const res = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
//       const json = await res.json();
//       setBeers(json[0]);
//     }
//     fetchBeer()
//   // eslint-disable-next-line
//   }, [id])

  // const fetchBeerData = () => {
  //   fetch("https://api.punkapi.com/v2/beers")
  //   .then(response => response.json())
  //   .then(jsonResponse => setBeers(jsonResponse))
  //   .catch(err => console.log("err"));
  // }

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
             // const beerz=async()=>{
        //   try{
        //       const res=await fetch(url);
        //       const data=await res.json();
        //      }catch(error){
        //       console.log(error);
        //       }
        //         console.log(data);
        //         setBeers(data); //goes in loop cause setProfile state rerenders
        // };


       
        //  //Calculate highAVP 
      //   const highAVP = beers.filter((beer) =>{
      //     return beer.abv>6.0;
      //   });
      //   console.log(highAVP);
    
      //   //Calculate ClassicRange
      //   const classicRange = beers.filter((beer) =>{
      //     const yearChk = beer.first_brewed.substring(beer.first_brewed.length-4, beer.first_brewed.length); 
      //     return yearChk>2010;
      //   })
      //   // console.log("classicRange",classicRange);
    
      //   //Calculate achdicPH
      //   const acidicPH = beers.filter((beer =>{
      //     return beer.ph<4.0;
      //   }))
      //    console.log("acidicPH", acidicPH);


      
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

        // const addToCheckedCategories = id => {
        //   const updatedCheckedCategories = [...checkedCategories];
        //   updatedCheckedCategories.push(id);
        //   setCheckedCategories(updatedCheckedCategories);
        // };
      
        // const removeFromCheckedCategories = id => {
        //   const updatedCheckedCategories = checkedCategories.filter(cat => cat !== id);
        //   setCheckedCategories(updatedCheckedCategories);
        // };