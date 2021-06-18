import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getClassmates, getLearnerById } from '../actions/learnerActions';
import { closeClassmatesModal } from '../actions/navigationActions';

import { Button, Modal, Table } from 'react-bootstrap';
import { subjects } from '../actions/TestData';

let styles = {
   selectSubjectCard: {
      // width: '400px',
      padding: '10px',
      boxShadow: '1px 3px 1px #9E9E9E'
   }
}

class ChooseSubjectModal extends Component {
   state = {

   }

   componentDidMount() {
      let location = window.location;
      let vars = location.pathname.split("/");
      let learnerId = vars[2];

      this.props.getLearnerById(learnerId);
      this.props.getClassmates(learnerId);

   }

   

   render() {
      
      const classmates = this.props.classmates.map(learner => {
         
         if (learner) {
            return (
               <tr key={learner.id}>
                  <td>{learner.firstName}</td>
                  <td>{learner.lastName}</td>
                  <td>{learner.email}</td>
                  <td>
                     {
                        learner.subjects.map( subject => <span>{subject.subjectName}</span> )
                     }
                  </td>
                  <td>
                     <Button variant="primary" className="mr-2">View notes</Button>
               
                  </td>
               </tr>
            );
         }
        
         

      });

      return (
         <>
            <Modal
               show={this.props.navigation.isLearnerClassmatesModalOpen}
               onHide={() => this.props.closeClassmatesModal()}
               // backdrop="static"
               keyboard={false}
               size="lg"
            >
               <Modal.Header closeButton>
                  <Modal.Title>MY CLASSMATES...</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Table striped bordered hover>
                     <thead>
                        <tr>
                           <th>First Name</th>
                           <th>Last Name</th>
                           <th>Email</th>
                           <th>Subjects</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {classmates}
                     </tbody>
                  </Table>
               </Modal.Body>

            </Modal>
         </>
      );
   }
}

// Which properties I need in which component
const mapStateToProps = (state) => {
   return {
      //   grades: state.grade.items,
      classmates: state.learner.classmates,
      navigation: state.navigation,
      // classmateSubjects: state.learner.classmates.subjects,
      //   learner: state.learner.item
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      closeClassmatesModal: bindActionCreators(closeClassmatesModal, dispatch),
      //   getAllSubjects: bindActionCreators(getAllSubjects, dispatch),
      //   selectSubject: bindActionCreators(selectSubject, dispatch),
      getLearnerById: bindActionCreators(getLearnerById, dispatch),
      getClassmates: bindActionCreators(getClassmates, dispatch),

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseSubjectModal);
