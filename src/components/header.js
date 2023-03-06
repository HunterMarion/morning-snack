import React from 'react';
import { Navigation } from '../src/components/navigation';

class Header extends React.Component {

     render() {
          return (
          <>
          <section className='header'>
               <section className='header-top'>
                    <section className='header-top_logo'>
                         <a href="/" className='header-logo'>LOGO</a>
                    </section>
                    <section className='header-top_navbar'>
                        <Navigation />
                    </section>
               </section>
               <section className='header-bottom'>
                   
               </section>
          </section>
          </>  
          )  
     }
}

export default Header;