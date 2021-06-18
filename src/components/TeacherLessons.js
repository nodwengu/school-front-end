
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllLearners, getLearnerById } from '../actions/learnerActions';

import LearnerNavigation from './LearnerNavigation';

import { Card, Button, Table, Row, Container, Col, Jumbotron, Nav, Form } from 'react-bootstrap';


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

class LearnerLessons extends Component {

   state = {
      isLoading: true
   }

   componentDidMount() {
      let location = window.location;
      let vars = location.pathname.split("/");
      let learnerId = vars[2];

      this.props.getLearnerById(learnerId);
      this.props.getAllLearners();
   }

   deleteLearner = (id) => {
      this.props.removeLearner(this.props.learners, id);
   }

   render() {

      let firstName = "";
      let learnerLessons = [];

      if (this.props.learner) {

         firstName = this.props.learner.firstName;

         learnerLessons = this.props.learner.lessons.map(lesson => {
            console.log("TRYING TRYING: ", lesson.grade.gradeName);
            return (
               <tr key={lesson.id}>
                  <td>{lesson.lessonName}</td>
                  <td>{lesson.subject.subjectName}</td>
                  {/* <td>{lesson.email}</td> */}
                  <td>{lesson.time}</td>
                  <td>{lesson.day.dayName}</td>
                  <td>{lesson.grade.gradeName}</td>
                  <td>
                     <Button variant="primary" className="mr-2">Attend</Button>
                  </td>
               </tr>
            );
         });

         console.log("learnerLessons: ", learnerLessons);

      }



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
                        <Row>
                           <Col xs="auto">
                              <Nav variant="pills" defaultActiveKey="#first" className="mt-4">
                                 <Nav.Item onClick={() => this.props.openShowSelectSubjectModal()}>
                                    <Nav.Link href="#first">Choose Subject</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                           </Col>
                           <Col xs="auto">
                              <Nav variant="pills" defaultActiveKey="#first" className="mt-4">
                                 <Nav.Item onClick={() => this.props.openLearnerSubjectsModal()}>
                                    <Nav.Link href="#first">My subjects</Nav.Link>
                                 </Nav.Item>
                              </Nav>
                           </Col>


                           <Col md={1} >

                           </Col>


                        </Row>
                        <Card className="mt-5 col-12" style={styles.learnersListCard}>
                           <Card.Body>
                              <Row>
                                 <Col xs={12} md={3}>
                                    <Form.Group controlId="gradeSelect">
                                       <Form.Control
                                          as="select"
                                          custom
                                          onChange={this.onChangeGrade}
                                       >
                                          <option>Filter By Day</option>
                                          {/* {gradeOptions} */}
                                       </Form.Control>
                                    </Form.Group>
                                 </Col>
                                 <Col xs={12} md={3}>
                                    <Form.Group controlId="gradeSelect">
                                       <Form.Control
                                          as="select"
                                          custom
                                          onChange={this.onChangeGrade}
                                       >
                                          <option>Sort By:</option>
                                          {/* {gradeOptions} */}
                                       </Form.Control>
                                    </Form.Group>
                                 </Col>

                              </Row>
                              <Card.Title>Teacher Lessons</Card.Title>
                              <Card.Title>Welcome back: {firstName}</Card.Title>
                              <Card.Title>Monday: Lessons</Card.Title>
                              <Card.Text>
                                 <Table striped bordered hover>
                                    <thead>
                                       <tr>
                                          <th>Lesson</th>
                                          <th>Subject</th>
                                          {/* <th>Teacher</th> */}
                                          <th>Time</th>
                                          <th>Day</th>
                                          <th>Grade</th>
                                          <th>Action</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       {learnerLessons}
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
      learners: state.learner.items,
      learner: state.learner.item

   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      getAllLearners: bindActionCreators(getAllLearners, dispatch),
      getLearnerById: bindActionCreators(getLearnerById, dispatch),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnerLessons);
