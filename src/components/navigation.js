import React from 'react';
import { Link } from "react-router-dom";



/* Navbar component to navigate to various sections of the page, smooth scroll to each section */

class Navigation extends React.Component {

     render() {
          return (
               <section className='navbar'>
                    <Link to={'/'} className="nav-link"> Home </Link>
                    <Link to={'/catering'} className="nav-link">Catering</Link>
                    <Link to={'/reservations'} className="nav-link">Reservations</Link>
                    <Link to={'/about'} className="nav-link">About Us</Link>
                    <Link to={'/checkout'} className="nav-link">Checkout</Link>
               </section>
          )
     }
}

export default Navigation;