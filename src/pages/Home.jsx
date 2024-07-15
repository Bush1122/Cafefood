
import {Link} from 'react-router-dom';
import  Menubtn  from '../Component/Menubtn';
import './Home.css';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import img1 from '../img/img-1.png';
import img2 from '../img/img-2.png';
import img3 from '../img/img-3.png';
import Navbar from '../Component/Navbar';
import CafeDine from '../img/CafeDine.png';

import Footer from './Footer';




const Home = () => {
  return (
    <div className=" text-dark  ">
       <div className=" container-fluid home-page text-dark main-session-1 py-5">
      <header className="h-100  min-vh-80 d-flex align-text-center text-light shadow py-5 ">
       <div className="container ">
        <div className="row py-5 ">
          <div className="col-sm-6 d-flex d-sm-block flex-column align-item-center">
            <h4 className="text-danger fw-bold mb-0 mt-5 slideInFromLeft">
            Welcome to Restaurant
            </h4>
            <h1  className="text-light fw-bold mb-4 text-sm-star mt-3">
              We provide good quality food with greate service to customer
             </h1>
               <Menubtn />
           </div>
          </div>
        </div>
        </header>
      </div>
    <div className="container-fluid ">
    <div class="container main-session-card mb-0">
            <div class="row  feature-row">
                <div class="col-md-6 col-lg-4 wow fadeIn " data-wow-delay="0.1s">
                    <div class="feature-item h-100 p-5">
                        <div class=" mb-4  " >
                        <FontAwesomeIcon icon={faPizzaSlice} style={{ fontSize: '34px', color: 'red' }} />

                        </div>
                        <h5 class="mb-3">Delicious Food</h5>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                    <div class="feature-item  h-100 p-5">
                        <div class="btn-square rounded-circle mb-4">
                        <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '34px', color: 'red' }} />
                        </div>
                        <h5 class="mb-3">Online Order</h5>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                    <div class="feature-item  h-100 p-5">
                        <div class="btn-square rounded-circle mb-4">
                        <FontAwesomeIcon icon={faTruck} style={{ fontSize: '34px', color: 'red' }} />

                        </div>
                        <h5 class="mb-3">Free Delivery</h5>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                </div>
               
            </div>
        </div>
    </div>

    <div className="container my-5 py-4">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="fs-1 fw-bold   text-center ">About CafeDine</h2>
            <h4 className="mt-1 text-center">We Are A Modern Restaurant In The Center Of The City</h4>
           
          </div>
        </div>
      </div>
      <div class="container main-session-card-2 mb-5 mt-5 ">
            <div class="row  feature-row">
                <div class="col-md-6 col-lg-4  py-2 mb-4 wow fadeIn  " data-wow-delay="0.1s">
                    <div class="feature-item border">
                        <div class=" mb-4  " >
                        <img src={img1} className='img-fluid'></img>
                        </div>
                          <div className='p-3'>
                        <h5 class="mb-2">Friendly Place</h5>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-4   py-2 mb-4  wow fadeIn " data-wow-delay="0.3s">
                    <div class="feature-item border">
                        <div class="btn-square rounded-circle mb-4">
                        <img src={img2} className='img-fluid'></img>
                        </div>
                        <div className='p-3'>
                        <h5 class="mb-2">Quality Food</h5>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeIn  py-2 mb-4 " data-wow-delay="0.5s">
                    <div class="feature-item border">
                        <div class="btn-square rounded-circle mb-4">
                        
                        <img src={img3} className='img-fluid'></img>
                        </div>
                        <div className='p-3'>
                        <h5 class="mb-2">Affordable Price</h5>
                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                </div>
               </div>
            </div>
        </div>

        <div class="containe-fluid main-session-card-3 mb-5 mt-5 p-4">
        <div className="container my-5 py-4 mt-4">
        <div className="row ">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h5 className="fs-5 fw-bold   text-center text-light">Prepare The Best Dishes</h5>
            <h4 className="mt-3 text-center fw-bold text-light ">Come & Experience Our Best Of World Class Cousine</h4>
            <div className="mt-4 ">
            <Link to="/recipes"><button type="button" className="btn btn-outline-danger btn-lg">Book Now</button></Link>
           </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container my-5 py-4 mt-5">
        <div className="row mt-4 ">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h5 className="fs-5 fw-bold   text-center text-danger">CafeDine Dishes</h5>
            <h4 className="mt-3 text-center fw-bold text-dark ">We Provide Quality Food.We Care About Your Health</h4>
            <div className="mt-4 ">
          
           </div>
          </div>
        </div>
        <Navbar/>

        <div className="container my-5 py-4 mt-4 p-4">
        <div className="row mt-4">
          <div className="col  justify-content-center align-items-center   cafedine">
          <img src={CafeDine} className='img-fluid'  style={{ height: '500px', width: '300px' ,borderRadius: '30px' , border: '5px solid black'}} alt="Cafe Dine"></img>
          </div>
          <div className="col justify-content-center align-items-center mt-5">
            <h2 className="fs-4 fw-bold mt-3 text-danger">Make it easy</h2>
            <h4 className="mt-1 ">Get The CafeDine App</h4>
            <p className="mt-1 ">Get instant access to recipes from celebrity Cafedia and world-renowed brands right in your pocker.</p>
            <div className="row mt-4">
            <div className="col ">
               <Link to="/"><button type="button" className="btn btn-dark btn-lg btn-block big-button">Get it on Google Play </button> </Link>
              </div>
            <div className="col ">
              <Link to="/"> <button type="button" className="btn btn-outline-dark btn-lg btn-block big-button">   Get it on App Store </button></Link>
           </div>
          </div>
        </div>
      </div>
    </div>
    </div>
<div>
  <Footer/>
</div>
  </div>
    
     
   
  );
};

export default Home;
