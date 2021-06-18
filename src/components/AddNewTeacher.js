import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getAllTeachers, addTeacher} from '../actions/teacherActions';
import { closeAddTeacherModal } from '../actions/navigationActions';

import {Modal, Form, Col, Button} from 'react-bootstrap';
//import { getAllSubjects } from '../actions/subjectActions';


class AddNewTeacher extends Component {
   state = {
      newTeacherData: {
         firstName: '',
         lastName: '',
         email: ''
      }
   }

   onChangeFirstName = (evt) => {
      const { newTeacherData } = this.state;
      newTeacherData.firstName = evt.target.value;
      this.setState({ newTeacherData });
   }

   onChangeLastName = (evt) => {
      const { newTeacherData } = this.state;
      newTeacherData.lastName = evt.target.value;
      this.setState({ newTeacherData });
   }

   onChangeEmail = (evt) => {
      const { newTeacherData } = this.state;
      newTeacherData.email = evt.target.value;
      this.setState({ newTeacherData });
   }

   handleAddTeacher = (evt) => {
      evt.preventDefault();
      this.props.addTeacher(this.state.newTeacherData);
   }

   render() {

      return (
         <>
            <Modal
               show={ this.props.navigation.isAddTeacherModalOpen }
               onHide={ () => this.props.closeAddTeacherModal() }
               backdrop="static"
               keyboard={false}
            >
               <Modal.Header closeButton>
                  <Modal.Title>Add New Teacher</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form>
                     <Col xs={8} className="mt-4">
                        <Form.Group controlId="firstName">
                           <Form.Label>First name</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newTeacherData.firstName}
                              onChange={this.onChangeFirstName}
                           />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                           <Form.Label>Last name</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newTeacherData.lastName}
                              onChange={this.onChangeLastName}
                           />
                        </Form.Group>
                        <Form.Group controlId="email">
                           <Form.Label>Email</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newTeacherData.email}
                              onChange={this.onChangeEmail}
                           />
                        </Form.Group>
                     </Col>
                  </Form>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={ () => this.props.closeAddTeacherModal() }>
                     Close
                  </Button>
                  <Button
                     variant="primary"
                     onClick={this.handleAddTeacher}
                  > Save Learner
                   </Button>
               </Modal.Footer>
            </Modal>
         </>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      teachers: state.teachers,
      navigation: state.navigation
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getAllTeachers: bindActionCreators(getAllTeachers, dispatch),
      addTeacher: bindActionCreators(addTeacher, dispatch),
      closeAddTeacherModal: bindActionCreators(closeAddTeacherModal, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTeacher);