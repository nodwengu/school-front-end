import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getLearnerById, removeLearnerSubject } from '../actions/learnerActions';
import { closeLearnerSubjectsModal } from '../actions/navigationActions';

import { Button, Modal, Col, Table } from 'react-bootstrap';

let styles = {
   selectSubjectCard: {
      // width: '400px',
      padding: '10px',
      boxShadow: '1px 3px 1px #9E9E9E'
   }
}

class LearnerSubjects extends Component {
   state = {
      
      selectedList: [],
      checkedList: [],
      isChecked: false,
   }

   componentDidMount() {
      let location = window.location;
      let vars = location.pathname.split("/");
      let learnerId = vars[2];

      this.props.getLearnerById(learnerId);
      //this.props.getAllSubjects();

   }

   deleteSubject = (subjectId) => {
      console.log("this.props.learner deleteSubject:", this.props.learner.subjects);
      this.props.removeLearnerSubject(subjectId, this.props.learner)
   }

   render() {
      let mySubjects = [];

      if( this.props.learner ) {

         mySubjects = this.props.learner.subjects.map( subject => {
            return (
               <tr key={subject.id}>
                  <td>{subject.subjectName}</td>
                  <td>
                     <Button 
                        variant="danger"
                        onClick={ () => this.deleteSubject(subject.id)}
                        > Remove
                     </Button>
                  </td>
               </tr>
            );
         });
      }

      return (
         <>
            <Modal
               show={ this.props.navigation.isLearnerSubjectsModalOpen }
               onHide={ () => this.props.closeLearnerSubjectsModal() }
               // backdrop="static"
               keyboard={false}
            >
               <Modal.Header closeButton>
                  <Modal.Title>My subjects</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Table striped bordered hover>
                     <thead>
                        <tr>
                           <th>Subject name</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        { mySubjects }
                     </tbody>
                    
                  </Table>
                  <button 
                     type="button" 
                     className="btn btn-secondary mt-3 " 
                     data-dismiss="modal"
                     onClick={ () => this.props.closeLearnerSubjectsModal() }>Close
                  </button>
               </Modal.Body>

            </Modal>
         </>
      );
   }
}

// Which properties I need in which component
const mapStateToProps = (state) => {
   return {
      learners: state.learner.items,
      navigation: state.navigation,
      learner: state.learner.item
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      closeLearnerSubjectsModal: bindActionCreators(closeLearnerSubjectsModal, dispatch),
      getLearnerById: bindActionCreators(getLearnerById, dispatch),
      removeLearnerSubject: bindActionCreators(removeLearnerSubject, dispatch),

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnerSubjects);
