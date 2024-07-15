import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Gallery.css';
import img1 from '../img/Vimg1.png';
import img2 from '../img/Vimg-2.png';
import img3 from '../img/Vimg-3.png';
import pimg from '../img/pimg-5.png';
import pimg2 from '../img/pimg-6.png';
import pimg3 from '../img/pimg-7.png';
import pimg4 from '../img/pimg-8.png';
import pimg5 from '../img/pimg-9.png';
import pimg6 from '../img/pimg-10.png';
import Footer from './Footer';


const Gallery = () => {
  return (
    <div>
      <div className="container-fluid about-page text-dark main-session-about py-5">
        <header className="h-100  min-vh-80 d-flex align-text-center text-light shadow py-5">
          <div className="container">
            <div className="row py-5">
              <div className="d-flex d-sm-block flex-column align-item-center">
                <h1 className="text-light fw-bold mb-4 text-center mt-3">
                  Our Gallery
                </h1>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="container my-5 py-4 mt-5">
        <div className="row mt-4">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h5 className="fs-5 fw-bold   text-center text-danger">Our Gallery</h5>
            <h4 className="mt-3 text-center fw-bold text-dark fs-1 ">Awesome Place Good Decoration To<br></br> Spend Quality Time</h4>
            <div className="mt-4"></div>
          </div>
        </div>
      </div>
      <div className="container main-session-card-2 mb-5 mt-5  bg-light">
        <div className="row  feature-row">
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="feature-item border d-flex flex-column align-items-center">
              <div className="mb-4 img-container">
                <img src={img1} className='img-fluid' alt="Image 1" />
             
              <FontAwesomeIcon icon={faYoutube}  className="youtube-logo " />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="feature-item border d-flex flex-column align-items-center">
              <div className="img-container mb-4">
                <img src={img2} className='img-fluid' alt="Image 2" />
              
              <FontAwesomeIcon icon={faYoutube} className="youtube-logo " />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="feature-item border d-flex flex-column align-items-center">
              <div className="img-container mb-4">
                <img src={img3} className='img-fluid' alt="Image 3" />
              
              <FontAwesomeIcon icon={faYoutube}  className="youtube-logo " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      </hr>
      <div className="container my-5 py-4 mt-5">
        <div className="row ">
          <div className="col-3 justify-content-center align-items-center">
            <h5 className="fs-2 fw-bold   text-center text-danger">Lets Check Out<br></br> Some More</h5>
          </div>
          <div className="col justify-content-center align-items-center">
            <p className=" text-center  text-dark ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis in facere a cupiditate quibusdam sapiente rerum architecto facilis ab tempore accusantium laboriosam at porro, aut suscipit rem voluptate neque.</p>
          </div>
        </div>
      </div>
      <div className="container main-session-card-2 mb-5 mt-5  bg-light">
        <div className="row  feature-row">
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="feature-item border d-flex flex-column align-items-center">
              <div className="mb-4 ">
                <img src={pimg} className='img-fluid' alt="Image 1" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="feature-item border d-flex flex-column align-items-center">
              <div className=" mb-4">
                <img src={pimg3} className='img-fluid' alt="Image 2" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="feature-item border d-flex flex-column align-items-center">
              <div className=" mb-4">
                <img src={pimg2} className='img-fluid' alt="Image 3" />
              </div>
            </div>
          </div>
        </div>
        <div className="container main-session-card-2 mb-5 mt-5  bg-light">
        <div className="row  feature-row">
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="feature-item border d-flex flex-column align-items-center">
              <div className="mb-4 ">
                <img src={pimg5} className='img-fluid' alt="Image 1" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="feature-item border d-flex flex-column align-items-center">
              <div className=" mb-4">
                <img src={pimg6} className='img-fluid' alt="Image 2" />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="feature-item border d-flex flex-column align-items-center">
              <div className=" mb-4">
                <img src={pimg4} className='img-fluid' alt="Image 3" />
              </div>
            </div>
          </div>
        </div>
       </div>

      </div>


      <Footer/>

    </div>
  );
};

export default Gallery;
