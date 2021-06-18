import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

class SubTotal extends Component {

   render() {

      return (
         <Row className="show-grid">
            <Col md={6}>SubTotal</Col>
            <Col md={6}>$500.00</Col>
         </Row>
      );
   }
}

export default SubTotal;