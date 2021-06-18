
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllLearners, removeLearner } from '../actions/learnerActions';

import LearnerNavigation from './LearnerNavigation';

import { Card, Button, Table, Row, Container, Col, Jumbotron } from 'react-bootstrap';



let styles = {
   // container: {
   //    marginTop: '40px'
   // },
   learnersListCard: {
      // width: '400px',
      padding: '10px',
      boxShadow: '1px 3px 1px #9E9E9E'
   }
}

class SelectSubject extends Component {

   state = {
      isLoading: true
   }

   componentDidMount() {
      this.props.getAllLearners();
   }

   deleteLearner = (id) => {
      this.props.removeLearner(this.props.learners, id);
   }

   render() {
      // const { closeLearnerModal, showLearnerModal } = this.props;

      const learners = this.props.learners.map(learner => {
         return (
            <tr key={learner.id}>
               <td>{learner.firstName}</td>
               <td>{learner.lastName}</td>
               <td>{learner.email}</td>
               <td>{learner.tokens}</td>
               <td>{learner.tokens}</td>
               <td>{learner.grade.gradeName}</td>
               <td>
                  <Button variant="primary" className="mr-2">Attend</Button>
               </td>
            </tr>
         );
      });

      // if (this.state.isLoading) {
      //    return(<div>Loading....</div>)
      // }

      //  { !this.props.learners ? (
      //       <div>Loading....</div>
      //    ) : (
      //      <div>Loaded...</div>
      //    ) 
      // }

      return (
         <>
            <Jumbotron>

               <Row>
                  <Col xs={2}></Col>
                  <Col xs={8}>
                     <Container>
                        <LearnerNavigation />
                        <Card className="mt-5 col-12" style={styles.learnersListCard}>
                           <Card.Body>
                              <Card.Title>Select Subject</Card.Title>
                              <Card.Text>
                                 <Table striped bordered hover>
                                    <thead>
                                       <tr>
                                          <th>Lesson</th>
                                          <th>Subject</th>
                                          <th>Teacher</th>
                                          <th>Time</th>
                                          <th>Day</th>
                                          <th>Grade</th>
                                          <th>Action</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {learners}
                                    </tbody>
                                 </Table>
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </Container>
                  </Col>
                  <Col xs={2}></Col>
               </Row>
            </Jumbotron>
         </>
      );
   }
}


// Which properties I need in which component
const mapStateToProps = (state) => {
   return {
      learners: state.learner.items
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      getAllLearners: bindActionCreators(getAllLearners, dispatch),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectSubject);
