import React from 'react';
import Button from 'react-bootstrap/Button';


class Navigation extends React.Component {

     render() {
          return (
               <>
               <div className="navbar">
                    <ul className="nav nav-pills justify-content-end">
                         <li className="nav-item">
                              <a href="/" className="nav-link">MENU</a>
                         </li>
                    
                         <li className="nav-item">
                              <a className="nav-link" href="/catering">CATERING</a>
                         </li>
                    
                         <li className="nav-item">
                              <a className="nav-link" href="/about">ABOUT</a>
                         </li>
                    
                         <li className="nav-item">
                              <a className="nav-link" href="/checkout">CHECKOUT</a>
                         </li>

                         <li className="nav-item">
                              <a className="nav-link" href="/reservations">
                              <button className='bookReservation'>BOOK A RESERVATION</button></a>
                         </li>
                     </ul>
               </div>

               <div className="reserveButton">
                    <Button variant="light">BOOK A RESERVATION</Button>
               </div>

               </>
          )
     }
}

export default Navigation;