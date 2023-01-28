import React from 'react'
import Cards from './cards'
import '../App.css';
import Home from './Home';
import Footer from "./footer";

function CardList({ProductListGetter}) {
  return (
    <div>
    <Home />
      <div className ="CardsListCS">
        {ProductListGetter.map((el ,key) => <Cards key= {el.id} prop = {el} />)}
      </div>
      <Footer/>
    </div>
    
  )
}

export default CardList