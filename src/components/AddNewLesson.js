import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllGrades } from '../actions/gradeActions';
import { getAllSubjects } from '../actions/subjectActions';
import { getAllLessons, addLesson } from '../actions/lessonActions'
import { getAllDays } from '../actions/dayActions';
import { closeAddLessonModal } from '../actions/navigationActions';

import { Button, Modal, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

class AddNewLesson extends Component {
   state = {
      show: false,
      newLessonData: {
         lessonName: '',
         time: '',
         subject: {
            id: 0,
            subjectName: ''
         },
         grade: {
            id: 0,
            gradeName: ''
         },
         day: {
            id: 0,
            dayName: ''
         }
      },

    }

   onChangeLessonName = (evt) => {
      const { newLessonData } = this.state;
      newLessonData.lessonName = evt.target.value;
      this.setState({ newLessonData });
   }

   onChangeTime = (evt) => {
      const { newLessonData } = this.state;
      newLessonData.time = evt.target.value;
      this.setState({ newLessonData });
   }

   onChangeSubject = (evt) => {
      const { newLessonData } = this.state;
      let index = evt.target.selectedIndex;
      let dataset = evt.target.options[index].dataset;
      newLessonData.subject.id = dataset.idx;
      this.setState({ newLessonData });
   }

   onChangeGrade = (evt) => {
      const { newLessonData } = this.state;
      let index = evt.target.selectedIndex;
      let dataset = evt.target.options[index].dataset;
      newLessonData.grade.id = dataset.idx;
      this.setState({ newLessonData });
   }

   onChangeDay = (evt) => {
      const { newLessonData } = this.state;
      let index = evt.target.selectedIndex;
      let dataset = evt.target.options[index].dataset;
      newLessonData.day.id = dataset.idx;
      this.setState({ newLessonData });
   }

   handleAddLesson = (evt) => {
      evt.preventDefault();
      const subjectId = this.state.newLessonData.subject.id;
      const gradeId = this.state.newLessonData.grade.id;
      const dayId = this.state.newLessonData.day.id;

      this.props.addLesson(subjectId, gradeId, dayId, this.state.newLessonData);
   }
   

   render() {
      const { closeAddLessonModal, showAddLessonModal} = this.props;

      const subjectList = this.props.subjects.map( subject => 
         <option key={subject.id} data-idx={subject.id}>{subject.subjectName}</option> );

      const gradeList = this.props.grades.map( grade => 
         <option key={grade.id} data-idx={grade.id}>{grade.gradeName}</option> )

      const dayList = this.props.days.map( day => 
         <option key={day.id} data-idx={day.id}>{day.dayName}</option> );

      return (

         <>
            <Modal
               show={ this.props.navigation.isAddLessonModalOpen }
               onHide={ () => this.props.closeAddLessonModal() }
               backdrop="static"
               keyboard={false}
            >
               <Modal.Header closeButton>
                  <Modal.Title>Add Lessons</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form>
                     <Col xs={8} className="mt-4">
                        <Form.Group controlId="subjectSelect">
                           <Form.Label>Subject</Form.Label>
                           <Form.Control
                              as="select"
                              custom
                              // value={this.state.newLessonData.subject.id}
                              onChange={this.onChangeSubject}
                           >
                              <option>select subject</option>
                              { subjectList }
                           </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="gradeSelect">
                           <Form.Label>Grade</Form.Label>
                           <Form.Control
                              as="select"
                              custom
                              // value={this.state.newLessonData.grade.id}
                              onChange={this.onChangeGrade}
                           >
                              <option>select grade</option>

                              {gradeList}
                           </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="daySelect">
                           <Form.Label>Day</Form.Label>
                           <Form.Control
                              as="select"
                              custom
                              // value={this.state.newLessonData.day.id}
                              onChange={this.onChangeDay}
                           >
                              <option>select day</option>

                              {dayList}
                           </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="firstName">
                           <Form.Label>Lesson</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newLessonData.lessonName}
                              onChange={this.onChangeLessonName}
                           />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                           <Form.Label>Time</Form.Label>
                           <Form.Control
                              type="text"
                              value={this.state.newLessonData.time}
                              onChange={this.onChangeTime}
                           />
                        </Form.Group>

                     </Col>
                  </Form>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={ () => this.props.closeAddLessonModal() }>
                     Close
                  </Button>
                  <Button
                     variant="primary"
                     onClick={this.handleAddLesson}
                  > Save Lesson
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
      subjects: state.subject.items,
      lessons: state.lesson.items,
      days: state.days,
      navigation: state.navigation
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      getAllGrades: bindActionCreators(getAllGrades, dispatch),
      getAllSubjects: bindActionCreators(getAllSubjects, dispatch),
      getAllLessons: bindActionCreators(getAllLessons,dispatch),
      getAllDays: bindActionCreators(getAllDays, dispatch),

      addLesson: bindActionCreators(addLesson, dispatch),
      closeAddLessonModal: bindActionCreators(closeAddLessonModal, dispatch),
 
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewLesson);
