import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Footer from './Footer';


const Cart = () => {

   
    const { cartItems , setCartItems} = useContext(CartContext);
    const [showTotal, setShowTotal] = useState(true);
    
    const [counts, setCounts] = useState({});

///(prevCounts => { ... }):: This is an arrow function used to update the state based on the previous state (prevCounts). It takes the previous state as an argument and returns the new state.
///{ ...prevCounts, [productId]: (prevCounts[productId] || 0) + 1 }: This part constructs the new state object. It uses the spread operator (...prevCounts) to copy all the key-value pairs from the previous state into the new state. Then, it updates the value corresponding to the productId key.
//[productId]: (prevCounts[productId] || 0) + 1: This part updates the value for the productId key in the new state. If the productId already exists in the state (prevCounts[productId] is truthy), it increments its value by 1 ((prevCounts[productId] || 0) + 1). If the productId doesn't exist yet, it initializes its value to 1 (prevCounts[productId] || 0 will be 0, so 0 + 1).
   
const handleIncrement = (productId) => {
        setCounts(prevCounts => ({ ...prevCounts, [productId]: (prevCounts[productId] || 0) + 1 }));
    };

    const handleDecrement = (productId) => {
        setCounts(prevCounts => ({ ...prevCounts, [productId]: Math.max((prevCounts[productId] || 0) - 1, 0) }));
    };
    

    ///  item.ProductId IS unique id that is call heree
    const handleDelete =(productId) =>{
        const updatedCartItems = cartItems.filter(item => item.ProductId !== productId);
        setCartItems(updatedCartItems); 
    }

    
    ///counts[productId]: This part accesses the value of the productId key in the counts object. If counts is an object, this expression retrieves the value corresponding to the productId key.
//|| 0: This is the logical OR (||) operator in JavaScript. If the left operand (in this case, counts[productId]) is truthy, it evaluates to that value. However, if the left operand is falsy (e.g., undefined, null, 0, false, or an empty string), the logical OR operator returns the right operand (0 in this case).


    const calculateSubtotal = (price, productId) => {
        const quantity = counts[productId] || 0;
        const itemPrice = parseFloat(price);

        if (!isNaN(quantity) && !isNaN(itemPrice)) {
            return quantity * itemPrice;
        } else {
            return 0; 
        }
    };

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach((item, index) => {
            total += calculateSubtotal(item.Price, index);
        });
        return total.toFixed(2);
    };

    return (
        <div>
            <div className="text-dark">
                <div className="container-fluid about-page text-dark main-session-about py-5">
                    <header className="h-100 min-vh-80 d-flex align-text-center text-light shadow py-5">
                        <div className="container">
                            <div className="row py-5">
                                <div className="d-flex d-sm-block flex-column align-item-center">
                                    <h1 className="text-light fw-bold mb-4 text-center mt-3">Cart Page</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <div  style={{ overflowX: 'auto' }}>
            <div className="text-dark">
                <div className="container-fluid  text-dark py-5">
                    <div className="container mt-4 py-4">
                        <div className="container">
                            <h4 className="fw-bold text-danger mt-4">Product Name</h4>
                            <table className="table table-bordered table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th> Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td className='text-danger'> #{item.ProductId}</td>
                                            <td>
                                                <img src={item.Productimg} alt={item.ProductName} style={{ width: '100px', height: 'auto' }}/>
                                                {item.ProductName}
                                            </td>
                                            <td>{item.Price}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => handleIncrement(index)}>+</button>
                                                {counts[index] || 0}
                                              
                                                <button className="btn btn-danger" onClick={() => handleDecrement(index)}>-</button>
                                            </td>
                                            <td>{calculateSubtotal(item.Price,index)}</td>
                                            <td>
                                                <div className="row">
                                                    <div className="col">
                                                        <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'red', fontSize: '24px' }}   onClick={() => handleDelete(item.ProductId)}/>
                                                    </div>
                                                    <div className="col">
                                                        <Link to="/recipes">
                                                        <FontAwesomeIcon icon={faEdit} style={{ color: 'green', fontSize: '20px' }} />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='container-fluid p-4 bg-danger'>
                <div className='container bg-dark'>
                <div className='row'>
                    <div className='col '>
                        <div className=' p-4'>
                        <h1 className='mt-4  text-danger fw-bold  '>CafeDine </h1>
                        <p className='text-info ' >resturant</p>
                       </div>
                        <p className=''>
                            <ul>
                                <li className='text-light'> Excellent Service </li>
                                <li className='text-light'> fresh Food </li>
                                <li className='text-light'> Honest Staff </li>
                                <li className='text-light'> fresh Vegetables </li>
                                <li className='text-light'> fresh Drink </li>
                                <li className='text-light'>Do't use Expire product </li>
                            </ul>
                        </p>
                        <h6 className='text-info  p-4'> Address :1234 Altschul, New York,NY 10027-0000</h6>
                    </div>
                    <div className='col bg-light'>
                        <div className='mt-4 p-4'>
                            <h3>Order Summery</h3>

                            {showTotal && (
                <>
                            <hr/>
                            <p>Excepteur sint occaecat cupidat non proident sunt officia.</p>
                            <h4  className='mt-4'>Subtotal :  Rs{calculateTotal()}</h4>
                            <hr  className='text-danger'/>
                            <h6 className='mt-4 '>Shipping & Handling      :      0 Rs</h6>
                            <hr  className='text-danger'/>
                            <h6 className='mt-4'>Estimated Tax             :       0 Rs</h6>
                            <hr  className='text-danger'/>
                                 <h3 className='mt-4 text-danger'>Grand Total:  Rs{calculateTotal()}</h3>
                            <hr  className='text-danger'/>
                       
                            </>
            )}
                            <Link to={{ pathname: "/shipping",
                             state: { totalAmount: calculateTotal(), showTotal: showTotal } 
                             }}>
                            
                            <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => setShowTotal(!showTotal)}  > Proceed to Checkout</button></Link>
                        </div>


                    </div>

                </div>

              </div>


            </div>








<Footer/>



           
        </div>
    );
};

export default Cart;
