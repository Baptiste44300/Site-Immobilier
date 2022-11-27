import React from 'react';
import './style/Layout.css'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div >
        
        <nav className='Header'>
        <h1>logo</h1>
          <ul className='NavBar'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </div>
    );
};

export default Layout;