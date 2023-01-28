import React from 'react'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import Footer from "./footer";

const Reservation = () => {
  const [details, setDetails] = useState({
    Name: '',
    lastName: '',
    email: '',
    phone: '',
    adress: '',
    date: '',
  choix:'',

   
})

const PostData =async(e)=>{
    e.preventDefault()

    const{Name,lastName,email,phone,adress,date,choix}=details;

   const res=await fetch("https://projet-ffa3d-default-rtdb.firebaseio.com/projet/-NMjzwXKIo0JJBr7gl0F/projet.json",
   {
       method:'POST',
       headers:{
           'Content-Type':'application/json'
       },
       body:JSON.stringify({
        Name,
        lastName,
        email,
        phone,
        adress,
        date,
        choix,
       })
    })

}

  return (
    <div>
    <div className="container contact-form">
        <div className="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
        </div>
        <form>
          <h3>Drop Us A Reservation</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" name="txtName" className="form-control" placeholder="Your Name *" onChange={(e)=>
                  setDetails({...details,Name:e.target.value})}  />
              </div>
              <div className="form-group">
                <input type="text" name="txtName" className="form-control" placeholder="Your Last Name *" onChange={(e)=>
                  setDetails({...details,lastName:e.target.value})} />
              </div>
              <div className="form-group">
                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" onChange={(e)=>
                  setDetails({...details,email:e.target.value})} />
              </div>
              <div className="form-group">
                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" onChange={(e)=>
                  setDetails({...details,phone:e.target.value})}/>
              </div>
              <div className="form-group">
                <input type="text" name="txtName" className="form-control" placeholder="Your Adress *"  onChange={(e)=>
                  setDetails({...details,adress:e.target.value})}/>
              </div>
              <div className="form-group">
          <Form.Select defaultValue="Choose..."  onChange={(e)=>
            setDetails({...details,choix:e.target.value})}>
            <option>Choose Your Appartement</option>
            <option>Villa 1</option>
            <option>Villa 2</option>
            <option>Villa 3</option> 
          </Form.Select>
              </div>
              <div className="form-group">
                <input type="submit" name="btnSubmit" className="btnContact" defaultValue="Send Message" onClick={PostData} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
              <Form.Label>Select Date To Visit </Form.Label>
          <Form.Control type="date" name="dob" placeholder="Date of Birth" style={{width: '100%', height: '150px'}} onChange={(e)=>
            setDetails({...details,date:e.target.value})}/>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer/>

    </div>
  )
}

export default Reservation