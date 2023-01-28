import React from 'react'
import {Link, useParams} from 'react-router-dom'
import '../App.css'

function Detail({cardsList}) {
  


  const {id} = useParams ()

  let pId = Number (id)

  const proMap = cardsList.find((elem) => elem.id === pId);

  console.log (proMap) ;
  return (
    <div>

<div className="wrapper">
  <div className="product-img">
    <img src={proMap.url_images} height={420} width={327} alt="Product"/>
  </div>
  <div className="product-info">
    <div className="product-text">
      <h1>{proMap.title}</h1>
      <br/>
      <p>
        {proMap.description}
        <br/>
        {proMap.price}
        <br/>
        <p>To visit you must fill out the form for an appointment</p>
      </p>
    </div>
    <div className="product-price-btn">
      <Link to ="/">
      <button type="button">back</button>
      </Link>
      <Link to ="/reservation">
      <button type="button">fill the form</button>
      </Link>
      
    </div>
  </div>
</div>





    </div>
  )
}

export default Detail