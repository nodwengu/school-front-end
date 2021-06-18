import React, { Component } from 'react';

import { Row, Col} from 'react-bootstrap';

class TaxesFees extends Component {

    render() {

        return(
            <>
                <Row className="show-grid">
                    <Col md={6}>
                        <div>Est. taxes and fees(Based on 94085)</div>
                    </Col>
                    <Col md={6}>
                        {`$${this.props.taxes}`}
                    </Col>
                </Row>
            
            </>
        )
    }
}

export default TaxesFees;