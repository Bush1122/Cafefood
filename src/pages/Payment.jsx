import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
const Payment = () => {
      

    //form data.............


    const initialFormData = {
        username: '',
        cardnumber: '',
        Scode: ''
    };

    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    const handleReset = () => {
        setFormData(initialFormData);
        setSubmitted(false);
    };

    return (
        <div>
            <div className="text-dark">
                <div className="container-fluid about-page text-dark main-session-about py-5">
                    <header className="h-100 min-vh-80 d-flex align-text-center text-light shadow py-5">
                        <div className="container">
                            <div className="row py-5">
                                <div className="d-flex d-sm-block flex-column align-item-center">
                                    <h1 className="text-light fw-bold mb-4 text-center mt-3">Payment</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <div className='container mt-4 p-4 py-4'>
                <div className='row'>
                    <div className='col-7'>
                        <div className='row'>
                            <div className='col'>
                                <div className='card p-2'>
                                    <h5 className='text-center text-danger'>01</h5>
                                </div>
                            </div>
                            <div className='col'>
                            <Link to="/shipping" className='Link-Tag'> <h4 className='mt-2 Link-Tag'>Shipping</h4></Link>
                            </div>
                            <div className='col'>
                                <div className='card p-2 bg-danger'>
                                    <h5 className='text-center text-light '>02</h5>
                                </div>
                            </div>
                            <div className='col'>
                            <Link to="/payment" className='Link-Tag'> <h4 className='mt-2 Link-Tag'>Payment</h4></Link>
                            </div>
                            <div className='col'>
                                <div className='card p-2'>
                                    <h5 className='text-center text-danger'>03</h5>
                                </div>
                            </div>
                            <div className='col'>
                            <Link to="/confirmation" className='Link-Tag'> <h4 className='mt-2 Link-Tag'>ConfirmPay</h4></Link>
                             
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            <div className='mb-0  container'>
                <div className='row'>

                   

                            <div className='col'>
                                <h3>Your Detail</h3>
                                <hr />

                                {!submitted ? (
                                <form onSubmit={handleSubmit}>
                                <div className="row mt-4 mb-2 p-2">

                               

                                    <div className="col">
                                        <label htmlFor="username" className="form-label">Name of Card Owner</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                name="username"
                                                placeholder="Name of Card Owner"
                                                value={formData.username}
                                                onChange={handleChange}
                                                required />
                                        </div>
                                    </div>
                                </div>

                                <div className="row  mt-4 mb-2 p-2">
                                    <div className="col">
                                        <label htmlFor="cardnumber" className="form-label">Card Number</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cardnumber"
                                                name="cardnumber"
                                                placeholder="37202-456777-8"
                                                value={formData.cardnumber}
                                                onChange={handleChange}
                                                required />
                                        </div>
                                    </div>
                                </div>
                                <div className="row  mt-4 mb-2 p-2">
                                    <div className="col">
                                        <label htmlFor="Scode" className="form-label">Security Code:</label>
                                    </div>
                                    <div className="col">
                                        <div className="input-group">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="Scode"
                                                name="Scode"
                                                placeholder="********"
                                                value={formData.Scode}
                                                onChange={handleChange}
                                                required />
                                        </div>
                                        <small>Must be 8-20 characters long.</small>
                                    </div>
                                </div>
                                <div className="row  mt-4">
                                    <div className=" col  mt-5">
                                        <button className="btn btn-danger " type="submit">Confirm</button>
                                    </div>
                                </div>
                                
                        </form>

                    ) : (
                        <div className="alert alert-danger" role="alert">
                            <p>Your Status is in process</p>
                            <Link to="/confirmation">
                            <button className="btn btn-danger" onClick={handleReset}>Next...</button>
                            </Link>
                        </div>
                    )}
                            
                            
                    </div>


                    <div className='col-4'>

                        <div className='mt-2 p-4 card bg-dark'>
                            <h3 className="text-center text-info fw-bold " >CafeDine</h3>
                            <hr  className='text-light'/>
             <p className="text-center text-light bg-danger" >Opening Times</p>
              <div className="mt-5">
              <h6 className="text-center text-light">Monday - Thursday</h6>
              <h6 className="text-center text-light">9.00-12.00</h6>
            </div>
            <div className="mt-5 py-2">
              <h6 className="text-center text-light">Friday - Sunday</h6>
              <h6 className="text-center text-light">2.00-8.00</h6>
              <h6 className="text-center text-light">Thank You use for over services</h6>
            </div>
            <hr  className='text-light'/>
            <div className="mt-3 py-4">
              <h6 className="text-center text-danger fw-bold text-danger">We are here for your help</h6>
              <h6 className="text-center fs-1 fw-bold text-light">02 34597879</h6>
            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>

    )
};

export default Payment;
