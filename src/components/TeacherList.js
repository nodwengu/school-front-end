import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Table, Card } from 'react-bootstrap';

import { getAllTeachers, removeTeacher } from '../actions/teacherActions';
import { closeShowTeachersModal } from '../actions/navigationActions';

class TeacherList extends Component {

   deleteTeacher = (id) => {
      this.props.removeTeacher(this.props.teachers, id)
   }

   render() {
     
      const teachers = this.props.teachers.map(teacher => {
         return (
            <tr key={teacher.id}>
               <td>{teacher.firstName}</td>
               <td>{teacher.lastName}</td>
               <td>{teacher.email}</td>
               <td>{teacher.tokens}</td>
               <td>
                  <Button variant="primary" className="mr-2">Edit</Button>
                  <Button 
                     variant="danger" 
                     onClick={ () => this.deleteTeacher(teacher.id) } >Remove
                  </Button>
               </td>
            </tr>
         );
      });

      return (
         <>
            <Modal
               show={ this.props.navigation.isShowTeachersModalOpen }
               onHide={ () => this.props.closeShowTeachersModal() }
               // backdrop="static"
               keyboard={false} 
               size="lg"
            >
               <Modal.Header closeButton>
                  <Modal.Title>List of teachers</Modal.Title>
               </Modal.Header>
               <Card>
               <Modal.Body className="modal-lg">
               <Table striped bordered hover>
                     <thead>
                        <tr>
                           <th>Name</th>
                           <th>Surname</th>
                           <th>Email</th>
                           <th>Tokens</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {teachers}
                     </tbody>
                  </Table>
               </Modal.Body>
               </Card>
               
               <Modal.Footer>
                  <Button variant="secondary" onClick={ () => this.props.closeShowTeachersModal() }>
                     Close Modal
                  </Button>
               </Modal.Footer>
            </Modal>
         </>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      teachers: state.teacher.items,
      navigation: state.navigation
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      getAllTeachers: bindActionCreators(getAllTeachers, dispatch),
      removeTeacher: bindActionCreators(removeTeacher, dispatch),
      closeShowTeachersModal: bindActionCreators(closeShowTeachersModal, dispatch),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherList)
