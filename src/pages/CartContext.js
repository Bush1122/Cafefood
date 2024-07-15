

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [counts, setCounts] = useState({}); // Separate state for counts

  const updateTotalAmount = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * (counts[item.productId] || 0); // Use counts for quantity
    });
    setTotalAmount(total.toFixed(2));
  };


  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setCounts(prevCounts => ({
      ...prevCounts,
      [item.productId]: (prevCounts[item.productId] || 0) + 1,
    }));
    updateTotalAmount();
  };



  ///const addToCart = (item) => {
  //  setCartItems([...cartItems, item]);
   // updateTotalAmount();
 /// };


 //const addToCart = (item) => {
  //setCartItems([...cartItems, item]);
  /// setCounts=({ ...counts, [item.productId]: (counts[item.productId] || 0) + 1 });

    //((prevCounts) => ({
  ///    ...prevCounts,
  ///    [item.productId]: (prevCounts[item.productId] || 0) + 1,
  //  }));
    
   
  // updateTotalAmount();
//};


 // const addToCart = (item) => {
  //  setCartItems([...cartItems, item]);
  //  updateTotalAmount();
//};




  const removeFromCart = (productId) => {
  const updatedCartItems = cartItems.filter(item => item.productId !== productId);
 setCartItems(updatedCartItems);
  updateTotalAmount();
  };




  const handleIncrement = (productId) => {
    setCounts(prevCounts => ({ ...prevCounts, [productId]: (prevCounts[productId] || 0) + 1 }));
    updateTotalAmount();
  };

  const handleDecrement = (productId) => {
    setCounts(prevCounts => ({ ...prevCounts, [productId]: Math.max((prevCounts[productId] || 0) - 1, 0) }));
    updateTotalAmount();
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems,
      totalAmount,
      addToCart,
      removeFromCart,
      counts,
      handleIncrement,
      handleDecrement,
    }}>
      {children}
    </CartContext.Provider>
  );
};


























//import React, { createContext, useState } from 'react';
///export const CartContext = createContext();


 ///export const CartContextProvider = ({ children }) => {
  ///const [cartItems, setCartItems, counts ] = useState([]);
  
  ///  const [totalAmount, setTotalAmount] = useState(0);
 
  //  const updateTotalAmount = () => {
   //   let total = 0;
    //  cartItems.forEach(item => {
     //     total += item.price * item.quantity;
   //   });
  //    setTotalAmount(total.toFixed(2));
 // };



 // const addToCart = (item) => {
  //  setCartItems([...cartItems, item]);
  //  updateTotalAmount();
//};



//const removeFromCart = (productId) => {
 // const updatedCartItems = cartItems.filter(item => item.productId !== productId);
//  setCartItems(updatedCartItems);
 // updateTotalAmount();
//};




  //return (
  //  <CartContext.Provider value={{ setCartItems,cartItems,
   //   totalAmount,
   //   addToCart,
   //   removeFromCart, 
   //   counts ,
  //    }}>
   //   {children}
 //   </CartContext.Provider>
//  );

//};












///import React, { createContext, useState } from 'react';

///////export const CartContext = createContext(); {

///const CartContextProvider = ({ children }) => {
 // const [cartItems, setCartItems] = useState([]);
 

 // const addToCart = (item) => {
///    setCartItems([...cartItems, item]);
 // };

//}
 /// return (
   /// <CartContext.Provider value={{ cartItems, addToCart ,setCartItems }}>
   ///   {children}
   /// </CartContext.Provider>
 /// );
///};
