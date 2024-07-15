import React from "react";
export default function Card(props) {
    return (
   <div>
    


    <div className="card-data bg-dark container-card-2 p-2">
        <div className=" mb-4 " >
          <img src={props.Productimg} className='img-fluid text-light'></img>
        </div>
           <div className='p-3'>
            <h6 className="mb-2 mt-2 text-info">Food code - {props.ProductId}</h6>
                <h5 className="mb-2 text-light">{props.ProductName}-<span className="text-danger">{props.Price}.. Rs</span></h5>
                <p className="mb-0 text-light">{props.ProductDetail} {props. quantity}</p>

            </div>
             
       </div>






</div>

)

};