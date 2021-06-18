import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllSubjects } from '../actions/subjectActions';
import { selectSubject, getLearnerById } from '../actions/learnerActions';
import { closeShowSelectSubjectModal } from '../actions/navigationActions';

import { Button, Modal, Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router';

let styles = {
   selectSubjectCard: {
      // width: '400px',
      padding: '10px',
      boxShadow: '1px 3px 1px #9E9E9E'
   }
}

class ChooseSubjectModal extends Component {
   state = {
      selectedList: [],
      checkedList: [],
      isChecked: false,
   }

   componentDidMount() {
      let location = window.location;
      let vars = location.pathname.split("/");
      let learnerId = vars[2];

      this.props.getAllSubjects();
      this.props.getLearnerById(learnerId);
     
   }

   onChangeSubjectName = (evt, id) => { 
      let resultArray = []

      if(evt.target.checked) {
         resultArray = this.state.checkedList.filter(checkedId => checkedId !== id);
         resultArray.push(id);

      } else { // If not checked (false), then remove this id from checkedLis
         resultArray = this.state.checkedList.filter(checkedId => checkedId !== id);
      }

      this.setState({
         checkedList: resultArray
      });
      //console.log("id: this.props.match.params.id", this.props.match.params.id);
   }


   chooseSubject = (evt) => {
      evt.preventDefault();

      // LOOP THROUGH LIST OF SUBJECT IDs 
      for (let i = 0; i < this.state.checkedList.length; i++) {
         // GET LEARNER BY ID FROM PARAMS
         console.log("this.state.checkedList[i]: ", this.state.checkedList[i]);
         this.props.selectSubject(this.state.checkedList[i], this.props.learner);
      }

   }

   render() {
      const subjectList = this.props.subjects.map(subject => {
         return (
            <div class="form-check mt-2" key={subject.id} data-idx={subject.id}>
               <input 
                  id={subject.id}
                  value={subject.subjectName} 
                  name={subject.subjectName} 
                  class="form-check-input" 
                  type="checkbox" 
                  onChange={ (evt) => this.onChangeSubjectName(evt, subject.id) } />
               <label class="form-check-label" for="defaultCheck1">{subject.subjectName}</label>
            </div>
         );
      });

      return (
         <>
            <Modal
               show={this.props.navigation.isShowSelectSubjectModalOpen}
               onHide={() => this.props.closeShowSelectSubjectModal()}
               // backdrop="static"
               keyboard={false}
            >
               <Modal.Header closeButton>
                  <Modal.Title>Select Subject</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <form action="/learner/{{learner.id}}/day/{{dayId}}/lessons" method="post">
                     <div class="modal-body">
                        <div class="card rounded" style={styles.selectSubjectCard}>

                           {subjectList}

                        </div>
                     </div>
                     <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary" onClick={ this.chooseSubject}>Save Subjects</button>
                     </div>
                  </form>
               </Modal.Body>

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
      navigation: state.navigation,
      subjects: state.subject.items,
      learner: state.learner.item
   }
}

// and which Actions I want to dispatch there 
const mapDispatchToProps = (dispatch) => {
   return {
      closeShowSelectSubjectModal: bindActionCreators(closeShowSelectSubjectModal, dispatch),
      getAllSubjects: bindActionCreators(getAllSubjects, dispatch),
      selectSubject: bindActionCreators(selectSubject, dispatch),
      getLearnerById: bindActionCreators(getLearnerById, dispatch),

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseSubjectModal);
