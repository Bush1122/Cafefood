import React from 'react';
import { Link } from 'react-router-dom'; 
import { Routes, Route,} from 'react-router-dom';
import All from './all';
import Started from './Started';
import  Launch  from './Launch';
import  Diner  from './Diner';

const Navbar = () => {
    return (
        <div className="container-fluid ">
            <div className="container ">
                <nav className="navbar navbar-expand-sm  justify-content-md-center">
                    <ul className="navbar-nav text-center fs-2 fw-bold ">
                      
                        <li className="nav-item">
                            <Link className="nav-link fs-5 fw-bold text-uppercase text-dark" to="/">All </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-decoration-none text-uppercase text-dark" to="/started">Started</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 fw-bold text-uppercase text-dark" to="/launch">Launch</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5 fw-bold text-uppercase text-dark" to="/diner">Diner</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>

        <Routes>

        <Route path="/" element={<All />} />
        <Route path="/started" element={<Started />} />
        <Route path="/launch" element={<Launch />} />
        <Route path="/diner" element={<Diner />} />
  
       </Routes>
        </div>
    );
};

export default Navbar;

