import React from "react";
import menu1 from '../img/menu-1.png';
import menu3 from '../img/menu-3.png';
import menu4 from '../img/menu-4.png';
import menu6 from '../img/menu-6.png';
import './Ccss.css';
import { Link } from 'react-router-dom'; 

const Diner = () => {
  return (
    <div>
        <div class="container  py-4">
            <div className="row  feature-row">
                <div className="col-md-6 col-lg-6 wow fadeIn " data-wow-delay="0.1s">
                    <div className="row p-4 container-card">
                      <div className="col">
                      <img src={menu1} className='img-fluid'></img>
                      </div>
                      <div className="col">
                      <h6 class="mb-3">Vitello Tonato - <span className="text-danger">23$</span></h6>
                        <p class="mb-0">Chinese mustard/Chipotle aiol</p>
                      </div>
                    </div>
                    
                </div>
                <div class="col-md-6 col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="row p-4 container-card " >
                      <div className="col ">
                      <img src={menu6} className='img-fluid'></img>
                      </div>
                      <div className="col">
                      <h6 class="mb-3 ">Seasonal Soup  -<span className="text-danger">34$</span></h6>
                        <p class="mb-0">Chinese mustard/Chipotle aiol</p>
                      </div>
                    </div>
                </div>
               
            </div>

            <div className="row  feature-row mt-2 py-2">
                <div className="col-md-6 col-lg-6 wow fadeIn " data-wow-delay="0.1s">
                    <div className="row p-4 container-card">
                      <div className="col">
                      <img src={menu3} className='img-fluid'></img>
                      </div>
                      <div className="col">
                      <h6 class="mb-3">Pizza Pane - <span className="text-danger">43$</span></h6>
                        <p class="mb-0">Chinese mustard/Chipotle aiol</p>
                      </div>
                    </div>
                    
                </div>
                <div class="col-md-6 col-lg-6 wow fadeIn" data-wow-delay="0.3s">
                <div className="row p-4 container-card " >
                      <div className="col ">
                      <img src={menu4} className='img-fluid'></img>
                      </div>
                      <div className="col">
                      <h6 class="mb-3 ">Carpacio -<span className="text-danger">74$</span></h6>
                        <p class="mb-0">Chinese mustard/Chipotle aiol</p>
                      </div>
                    </div>
                </div>
               
            </div>

           </div>

        <div className="d-flex justify-content-center align-items-center">
            <Link to="/" className="text-center">
                <button type="button" className="btn btn-danger btn-lg">Our Menu</button>
            </Link>
        </div>
           



    </div>
  );
};

export default Diner;