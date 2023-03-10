import React from 'react';
import { Button, Nav, NavItem, NavLink } from 'react-bootstrap';


class Navigation extends React.Component {

     render() { 
          return ( 
               <>
               <Nav className="justify-content-end" gap={5}>
                    <NavItem>
                         <Nav.Link href="/">HOME</Nav.Link>
                    </NavItem>
                    <NavItem>
                         <NavLink href="/catering">CATERING</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink href="/about">ABOUT</NavLink>
                    </NavItem>
                    <NavItem>
                         <NavLink href="/checkout">CHECKOUT</NavLink>
                    </NavItem>    

                    <Button variant="light" href="/reservations">BOOK A RESERVATION</Button>           
               </Nav>
               </>
          )
     }
}

export default Navigation;