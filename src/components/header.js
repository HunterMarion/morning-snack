import React from 'react';
import Navigation from '../components/navigation';

class Header extends React.Component {

     render() {
          return (
               <>
               <div className='headerNav'><Navigation /></div>   

               <div className='headerLogo'></div>    
               </>  
          )  
     }
}

export default Header;