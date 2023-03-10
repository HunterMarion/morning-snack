import React from 'react';


class Navigation extends React.Component {

     render() {
          return (
               <>
               <nav>
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
               </nav>
               </>
          )
     }
}

export default Navigation;