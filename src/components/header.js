import React from 'react';
import Navigation from '../components/navigation';
import { Container, Col, Row } from 'react-bootstrap';

class Header extends React.Component {

     render() {
          return (
               <>
               <Container>
                    <Row>
                         <Col>
                              <img src="assets/logo.png" height="100" width="150" alt="Morning Snack"></img>
                         </Col>
                    </Row>
                    <Row>
                         <Col><div className='headerNav'><Navigation /></div></Col>
                    </Row>
               </Container>    
               </>  
          )  
     }
}

export default Header;