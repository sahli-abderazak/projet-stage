import React from 'react'
import { Button, Card   } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cards({prop}) {

  return (
    <div>


<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={prop.url_images} />
<Card.Body>
  <Card.Title>{prop.title}</Card.Title>
  <Card.Text>
   {prop.description}
   <br/>
   {prop.price}
  </Card.Text>
  <Link to ={`/Details/${prop.id}`}>
  <Button variant="primary">more details</Button>
  </Link>

</Card.Body>
</Card>




    </div>     
    )}

   
   
  

export default Cards