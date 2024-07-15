import Navbar from '../Component/Navbar';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import Card from "../Component/Card";
import React, { useContext } from 'react';
import recipesCard from "../Component/recipesCard";
import Footer from './Footer';
import Card2 from "../Component/Card2";
import recipesCard2 from "../Component/recipesCard2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Recipes = () => {
  const { addToCart } = useContext(CartContext);

  const chunkedRecipes2 =[];
  for (let i = 0 ;i < recipesCard2.length; i += 10){
    chunkedRecipes2.push(recipesCard2.slice(i ,i+ 10))
  }

  const chunkedRecipes = [];
  for (let i = 0; i < recipesCard.length; i += 6) {
    chunkedRecipes.push(recipesCard.slice(i, i + 6));
  }

  return (
    <div>
      <div className="text-dark">
        <div className="container-fluid about-page text-dark main-session-about py-5">
          <header className="h-100 min-vh-80 d-flex align-text-center text-light shadow py-5">
            <div className="container">
              <div className="row py-5">
                <div className="d-flex d-sm-block flex-column align-item-center">
                  <h1 className="text-light fw-bold mb-4 text-center mt-3">
                    Food Menu
                  </h1>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="container p-2  mt-5">
        <div className="row mt-4">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <h5 className="fs-5 fw-bold text-center text-danger">CafeDine Dishes</h5>
            <h4 className="mt-3 text-center fw-bold text-dark">We Provide Quality Food. We Care About Your Health</h4>
          </div>
        </div>
      </div>
     
      <div className="container mt-2 py-4">
        {chunkedRecipes2.map((chunk2 ,index) => (
          <div key={index} className="row mt-3 ">
            {chunk2.map((recipe2 ,index2) => (
              <div key={index2} className="col-md-6 col-lg-6 p-3 py-4 wow fadeIn" data-wow-delay="0.1s">
                <Card2
                  ProductId={recipe2.ProductId}
                  Productimg={recipe2.Productimg}
                  ProductName={recipe2.ProductName}
                  Price={recipe2.Price}
                  ProductDetail={recipe2.ProductDetail}
                  quanlity={recipe2.quantity}
                />
                <div className="mt-2 p-4">
                  <Link to="/cart">
                    <button type="button" className="btn btn-danger" onClick={() => addToCart(recipe2)}>
                      <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="container-fluid my-5 py-4 mt-5 main-session-card-2 bg-light">
        <div className="container my-5 py-4 mt-5 main-session-card-2 ">
          <div className="row">
            <div className="col d-flex flex-column justify-content-center align-items-center h-100">
              <h2 className="fs-3 fw-bold text-center text-danger">Main Dishes</h2>
              <h4 className="mt-1 text-center">We Provide Quality Food. We Care About Your Health</h4>
            </div>
          </div>
        </div>
      
        <div className="container main-session-card-2 mb-5 mt-5 ">
          <div className="row feature-row">
            {chunkedRecipes.map((chunk, rowIndex) => (
              <div key={rowIndex} className="row mt-4">
                {chunk.map((recipe, colIndex) => (
                  <div key={colIndex} className="col-md-4 ">
                    <Card
                      ProductId={recipe.ProductId}
                      Productimg={recipe.Productimg}
                      ProductName={recipe.ProductName}
                      Price={recipe.Price}
                      ProductDetail={recipe.ProductDetail}
                      quanlity={recipe.quantity}
                    />
                    <div className="mt-2 p-4">
                      <Link to="/cart">
                        <button type="button" className="btn btn-danger" onClick={() => addToCart(recipe)}>
                          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    
      <Footer/>
    </div>
  );
};

export default Recipes;
