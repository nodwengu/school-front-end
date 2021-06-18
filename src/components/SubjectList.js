import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Table } from 'react-bootstrap';

import { getAllSubjects, removeSubject } from '../actions/subjectActions';
import { openUpdateSubjectModal, closeShowSubjectsModal } from '../actions/navigationActions';

import UpdateSubject from './UpdateSubject';

class SubjectList extends Component {
   // constructor(props) {
   //    super(props);

   //    this.editSubject = this.editSubject.bind(this)
   // }

   componentDidMount() {
      this.props.getAllSubjects();
   }

   deleteSubject = (id) => {
      this.props.removeSubject(this.props.subjects, id);
   }  

   editSubject = (id) => {
      console.log("STILL NEED TO PUSH(REDIRECTS) TO UPDATE SUBJECT COMPONENT");
      // this.props.history.push(`/update-subject/${id}`); 
   }


   handleOpenModal = () => this.props.openUpdateSubjectModal();

   closeShowSubjectsModal = () => this.props.closeShowSubjectsModal();

   render() {
      const { showSubjectsModal, closeShowSubjectsModal } = this.props;
    
      const subjects = this.props.subjects.map( subject => {
         return (
            <tr key={subject.id}>
               <td>{subject.subjectName}</td>
               <td>
                  <Button 
                     variant="primary" 
                     onClick={ this.editSubject(subject.id) }
                     className="mr-2" >
                        Edit
                  </Button>
                  <Button 
                     variant="danger"
                     onClick={() => this.deleteSubject(subject.id)}
                     > Remove
                  </Button>
               </td>
            </tr>
         );
      });

      return (
         <>

            <UpdateSubject />

            <Modal
               show={this.props.navigation.isShowSubjectsModalOpen}
               onHide={closeShowSubjectsModal}
               // backdrop="static"
               keyboard={false}
            >
               <Modal.Header closeButton>
                  <Modal.Title style={{background: "yellow"}}>List of subjects</Modal.Title>
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
                           {subjects}
                        </tbody>
                     </Table>
                  </Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={closeShowSubjectsModal}>
                     Close modal
                  </Button>
                  
               </Modal.Footer>
            </Modal>
         </>
      )
   }
}

// Which properties I need in which component
const mapStateToProps = (state) => {
   return {
      subjects: state.subject.items,
      navigation: state.navigation
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      getAllSubjects: bindActionCreators(getAllSubjects, dispatch),
      removeSubject: bindActionCreators(removeSubject, dispatch),
      openUpdateSubjectModal: bindActionCreators(openUpdateSubjectModal, dispatch),
      closeShowSubjectsModal: bindActionCreators(closeShowSubjectsModal, dispatch)
   }
}

// const SubjectListWithRouter = withRouter(SubjectList);

// export const SubjContainer =  connect(mapStateToProps, mapDispatchToProps)(withRouter(SubjectList));

export default connect(mapStateToProps, mapDispatchToProps)(SubjectList);
