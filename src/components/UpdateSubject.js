import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addSubject, getAllSubjects } from '../actions/subjectActions';
import { closeUpdateSubjectModal, closeShowSubjectsModal } from '../actions/navigationActions';


import { Modal, Form, Col, Button } from 'react-bootstrap';

class AddNewSubject extends Component {
   state = {
      newSubjectData: {
         //id: this.props.match.params.id,
         subjectName: ''
      }
   }

   onChangeSubjectName = (evt) => {
      let { newSubjectData } = this.state;
      newSubjectData.subjectName = evt.target.value;
      this.setState({ newSubjectData })
   }

   handleUpdateSubject = (evt) => {
      evt.preventDefault();
      // this.props.addSubject(this.props.subjects, this.state.newSubjectData);
      this.props.updateSubject(this.state.newSubjectData);
   }

   handleCloseModal = () => {
      console.log("CLOSING UPDATE MODAL");
      // should update show state of updateModal
      //this.props.closeAddSubjectModal();

   }

   render() {
     
      
      return (
         <>
            <Modal
               show={this.props.navigation.isUpdateSubjectModalOpen}
               onHide={() => this.props.closeUpdateSubjectModal()}
               backdrop="static"
               keyboard={false}
            >
               <Modal.Header closeButton>
                  <Modal.Title>Update subject</Modal.Title>
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
                     variant="secondary" 
                     onClick={ () => this.props.closeUpdateSubjectModal() }>
                     Close
                  </Button>
                  <Button
                     variant="primary"
                     onClick={this.handleAddSubject}
                  > Update
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
      closeUpdateSubjectModal: bindActionCreators(closeUpdateSubjectModal, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewSubject)