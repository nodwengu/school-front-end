import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal, Button, Table } from 'react-bootstrap';

import { getAllLessons, removeLesson } from '../actions/lessonActions';
import { closeShowLessonsModal } from '../actions/navigationActions';

let styles = {
   modalWidth: {
      width: "max-content",
      border: "solid red 3px"
   }
}

class LessonList extends Component {

   componentDidMount() {
      this.props.getAllLessons();
   }

   deleteLesson = (id) => {
      this.props.removeLesson(this.props.lessons, id)
   }

   render() {

      const lessons = this.props.lessons.map( lesson => {
         return (
            <tr key={lesson.id}>
               <td>{lesson.lessonName}</td>
               <td>{lesson.subject.subjectName}</td>
               <td>{lesson.grade.gradeName}</td>
               <td>{lesson.day.dayName}</td>
               <td>{lesson.time}</td>
               <td>
                  <Button variant="primary" className="mr-2">Edit</Button>
                  <Button 
                     variant="danger"
                     onClick={ () => this.deleteLesson(lesson.id) }
                  >Remove
                  </Button>
               </td>
            </tr>
         );
      });

      return (
         <>
            <Modal
               show={ this.props.navigation.isShowLessonsModalOpen }
               onHide={ () => this.props.closeShowLessonsModal() }
               // backdrop="static"
               keyboard={false}
               className="Test"
               size="lg"
               // aria-labelledby="contained-modal-title-vcenter"
               //centered
              
            >
               <Modal.Header closeButton>
                  <Modal.Title>List of lessons</Modal.Title>
               </Modal.Header>
               <Modal.Body>
               <Table striped bordered hover>
                     <thead>
                        <tr>
                           <th>Lesson</th>
                           <th>Subject</th>
                           <th>Grade</th>
                           <th>Day</th>
                           <th>Time</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {lessons}
                     </tbody>
                  </Table>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={ () => this.props.closeShowLessonsModal() }>
                     Close Modal
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
      lessons: state.lesson.items,
      navigation: state.navigation
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      getAllLessons: bindActionCreators(getAllLessons, dispatch),
      removeLesson: bindActionCreators(removeLesson, dispatch),
      closeShowLessonsModal: bindActionCreators(closeShowLessonsModal, dispatch)
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonList);

