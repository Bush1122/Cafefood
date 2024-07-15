import React from "react";
export default function Card2(props) {
    return (
<div className="row p-4  container-card-2 bg-dark ">
<div className="col ">
<img src= {props.Productimg}  className='img-fluid'></img>
</div>
<div className="col">
<h6 className="mb-2 mt-2 text-info">Food code - {props.ProductId}</h6>
<h6 class="mb-3 text-light">{props.ProductName}- <span className="text-danger">{props.Price}..Rs </span></h6>
  <p class="mb-0 text-light">{props.ProductDetail} {props. quantity} 
  </p>
</div>
</div>

)

};