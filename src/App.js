import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Reservation from './pages/Reservation';
import About from './pages/about';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Recipes from './pages/Recipes';
import CayeDinelogo from './img/CayeDinelogo.png';
import Cart from './pages/Cart';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';


import './App.css';


function App() {
  return (
    <div>
      <Navbar expand="lg" className="Navbar align-left-nav">
        <Container>
        <Navbar.Brand as={Link} to="/"  className="text-danger fw-semibold navbar-brand">
            <img src={CayeDinelogo} alt="CayeDine Logo" className='img-fluid' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" >
              <Nav.Link as={Link} to="/"  className="nav-link text-uppercase fw-bold text-light">Home</Nav.Link>
              <Nav.Link as={Link} to="/about"   className="nav-link text-uppercase fw-bold text-light">About</Nav.Link>
              <Nav.Link as={Link} to="/recipes"  className="nav-link text-uppercase fw-bold text-light">Recipes</Nav.Link>
              <NavDropdown title="Reservation" id="reservation-dropdown"  className=" text-uppercase  fw-bold text-light">
            
                <NavDropdown.Item as={Link} to="/reservation">reservation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/cart">Cart</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/shipping">Shipping</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/payment">Payment</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/confirmation">confirmation</NavDropdown.Item>
              
              </NavDropdown>
             
              <Nav.Link as={Link} to="/gallery"  className="nav-link text-uppercase fw-bold text-light">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/contact"  className="nav-link text-uppercase  fw-bold text-light">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  );
}

export default App;
