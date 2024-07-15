import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';


const Shipping = () => {
  const { counts } = useContext(CartContext);
  const { cartItems , setCartItems} = useContext(CartContext);

  
  const location = useLocation();
  const [totalAmount, setTotalAmount] = useState(0);
  

  useEffect(() => {
      if (location.state !== null && location.state !== undefined && location.state.totalAmount) {
          setTotalAmount(location.state.totalAmount);
      }
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItems(storedCartItems);
  }, [location.state]);

  useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);






  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.Price); 
        const quantity = parseInt(item.quantity);

        if (!isNaN(price) && Number.isFinite(price) && !isNaN(quantity) && Number.isFinite(quantity)) {
            subtotal += price* quantity;
        } else {
            console.warn('Invalid price for item:', item);
        }
    });
    return subtotal.toFixed(2);
};
  
  // Function to calculate subtotal

const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return (parseFloat(subtotal) + parseFloat(totalAmount)).toFixed(2);
};


//Form code

  
 // const [formData,setFormData ] =useState({)

 const initialFormData= {

    username:'',
    lastname:'',
    address:'',
    city:'',
    email:'',
    phone:'',
    specialOrder:''
  };

  const [formData , setFormData]  = useState(initialFormData)
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;

      setFormData({
        ...formData,
        [name]:value

        });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  
  
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  }



  const handleReset =() =>{
    setFormData(initialFormData)
    setSubmitted(false);

  }
 
    return (
      <div>
         <div className="text-dark">
                <div className="container-fluid about-page text-dark main-session-about py-5">
                    <header className="h-100 min-vh-80 d-flex align-text-center text-light shadow py-5">
                        <div className="container">
                            <div className="row py-5">
                                <div className="d-flex d-sm-block flex-column align-item-center">
                                    <h1 className="text-light fw-bold mb-4 text-center mt-3">Checkout</h1>
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
                            <div className='card p-2 bg-danger '>
                              
                              <h5 className='text-center text-light'>01</h5>
                                </div>         
                         </div>
                                <div className='col'>
                                <Link to="/shipping" className='Link-Tag'> <h4 className='mt-2 Link-Tag'>Shipping</h4></Link>
                              </div>
                                 <div className='col'>
                                 <div className='card p-2  '>
                              
                                <h5 className='text-center text-danger'>02</h5>
                                </div>   
                                     
                                 </div>
                                 <div className='col'>
                                 <Link to="/payment" className='Link-Tag'> <h4 className='mt-2 Link-Tag'>Payment</h4></Link>
                              </div>
                   
                              <div className='col'>
                                 <div className='card p-2  '>
                              
                                <h5 className='text-center text-danger'>03</h5>
                                </div>   
                                     
                                 </div>
                                 <div className='col'>
                                 <Link to="/confirmation" className='Link-Tag'> <h4 className='mt-2 Link-Tag'>ConfirmPay</h4></Link>
                              </div>
                

                     </div>

                </div>

            </div>
            <hr/>
        
         </div>
         <div className='mb-0  container'>
         <h3>Your Detail</h3>
        
         <div className='row'>
            <div className='col'>
            {!submitted ? (
            <form onSubmit={handleSubmit}>

              
             <div className='row mt-2 p-2 mb-2'>
                 <div className='col'>
                   <label for="firstname" className="form-label">First Name</label>
                    <div className="input-group">

                       <input 
                       type="text" 
                       className="form-control"
                       id="username" 
                        name="username"
                       placeholder="First name"
                       value={formData.username}
                       onChange={handleChange}
                        required/>
  
                  
                
                   </div>
                 </div>

                  <div className='col'>
                   <label for="lastname" className="form-label">Last Name</label>
                   <div className="input-group">

                   <input 
                    type="text" 
                    className="form-control"
                    id="lastname" 
                    name="lastname"
                     placeholder="Last name"
                     value={formData.lastname}
                    onChange={handleChange}
                    required/>

                  </div>
                 </div>
            </div>




             <div className='row mt-2 p-2 mb-2'>
                <div className='col'>
                  <label for="Address" className="form-label">Address</label>
                   <div className="input-group mb-2">

                    <input 
                     type="text" 
                     className="form-control"
                     id="address" 
                     name="address"
                     placeholder="Address"
                     value={formData.address}
                    onChange={handleChange}
                     required/>
  
                  
                
                 </div>
               </div>
            


                <div className='col'>
                 <label for="City" className="form-label">City</label>
                   <div className="input-group mb-2">

                 <input 
                  type="text" 
                  className="form-control"
                  id="city" 
                  name="city"
                  placeholder="city"
                  value={formData.city}
                  onChange={handleChange}
                  required/>
                </div>
              </div>  
          </div>
                 
         <div className='row mt-2 p-2 mb-2'>
            <div className='col'>
                   <label for="email" className="form-label" >Email </label>
                <div className="input-group">

                  <input
                    type="email"
                    className="form-control"
                    id="email" 
                    name="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={handleChange}
                    required/>

             </div>
         </div>
                <div className='col'>
                   <label for="phone" class="form-label">Phone Number</label>
                <div className="input-group">
               
               
                  <input 
                   type="phone"
                   className="form-control" 
                   id="phone" 
                   name="phone" 
                   placeholder="Phone Number"
                   value={formData.phone}
                    onChange={handleChange}
                  
                  required/>

            </div>

           </div>
         </div>

          <div className='row mt-2 p-2 mb-2'>
            <div className='col'>
               <div className="form-group">
                 <label for="exampleFormControlTextarea1">Special Order</label>
                   <textarea class="form-control" 
                   id="specialOrder" 
                   name='specialOrder'
                   placeholder="Special Order"
                   value={formData.specialOrder}
                    onChange={handleChange}
                   rows="3">

                   </textarea>
             </div>
            </div>
        </div>

        <div className=" mt-5">
                  <button className="btn btn-danger " type="submit" npm start>Continous To Payment</button>
                </div>
    </form>
           ) : (
            <div class="alert alert-danger" role="alert">
             <p>Your Personal Detail is received</p>
          
           <Link to="/payment">
            
             <button  class="btn btn-danger" onClick={handleReset}>Continous To Payment</button></Link>
               </div>
                 
           )}
        
     </div>
         <div className='col-4'>
           <div className='mt-2 p-4 card bg-dark'>
             <h5 className='text-light'>Order Summery</h5>
               <hr  className='text-light'/>
              <p className='text-light'>Excepteur sint occaecat cupidat non proident sunt officia.</p>
              <h6  className='mt-1 text-light'>Subtotal :  Rs{calculateSubtotal()} </h6>
              <hr  className='text-light'/>
             <h6 className='mt-1 text-info'>Shipping & Handling      :      0 Rs</h6>
             <hr  className='text-light'/>
             <h6 className='mt-1 text-info'>Estimated Tax             :       0 Rs</h6>
             <hr  className='text-light'/>
             <h5 className='mt-1 text-danger'>Grand Total:  Rs{calculateTotal()} </h5>
             <hr  className='text-light'/>
                       
         </div>

        </div>
        
       </div>

    </div>
    <Footer/>
   </div>
  

      




 
     

    );
};

export default Shipping;