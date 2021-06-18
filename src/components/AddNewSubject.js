import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addSubject, getAllSubjects } from '../actions/subjectActions';
import { closeAddSubjectModal } from '../actions/navigationActions';

import { Modal, Form, Col, Button } from 'react-bootstrap';

class AddNewSubject extends Component {
   state = {
      newSubjectData: {
         subjectName: ''
      }
   }

   onChangeSubjectName = (evt) => {
      let { newSubjectData } = this.state;
      newSubjectData.subjectName = evt.target.value;
      this.setState({ newSubjectData })
   }

   handleAddSubject = (evt) => {
      evt.preventDefault();
      this.props.addSubject(this.state.newSubjectData);
   }

   render() {

      return (
         <>
            <Modal
               show={ this.props.navigation.isAddSubjectModalOpen }
               onHide={ () => this.props.closeAddSubjectModal() }
               backdrop="static"
               keyboard={false}
            >
               <Modal.Header closeButton>
                  <Modal.Title>Add New Subject</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form>
                     <Col xs={8} className="mt-4">
                        <Form.Group controlId="tokens">
                           <Form.Label>Subject</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newSubjectData.subjectName}
                              onChange={this.onChangeSubjectName}
                           />
                        </Form.Group>
                     </Col>
                  </Form>
               </Modal.Body>
               <Modal.Footer>
                  <Button 
                     variant="secondary" onClick={ () => this.props.closeAddSubjectModal() } >
                     Close
                  </Button>
                  <Button
                     variant="primary"
                     onClick={this.handleAddSubject} > 
                     Add subject
                   </Button>
               </Modal.Footer>
            </Modal>
         </>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      subjects: state.subject.items,
      navigation: state.navigation
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getAllSubjects: bindActionCreators(getAllSubjects, dispatch),
      addSubject: bindActionCreators(addSubject, dispatch),
      closeAddSubjectModal: bindActionCreators(closeAddSubjectModal, dispatch),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewSubject)