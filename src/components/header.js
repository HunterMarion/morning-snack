import React from 'react';
import Navigation from '../components/navigation';

class Header extends React.Component {

     render() {
          return (
          <>
          <header className='menuHeader'>

               <div className='headerLogo'></div>

               <div className='headerNav'>
                    <Navigation />
               </div>

               <div className='bookReservation'>
                    <button>BOOK A RESERVATION</button>
               </div>

               <div className='menuHero'>
                    {/*<h1 className='menuHeroText'>Welcome to Morning Snack</h1>*/}
               </div>
               
          </header>
          </>  
          )  
     }
}

export default Header;