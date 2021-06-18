import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AddNewLesson from './AddNewLesson';
import AddNewLearner from './AddNewLearner';
import AddNewSubject from './AddNewSubject';
import AddNewTeacher from './AddNewTeacher';
import SubjectList from './SubjectList';
import LessonList from './LessonList';
import TeacherList from './TeacherList';

import { Nav, Form, Row, Col } from 'react-bootstrap';

import { getAllGrades} from '../actions/gradeActions';
import { 
   openShowSubjectsModal, 
   openAddSubjectModal, 
   openAddLearnerModal, 
   openAddTeacherModal,
   openAddLessonModal,
   openShowTeachersModal,
   openShowLessonsModal

} from '../actions/navigationActions';

class Navigation extends Component {

   componentDidMount() {
      this.props.getAllGrades();
   }

   render() {

      const gradeOptions = this.props.grades.map( grade => {
         return (
            <option>{ grade.gradeName }</option>
         );
      });

      return (
         <>
            <AddNewLesson /> 
            <LessonList />
            <AddNewLearner /> 
            <SubjectList />
            <AddNewSubject />
            <TeacherList />
            <AddNewTeacher />

            <Row>
               <Col xs={12} md={2}>
                  <Form.Group controlId="gradeSelect">
                     <Form.Control
                        as="select"
                        custom
                        onChange={this.onChangeGrade}
                     >
                        <option>select grade</option>
                        {gradeOptions}
                     </Form.Control>
                  </Form.Group>
               </Col>

            </Row>
            <Row>
               <Col xs="auto">
                  <Nav variant="pills" defaultActiveKey="#first" className="mt-4">
                     <Nav.Item onClick={ () => this.props.openAddLearnerModal() }>
                        <Nav.Link href="#first">Add Learner</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
               <Col xs="auto">
                  <Nav variant="pills" defaultActiveKey="#first" className="mt-4">
                     <Nav.Item onClick={ () => this.props.openAddTeacherModal() }>
                        <Nav.Link href="#first">Add Teacher</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
               <Col xs="auto">
                  <Nav variant="pills" defaultActiveKey="#first" className="mt-4">
                     <Nav.Item onClick={ () => this.props.openAddLessonModal() }>
                        <Nav.Link href="#first">Add Lesson</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
               <Col xs="auto">
                  <Nav variant="pills" defaultActiveKey="#first" className="mt-4">
                     <Nav.Item onClick={ () => this.props.openAddSubjectModal() }>
                        <Nav.Link href="#first">Add Subject</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>

               <Col md={1} >

               </Col>

               <Col xs="auto">
                  <Nav variant="pills" defaultActiveKey="#first" className="mt-4">
                     <Nav.Item onClick={ () => this.props.openShowTeachersModal() }>
                        <Nav.Link href="#first">Teachers</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
               <Col xs="auto">
                  <Nav variant="pills" defaultActiveKey="#first" className="mt-4">
                     <Nav.Item onClick={ () => this.props.openShowLessonsModal() }>
                        <Nav.Link href="#first">Lessons</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
               <Col xs="auto">
                  <Nav variant="pills" defaultActiveKey="#first" className="mt-4">
                     <Nav.Item onClick={ () => this.props.openShowSubjectsModal() }>
                        <Nav.Link href="#first">Subjects</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
            </Row>
         </>
      );
   }
}

// Which properties I need in which component
const mapStateToProps = (state) => {
   return {
      grades: state.grade.items
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      getAllGrades: bindActionCreators(getAllGrades, dispatch),
      openShowSubjectsModal: bindActionCreators(openShowSubjectsModal, dispatch),
      openAddSubjectModal: bindActionCreators(openAddSubjectModal, dispatch),
      openAddLearnerModal: bindActionCreators(openAddLearnerModal, dispatch),
      openAddTeacherModal: bindActionCreators(openAddTeacherModal, dispatch),
      openAddLessonModal: bindActionCreators(openAddLessonModal, dispatch),
      openShowLessonsModal: bindActionCreators(openShowLessonsModal, dispatch),
      openShowTeachersModal: bindActionCreators(openShowTeachersModal, dispatch),

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
