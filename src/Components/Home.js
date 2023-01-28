import React from 'react'
import Image3 from "./cover.JPEG";
import '../App.css'

const Home = () => {
  return (
    <div>
    
      <div className="Home-Container">
      <div>
      <img className="Image1" src={Image3} alt="ph" />
    </div>

    <div className="parag1">
      <h1>Welcome To our Immobilier</h1>
      <p>You Can Rent Your Beautiful Apartment In Tunisia </p>
    </div>

      
      </div>



    </div>
  
  )
}

export default Home