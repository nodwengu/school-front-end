import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllGrades } from '../actions/gradeActions';
import { getAllLearners, addLearner } from '../actions/learnerActions'
import { closeAddLearnerModal } from '../actions/navigationActions';

import { Button, Modal, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class addNewLearner extends Component {
   state = {
      show: false,
      newLearnerData: {
         firstName: '',
         lastName: '',
         email: '',
         tokens: 0,
         subjects : [],
         grade: {
            id:0,
            gradeName: ''
         }
      },


   }

   onChangeGrade = (evt) => { 
      let index = evt.target.selectedIndex
      let dataset = evt.target.options[index].dataset;
      let { newLearnerData } = this.state;
      newLearnerData.grade.id = dataset.idx;
      newLearnerData.subjects = [];
      this.setState({ newLearnerData })
   }

   onChangeFirstName = (evt) => { 
      let { newLearnerData } = this.state;
      newLearnerData.firstName = evt.target.value;
      this.setState({ newLearnerData })
   }

   onChangeLastName = (evt) => { 
      let { newLearnerData } = this.state;
      newLearnerData.lastName = evt.target.value;
      this.setState({ newLearnerData })
   }

   onChangeEmail = (evt) => { 
      let { newLearnerData } = this.state;
      newLearnerData.email = evt.target.value;
      this.setState({ newLearnerData })
   }

   onChangeTokens = (evt) => { 
      let { newLearnerData } = this.state;
      newLearnerData.tokens = evt.target.value;
      this.setState({ newLearnerData })
   }

   handleAddLearner = (evt) => {
      evt.preventDefault();
      let gradeId = this.state.newLearnerData.grade.id;
      this.props.addLearner(this.props.learners, gradeId, this.state.newLearnerData);
   }

   render() {
      
      const gradeOptions = this.props.grades.map(grade => {
         return ( <option key={grade.id} data-idx={grade.id}>{grade.gradeName}</option> );
      });

      return (
         <>
            <Modal
               show={ this.props.navigation.isAddLearnerModalOpen }
               onHide={ () => this.props.closeAddLearnerModal() }
               backdrop="static"
               keyboard={false}
            >
               <Modal.Header closeButton>
                  <Modal.Title>Add Learner</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form>
                     <Col xs={8} className="mt-4">
                        <Form.Group controlId="gradeSelect">
                           <Form.Label>Grade</Form.Label>
                           <Form.Control
                              as="select"
                              custom
                              // value={this.state.newLearnerData.grade.id}
                              onChange={this.onChangeGrade}
                           >
                              <option>select grade</option>
                              {gradeOptions}
                           </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="firstName">
                           <Form.Label>First name</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newLearnerData.firstName}
                              onChange={this.onChangeFirstName}
                           />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                           <Form.Label>Last name</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newLearnerData.lastName}
                              onChange={this.onChangeLastName}
                           />
                        </Form.Group>

                        <Form.Group controlId="email">
                           <Form.Label>Email</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newLearnerData.email}
                              onChange={this.onChangeEmail}
                           />
                        </Form.Group>

                        <Form.Group controlId="tokens">
                           <Form.Label>Tokens</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newLearnerData.tokens}
                              onChange={this.onChangeTokens}
                           />
                        </Form.Group>
                     </Col>
                  </Form>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={ () => this.props.closeAddLearnerModal() }>
                     Close
                  </Button>
                  <Button
                     variant="primary"
                     onClick={this.handleAddLearner}
                  > Add learner
                   </Button>
               </Modal.Footer>
            </Modal>
         </>
      );
   }
}

// Which properties I need in which component
const mapStateToProps = (state) => {
   return {
      grades: state.grade.items,
      learners: state.learner.items,
      navigation: state.navigation
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      getAllGrades: bindActionCreators(getAllGrades, dispatch),
      getAllLearners: bindActionCreators(getAllLearners, dispatch),
      addLearner: bindActionCreators(addLearner, dispatch),
      closeAddLearnerModal: bindActionCreators(closeAddLearnerModal, dispatch),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(addNewLearner);
