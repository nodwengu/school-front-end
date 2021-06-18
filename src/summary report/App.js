import React, { Component } from 'react';

import SubTotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal'

import { Row } from 'react-bootstrap';

let styles = {
   container: {
      marginTop: '40px'
   },
   purchaseCard: {
      width: '400px',
      padding: '20px',
      boxShadow: '1px 3px 1px #9E9E9E'
   }
}


class App extends Component {
   constructor(props) {
      super(props);

      this.state = {
         total: 102.96,
         pickupSavings: -3.85,
         taxesFees: 8.92,
         estimatedTotal: 108.03
      }
   }

   render() {
      return (
         <div className="container" style={styles.container}>
            <Row className="purchase-card card" style={styles.purchaseCard}>
               <SubTotal price={this.state.total.toFixed(2)} />
               <PickupSavings price={this.state.pickupSavings.toFixed(2)} />
               <TaxesFees taxes={this.state.taxesFees.toFixed(2)} />
               <hr />
               <EstimatedTotal total={this.state.estimatedTotal.toFixed(2)} />

            </Row>

         </div>
      );
   }
}


export default App;
