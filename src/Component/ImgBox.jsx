import React from 'react';
import Gallery1 from '../img/Gallery-1.png'
import Gallery2 from '../img/Gallery-2.png'
import Gallery3 from '../img/Gallery-3.png'
import Gallery5 from '../img/Gallery-5.png'
import Gallery7 from '../img/Gallery-7.png'
import './Ccss.css';





const Gallery = () => {
    return (
      <div className='container-fluid py-5'>
            <div className='row gallery-row'>
                <div className='col-2'>
                    <div className='my-3'>
                        <img src={Gallery1} className='img-fluid gallery-img'></img></div>
                  </div>
                <div className='col-2'>  
                    <div className='my-3'>
                        <img src={Gallery2} className='img-fluid gallery-img'></img>
                   </div>
                </div>
                <div className='col-2'>
                    <div className='my-3'>
                        <img src={Gallery3} className='img-fluid gallery-img'></img>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='my-3'>
                        <img src={Gallery7} className='img-fluid gallery-img'></img>

                    </div>
             </div>
                <div className='col-2'>
                    <div className='my-3'>
                        <img src={Gallery5} className='img-fluid gallery-img'></img>

                    </div>
                   
             </div>
             <div className='col-2'>
                    <div className='my-3'>
                        <img src={Gallery1} className='img-fluid gallery-img'></img></div>
                  </div>


            </div>
      
      </div>
    );
  };
  
  export default Gallery;



