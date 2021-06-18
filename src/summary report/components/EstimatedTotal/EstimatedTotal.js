import React, { Component } from 'react';

import { Row, Col} from 'react-bootstrap';

const styles = {
    boldText: {
        fontWeight: 800,
        fontSize: 25
    }
}

class EstimatedTotal extends Component {

    render() {

        return(
            <Row className="show-grid">
                <Col md={6}>
                    <div style={styles.boldText}>Est. Total</div>
                </Col>
                <Col md={6}>
                    <div style={styles.boldText}>
                        {`$${this.props.total}`}
                    </div>
                </Col>
                <hr />
            </Row>
        )
    }
}

export default EstimatedTotal;