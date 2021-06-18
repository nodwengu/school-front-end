import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addSubject, getAllSubjects, getSubjectById, updateSubject } from '../actions/subjectActions';
import { closeUpdateSubjectModal, closeShowSubjectsModal } from '../actions/navigationActions';


import { Jumbotron, Form, Col, Button, Row, Container, Card } from 'react-bootstrap';

let styles = {
   container: {
      marginTop: '40px'
   },
   updateCard: {
      width: '400px',
      padding: '20px',
      boxShadow: '1px 3px 1px #9E9E9E'
   }
}

class UpdateSubjectComponent extends Component {
   state = {
      newSubjectData: {
         id: this.props.match.params.id,
         subjectName: ''
      }
   }

   componentDidMount() {
      this.props.getSubjectById(this.state.newSubjectData.id);
     
   }

   onChangeSubjectName = (evt) => {
      let { newSubjectData } = this.state;
      newSubjectData.subjectName = evt.target.value;
      this.setState({ newSubjectData })
   }

   handleUpdateSubject = (evt) => {
      evt.preventDefault();
      console.log("TRYING TO UPDATE THE SUBJECT");
      this.props.updateSubject(this.state.newSubjectData, this.state.newSubjectData.id);
   }

   render() {
      return (
         <>
            <Jumbotron>
               <Container>
                  <Row>
                  <Col xs={3}></Col>
                     <Col xs={6}>
                        <Card className="col-12" style={styles.updateCard}>
                           <Card.Body>
                              <Card.Title>Update subject</Card.Title>
                              <Card.Text>
                                 <Form.Group controlId="subjectName">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control
                                       type="text"
                                       //value={this.props.subject.subjectName}
                                       onChange={this.onChangeSubjectName} 
                                    />
                                 </Form.Group>
                                 <Form.Group controlId="tokens">
                                    <Button
                                       variant="primary"
                                       onClick={this.handleUpdateSubject}
                                       > Update
                                    </Button>
                                 </Form.Group>
                              </Card.Text>
                           </Card.Body>
                        </Card>
                     </Col>
                     <Col xs={3}></Col>
                  </Row>
               </Container>
            </Jumbotron>
         </>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      subjects: state.subject.items,
      subject: state.subject.item,
      navigation: state.navigation
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getAllSubjects: bindActionCreators(getAllSubjects, dispatch),
      addSubject: bindActionCreators(addSubject, dispatch),
      getSubjectById: bindActionCreators(getSubjectById,dispatch),
      closeUpdateSubjectModal: bindActionCreators(closeUpdateSubjectModal, dispatch),
      updateSubject: bindActionCreators(updateSubject, dispatch),
      
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateSubjectComponent)