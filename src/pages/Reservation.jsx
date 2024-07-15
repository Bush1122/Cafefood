
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';

const Reservation = () => {
  const initialFormData = {
    username: '',
    email: '',
    phone: '', 
    numberofperson: '',
    calendar:'',
    time:'' 
};

const [submitted, setSubmitted] = useState(false);
const [formData , setFormData]  = useState(initialFormData);

   
const handleChange = (e) =>{

  const name = e.target.name;
  const value =e.target.value;

  setFormData({
    ...formData,
    [name]:value});

};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);


  setTimeout(() => {
    setSubmitted(true);
  }, 1000);
}


const handleReset = () => {
  setFormData(initialFormData);
  setSubmitted(false);
};

  return (
    <div>
       <div className=" text-dark  ">
      <div className=" container-fluid about-page text-dark main-session-about py-5">
      <header className="h-100  min-vh-80 d-flex align-text-center text-light shadow py-5 ">
       <div className="container ">
        <div className="row py-5 ">
          <div className="d-flex d-sm-block flex-column align-item-center">
            <h1  className="text-light fw-bold mb-4 text-center mt-3">
            Reservation
             </h1>
             
           </div>
          </div>
        </div>
        </header>
      </div>
    </div>
    <div className="container my-5 py-4 mt-5">
        <div className="row mt-4">
          <div className="col-8 ">
            <h5 className="fs-5 fw-bold   text-danger">Reservation</h5>
            <h4 className="mt-3  fw-bold text-dark fs-3 ">Reserve Your Seat For Betterment</h4>


            {!submitted ? (
       
            <form onSubmit={handleSubmit}>
             <div className="row mt-5 py-3">
                <div className="col">
               
                <label for="fullname" className="form-label">Full Name</label>
                <div className="input-group">

                 <input 
                  type="text" 
                  className="form-control"
                  id="username" 
                  name="username"
                  placeholder="Full name"
                  value={formData.username}
                  onChange={handleChange} required/>
  
                  
                
                </div>
              </div>
              <div className="col">
                <label for="email" className="form-label" >Email </label>
                <div className="input-group">

                  <input
                    type="email"
                    class="form-control"
                    id="email" 
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    required/>

                  </div>
                </div>

                <div className="col">
               <label for="phone" class="form-label">Phone Number</label>
                <div className="input-group">
               
               
                  <input 
                   type="phone"
                   class="form-control" 
                   id="phone" 
                   name="phone" 
                   placeholder="Phone Number"
                   value={formData.phone}
                   onChange={handleChange}
                  
                  required/>

                </div>
              </div>
             </div>


             <div className="row mt-4 py-3">
               <div className="col">
                 <label for="Numberofperson" className="form-label">Number of Person</label>
               
               <input 
               type="text" 
               className="form-control"
               id="numberofperson" 
               name="numberofperson"
               placeholder="Number Of the person"
               value={formData.numberofperson}
               onChange={handleChange}

               required/>


                </div>
                <div className="col">
                <label for="calendar" className="form-label" >Date </label>
                <div className="input-group">

                  <input
                   type="date"
                    class="form-control"
                    id="calendar" 
                    name="calendar"
                    placeholder="calendar"
                    value={formData.calendar}
                     onChange={handleChange}
                  
                    required/>
                </div>
                

                </div>
                <div className="col">

                <label for="Time" class="form-label">Time</label>
                <div className="input-group">
               
               
                  <input 
                   type="time"
                   class="form-control" 
                   id="time" 
                   name="time" 
                   placeholder="time"
                   value={formData.time}
                   onChange={handleChange}
                  
                  required/>
                </div>
                </div>

                <div className=" mt-5">
                  <button className="btn btn-danger " type="submit">Reserve Now</button>
                </div>
             </div>
           </form>
             ) : (
              <div class="alert alert-danger" role="alert">
               <p>Thank You massage have been be send</p>
               <Link to="/cart">
               <button  class="btn btn-danger" onClick={handleReset}>Next...</button></Link>
                 </div>
                   
             )}
          

          </div>
          <div className="col-4 justify-content-center align-items-center">
            <div  className="border border-dark bg-dark ">
            <h5 className="fs-5 mt-5 py-2 fw-bold  text-center text-danger">Check availabilty</h5>
            <h4 className="mt-3 text-center fw-bold text-light fs-1 "> Opening Times</h4>
            <div className="mt-5">
              <h6 className=" text-light text-center">Monday - Thursday</h6>
              <h6 className=" text-light text-center">9.00-12.00</h6>
            </div>
            <div className="mt-5 py-2">
              <h6 className=" text-light text-center">Friday - Sunday</h6>
              <h6 className=" text-light text-center">2.00-8.00</h6>
            </div>
            <div className="mt-3 py-4">
              <h6 className="text-center text-danger fw-bold ">Call Us For</h6>
              <h6 className="text-center fs-1 fw-bold text-info">02 34597879</h6>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    

  );
};

export default Reservation;