import {
   OPEN_UPDATE_SUBJECT_MODAL,
   CLOSE_UPDATE_SUBJECT_MODAL,
   OPEN_SHOW_SUBJECTS_MODAL,
   CLOSE_SHOW_SUBJECTS_MODAL,
   OPEN_ADD_SUBJECTS_MODAL,
   CLOSE_ADD_SUBJECT_MODAL,
   OPEN_ADD_LEARNER_MODAL,
   CLOSE_ADD_LEARNER_MODAL,
   OPEN_ADD_TEACHER_MODAL,
   CLOSE_ADD_TEACHER_MODAL,
   OPEN_ADD_LESSON_MODAL,
   CLOSE_ADD_LESSON_MODAL,
   OPEN_SHOW_TEACHERS_MODAL,
   CLOSE_SHOW_TEACHERS_MODAL,
   OPEN_SHOW_LESSONS_MODAL,
   CLOSE_SHOW_LESSONS_MODAL,


   OPEN_SELECT_SUBJECT_MODAL,
   CLOSE_SELECT_SUBJECT_MODAL,
   OPEN_LEARNER_SUBJECTS_MODAL,
   CLOSE_LEARNER_SUBJECTS_MODAL,
   OPEN_CLASSMATES_MODAL,
   CLOSE_CLASSMATES_MODAL

} from './types';

export const openUpdateSubjectModal = () => (dispatch) => {
   dispatch({
      type: OPEN_UPDATE_SUBJECT_MODAL,
      payload: true
   });
}

export const closeUpdateSubjectModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_UPDATE_SUBJECT_MODAL,
      payload: false
   });
}

export const openShowSubjectsModal = () => (dispatch) => {
   dispatch({
      type: OPEN_SHOW_SUBJECTS_MODAL,
      payload: true
   });
}

export const closeShowSubjectsModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_SHOW_SUBJECTS_MODAL,
      payload: false
   });
}

export const openAddSubjectModal = () => (dispatch) => {
   dispatch({
      type: OPEN_ADD_SUBJECTS_MODAL,
      payload: true
   });
}

export const closeAddSubjectModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_ADD_SUBJECT_MODAL,
      payload: false
   });
}

export const openAddLearnerModal = () => (dispatch) => {
   dispatch({
      type: OPEN_ADD_LEARNER_MODAL,
      payload: true
   });
}

export const closeAddLearnerModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_ADD_LEARNER_MODAL,
      payload: false
   });
}

export const openAddTeacherModal = () => (dispatch) => {
   dispatch({
      type: OPEN_ADD_TEACHER_MODAL,
      payload: true
   });
}

export const closeAddTeacherModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_ADD_TEACHER_MODAL,
      payload: false
   });
}

export const openAddLessonModal = () => (dispatch) => {
   dispatch({
      type: OPEN_ADD_LESSON_MODAL,
      payload: true
   });
}

export const closeAddLessonModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_ADD_LESSON_MODAL,
      payload: false
   });
}

export const openShowLessonsModal = () => (dispatch) => {
   dispatch({
      type: OPEN_SHOW_LESSONS_MODAL,
      payload: true
   });
}

export const closeShowLessonsModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_SHOW_LESSONS_MODAL,
      payload: false
   });
}

export const openShowTeachersModal = () => (dispatch) => {
   dispatch({
      type: OPEN_SHOW_TEACHERS_MODAL,
      payload: true
   });
}

export const closeShowTeachersModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_SHOW_TEACHERS_MODAL,
      payload: false
   });
}



export const openShowSelectSubjectModal = () => (dispatch) => {
   dispatch({
      type: OPEN_SELECT_SUBJECT_MODAL,
      payload: true
   });
}

export const closeShowSelectSubjectModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_SELECT_SUBJECT_MODAL,
      payload: false
   });
}

export const openLearnerSubjectsModal = () => (dispatch) => {
   dispatch({
      type: OPEN_LEARNER_SUBJECTS_MODAL,
      payload: true
   });
}

export const closeLearnerSubjectsModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_LEARNER_SUBJECTS_MODAL,
      payload: false
   });
}

export const openClassmatesModal = () => (dispatch) => {
   dispatch({
      type: OPEN_CLASSMATES_MODAL,
      payload: true
   });
}

export const closeClassmatesModal = () => (dispatch) => {
   dispatch({
      type: CLOSE_CLASSMATES_MODAL,
      payload: false
   });
}