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

import ChooseSubjectModal from './ChooseSubjectModal';
import LearnerSubjectsModal from './LearnerSubjectsModal';
import LearnerClassmates from './LearnerClassmates'

import { Nav, Form, Row, Col } from 'react-bootstrap';

import { getAllGrades} from '../actions/gradeActions';
import { 
   openShowSubjectsModal, 
   openAddSubjectModal, 
   openAddLearnerModal, 
   openAddTeacherModal,
   openAddLessonModal,
   openShowTeachersModal,
   openShowLessonsModal,

   openShowSelectSubjectModal,
   openLearnerSubjectsModal,
   openClassmatesModal

} from '../actions/navigationActions';

class LearnerNavigation extends Component {

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
            
            <LearnerSubjectsModal />
            <ChooseSubjectModal />
            <LearnerClassmates />

            <Row className="mb-4 mt-5">
               <Col xs={12} md={3}>
                  <Nav variant="pills" defaultActiveKey="#first">
                     <Nav.Item onClick={ () => this.props.openShowSelectSubjectModal() }>
                        <Nav.Link href="#first">Choose Subject</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
               <Col xs={12} md={3}>
                  <Nav variant="pills" defaultActiveKey="#first">
                     <Nav.Item onClick={ () => this.props.openLearnerSubjectsModal() }>
                        <Nav.Link href="#first">My subjects</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
               <Col xs={12} md={2}>
                  <Nav variant="pills" defaultActiveKey="#first">
                     <Nav.Item onClick={ () => this.props.openAddLessonModal() }>
                        <Nav.Link href="#first">My Notes</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>
               <Col xs={12} md={2}>
                  <Nav variant="pills" defaultActiveKey="#first">
                     <Nav.Item onClick={ () => this.props.openClassmatesModal() }>
                        <Nav.Link href="#first">Classmates</Nav.Link>
                     </Nav.Item>
                  </Nav>
               </Col>

               <Col xs={12} md={2}>
               <Nav variant="pills" defaultActiveKey="#first">
                     <Nav.Item onClick={ () => this.props.openClassmatesModal() }>
                     <div class="mb-3 ml-3 d-flex ml-auto">
                                    <div class="input-group">
                                       <div class="input-group-prepend ">
                                          <span class="input-group-text" id="inputGroup-sizing-sm">Tokens: 134</span>
                                       </div>
                                       <a href="/learner/{{learner.id}}/day/{{dayId}}/cafeteria" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">View Cafeteria</a>
                                    </div>
                                 </div>
                     </Nav.Item>
                  </Nav>
                 
                                 <div class="mb-3 ml-3 d-flex ml-auto">
                                    <div class="input-group">
                                       <div class="input-group-prepend ">
                                          <span class="input-group-text" id="inputGroup-sizing-sm">Tokens: 134</span>
                                       </div>
                                       <a href="/learner/{{learner.id}}/day/{{dayId}}/cafeteria" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">View Cafeteria</a>
                                    </div>
                                 </div>
                                 </Col>

               {/* <Col md={1} >

               </Col> */}

              
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
      
      openLearnerSubjectsModal: bindActionCreators(openLearnerSubjectsModal, dispatch),
      openShowSelectSubjectModal: bindActionCreators(openShowSelectSubjectModal, dispatch),
      openClassmatesModal: bindActionCreators(openClassmatesModal, dispatch)

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnerNavigation);
