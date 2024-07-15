import { useState, useEffect } from 'react';
import React from "react";
import './about.css';
import about1 from '../img/about-2.png';
import about2 from '../img/about-img.png';
import chef1 from '../img/chef_1.png';
import chef2 from '../img/chef_2.png';
import chef3 from '../img/chef_3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import {  faPepperHot, faUtensils, faLeaf} from '@fortawesome/free-solid-svg-icons';
import { faBirthdayCake,faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import p from '../img/p-1.png';
import p1 from '../img/p-2.png';
import Footer from './Footer';




const About = () => {
    const [paragraphText, setParagraphText] = useState("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the behind texts. Separated they live in Bookmarksgrove right at the coast of the Semantic a large language ocean.");
    const [imageSrc, setImageSrc] = useState(p); 
    const [name, setName] = useState("Greet Green");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setParagraphText((prevText) => {
                return prevText === "A small river named Duden flows by their place and supplies it with the necessary regelialia.it is a paradisematic country in which roasted parts of sentences fly in your mouths"
                    ? "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the behind texts. Separated they live in Bookmarksgrove right at the coast of the Semantic a large language ocean."
                    : "A small river named Duden flows by their place and supplies it with the necessary regelialia.it is a paradisematic country in which roasted parts of sentences fly in your mouths";
            });
            setImageSrc((prevImage) => prevImage === p ? p1 : p);
            setName(name === "Greet Green" ? "lord" : "Greet Green");
        }, 5000);
    
        return () => clearInterval(intervalId);
    }, [imageSrc, name]);

  return (
    <div>
      <div className=" text-dark  ">
      <div className=" container-fluid about-page text-dark main-session-about py-5">
      <header className="h-100  min-vh-80 d-flex align-text-center text-light shadow py-5 ">
       <div className="container ">
        <div className="row py-5 ">
          <div className="d-flex d-sm-block flex-column align-item-center">
            <h1  className="text-light fw-bold mb-4 text-center mt-3">
            About Us
             </h1>
             
           </div>
          </div>
        </div>
        </header>
      </div>
    </div>
    <div className=" container mt-5  about-page text-dark main-session-about-2 py-5">
      <div className="row py-5">
      <div className=" col">
            <h1  className="text-light fw-bold mb-4  mt-3">
            <img src={about2} className='img-fluid about-img-1'  alt="Description of the image"/> 
             </h1>
               </div>
               <div className=" col  ">
            <h1  className="text-light fw-bold mb-4  mt-3">
            <img src={about1} className='img-fluid ' alt="Description of the image"/>
             </h1> 
           </div>
           <div className=" col d-flex d-sm-block flex-column">
            <h4  className="text-dark fw-bold mb-4  mt-3"> About Us  </h4>
             <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente necessitatibus id, animi nemo quos eos minus adipisci veritatis quibusdamm.</p>
             <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. repudiandae eius doloribus accusamus fugit .</p>
             <h5  className="mt-2">- Clean Environment</h5>
             <h5  className="mt-2">- Experience Chefs</h5>
             <h5  className="mt-2">- Fresh And Creative Dishes</h5>
           </div>
        </div>
      </div>
       <hr></hr>
         <div className="container my-5 py-4 mt-4">
                  <div className="row mt-5 py-4">
                  <div className="col d-flex flex-column justify-content-center align-items-center h-100">
                    <h2 className="fs-5 fw-bold  text-danger text-center ">Meet The Chefs</h2>
                   <h4 className="mt-1 fs-2 text-center">We Have Experienced And Creative<br></br> Chefs To Start</h4>
           </div>
        </div>
        <div className="row mt-5 py-4">
        <div className="col-md-6 col-lg-4   py-2 mb-4 wow fadeIn  " data-wow-delay="0.1s">
                    <div class="feature-item ">
                        <div class=" mb-4  " >
                        <img src={chef1} className='img-fluid '></img>
                        </div>
                      
                          <div className='p-3'>
                        <h5 className="mb-2">Daniel Graham</h5>
                        <span className="mt-2 bw-bold"> Master chef </span>
                        <p className="mb-0 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                    
                      <div className="row p-3 ">
                        <div className="col-1">  <FontAwesomeIcon icon={faFacebook} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-1"><FontAwesomeIcon icon={faLinkedin} size="lg" color="#007bff" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-1"> <FontAwesomeIcon icon={faTwitter} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" /></div>
                      </div>
                  

                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn   py-2 mb-4" data-wow-delay="0.3s">
                    <div className="feature-item ">
                        <div className="btn-square rounded-circle mb-4">
                        <img src={chef2} className='img-fluid '></img>
                        </div>
                        <div className='p-3'>
                        <h5 className="mb-2">Nick Browning</h5>
                        <span className="mt-2 bw-bold"> Master chef </span>
                        <p className="mb-0 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                    <div className="row p-3 ">
                        <div className="col-1">  <FontAwesomeIcon icon={faFacebook} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-1"><FontAwesomeIcon icon={faLinkedin} size="lg" color="#007bff" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-1"> <FontAwesomeIcon icon={faTwitter} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" /></div>
                      </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn  py-2 mb-4 " data-wow-delay="0.5s">
                    <div className="feature-item ">
                        <div className="btn-square rounded-circle mb-4">
                        
                        <img src={chef3} className='img-fluid '></img>
                        </div>
                        <div className='p-3'>
                        <h5 className="mb-2">Willium Jack</h5>
                        <span className="mt-2 bw-bold"> Master chef </span>
                        <p className="mb-0 mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia animi ipsam obcaecati.</p>
                    </div>
                    <div className="row p-3 ">
                        <div className="col-1">  <FontAwesomeIcon icon={faFacebook} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-1"><FontAwesomeIcon icon={faLinkedin} size="lg" color="#007bff" className=" FontAwesomeIcon-chef"/></div>
                        <div className="col-1"> <FontAwesomeIcon icon={faTwitter} size="lg" color="#1DA1F2" className=" FontAwesomeIcon-chef" /></div>
                      </div>
                    </div>
                 </div>
              </div>
       </div>


       

             <div class="containe-fluid main-session-card-3 mb-5 mt-5 p-4">
                   <div className="container my-5 py-4 mt-4">
                    <div className="row ">
                      <div className="col d-flex flex-column">
                                <h5 className="fs-5 fw-bold   text-left text-danger">Prepare The Best Dishes</h5>
                                       <h1 className="mt-3 left fw-bold text-light ">Are You Looking For <br></br>A Quite Place?</h1>
                          <div className="mt-4 ">
                              <Link to="/reservation"><button type="button" className="btn btn-outline-danger btn-lg">Book Now</button></Link>
                </div>
             </div>
          </div>
       </div>
      </div>

      <div className="container-xxl py-5 mt-4">
        <div className="container mt-4">
            <div className="text-center mx-auto wow fadeInUp mt-4" data-wow-delay="0.5s">
                <h4 className=" text-danger ">Our services</h4>
                <p className="fs-3 ">
                We Provide Good Services With Lots<br></br> Of Facilities
                    </p>
            </div>
            <div className="row mt-5 py-2">
                <div className="col-md-4 mt-3 wow fadeInUp  py-2 mb-4" data-wow-delay="0.1s">
                  
                    <div className="service-item text-center">
                        <div className="service-text rounded ">
                        <FontAwesomeIcon icon={faCalendarAlt } size="lg" color="black" className=" FontAwesomeIcon-chef p-2" />
                            <h5 className="">Event Management</h5>
                                <small className="mb-0">Monitor your cash flow on a yearly, monthly, weekly, daily
                                    transactional basis. </small>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-3 wow fadeInUp  py-2 mb-4" data-wow-delay="0.1s">
                <div className="service-item text-center">
                        <div className="service-text rounded ">
                        <FontAwesomeIcon icon={faBirthdayCake} size="lg" color="black" className=" FontAwesomeIcon-chef p-2" />
                            <h5 className="">Reserve Now</h5>
                                <small className="mb-0">Run cash flow reports on customers and projects to see how
                                    profitable they’re going to be. </small>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-3   py-2 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                 
                    <div className="service-item text-center">
                        <div className="service-text rounded  text-center">
                        <FontAwesomeIcon icon={faAppleAlt} size="lg" color="black" className=" FontAwesomeIcon-chef p-2" />
                            <h5 className="">Fresh Food</h5>
                                <small className="mb-0"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 ">
                <div className="col-md-4 mt-3   py-2 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                  
                    <div className="service-item text-center">
                        <div className="service-text rounded ">
                        <FontAwesomeIcon icon={faUtensils} size="lg" color="black" className=" FontAwesomeIcon-chef p-2" />
                            <h5 className="">Quality Cuisine</h5>
                                <small className="mb-0">If your business operates on multiple currencies, we have you
                                    covered with today’s exchange rates.. </small>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-3   py-2 mb-4 wow fadeInUp" data-wow-delay="0.1s">
                 
                    <div className="service-item text-center">
                        <div className="service-text rounded ">
                        <FontAwesomeIcon icon={faPepperHot} size="lg" color="black" className=" FontAwesomeIcon-chef p-2" />
                            <h5 className="">Bread & Pancake</h5>
                                <small className="mb-0">Invite your team to help out, or showcase your projections to
                                    investors by giving them read-only access. </small>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-3  py-2 mb-4 wow fadeInUp" data-wow-delay="0.1s">
              
                    <div className="service-item text-center">
                        <div className="service-text rounded ">
                        <FontAwesomeIcon icon={ faLeaf} size="lg" color="black" className=" FontAwesomeIcon-chef p-2" />
                            <h5 className="">Fresh Vegies Salad</h5>
                                <small className="mb-0">Save time and reduce errors by keeping Pulse and your accounting
                                    software in sync. </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="containe-fluid main-session-card-4 mb-5 mt-5 p-4">
                   <div className="container my-5 py-4 mt-4">
                    <div className="row ">
                        <div className="col-2"></div>
                      <div className="col-7 d-flex flex-column justify-content-center align-items-center">
                                <h5 className="fs-5 fw-bold  text-danger">customers review</h5>
                                  <h1 className="mt-3 fw-bold text-dark text-center ">Our Customers Say About Us.Lets Check Out Some</h1>
                                  <p className="mt-3  text-center text-dark" > {paragraphText}</p>
                          <div className="mt-4 ">
                          <img src={imageSrc} className='img-fluid'  style={{ borderRadius: '50%', height: '150px', width: '150px' }} alt="Paragraph Image" />
                          < p className="mt-3 fw-bold text-dark text-center">{name}</p>
                          
                          </div>
                    </div>
                    <div className="col-2"></div>
                 </div>
            </div>
      </div>



      <Footer/>

    </div>

  );
};

export default About;