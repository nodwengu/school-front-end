import { 
    OPEN_UPDATE_SUBJECT_MODAL, 
    CLOSE_UPDATE_SUBJECT_MODAL, 
    OPEN_SHOW_SUBJECTS_MODAL, 
    CLOSE_SHOW_SUBJECTS_MODAL ,
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
    CLOSE_CLASSMATES_MODAL,


} from '../actions/types';

let initialState = {
    isUpdateSubjectModalOpen: false,
    isShowSubjectsModalOpen: false,
    isAddSubjectModalOpen: false,
    isAddLearnerModalOpen: false,
    isAddTeacherModalOpen: false,
    isAddLessonModalOpen: false,
    isShowLessonsModalOpen: false,
    isShowTeachersModalOpen: false,
    isShowSelectSubjectModalOpen: false,
    isLearnerSubjectsModalOpen: false,
    isLearnerClassmatesModalOpen: false
}

const navigationReducer = (state = initialState, action) => {
    switch(action.type){
        case OPEN_UPDATE_SUBJECT_MODAL:
            return {
                isUpdateSubjectModalOpen: true
            };
        case CLOSE_UPDATE_SUBJECT_MODAL:
            return {
                isUpdateSubjectModalOpen: false
            };
        case OPEN_SHOW_SUBJECTS_MODAL:
            return {
                isShowSubjectsModalOpen: true
            };
        case CLOSE_SHOW_SUBJECTS_MODAL:
            return {
                isShowSubjectsModalOpen: false
            };
        case OPEN_ADD_SUBJECTS_MODAL:
            return { 
                isAddSubjectModalOpen : true
            };
        case CLOSE_ADD_SUBJECT_MODAL:
            return {
                isAddSubjectModalOpen: false
            };
        case OPEN_ADD_LEARNER_MODAL:
            return { 
                isAddLearnerModalOpen : true
            };
        case CLOSE_ADD_LEARNER_MODAL:
            return {
                isAddLearnerModalOpen: false
            };
        case OPEN_ADD_TEACHER_MODAL:
            return { 
                isAddTeacherModalOpen : true
            };
        case CLOSE_ADD_TEACHER_MODAL:
            return {
                isAddTeacherModalOpen: false
            };
        case OPEN_ADD_LESSON_MODAL:
            return { 
                isAddLessonModalOpen : true
            };
        case CLOSE_ADD_LESSON_MODAL:
            return {
                isAddLessonModalOpen: false
            };
        case OPEN_SHOW_TEACHERS_MODAL:
            return { 
                isShowTeachersModalOpen : true
            };
        case CLOSE_SHOW_TEACHERS_MODAL:
            return {
                isShowTeachersModalOpen: false
            };
        case OPEN_SHOW_LESSONS_MODAL:
            return { 
                isShowLessonsModalOpen : true
            };
        case CLOSE_SHOW_LESSONS_MODAL:
            return {
                isShowLessonsModalOpen: false
            };
        case OPEN_SELECT_SUBJECT_MODAL:
            return { 
                isShowSelectSubjectModalOpen : true
            };
        case CLOSE_SELECT_SUBJECT_MODAL:
            return {
                isShowSelectSubjectModalOpen: false
            };
        case OPEN_LEARNER_SUBJECTS_MODAL:
            return { 
                isLearnerSubjectsModalOpen : true
            };
        case CLOSE_LEARNER_SUBJECTS_MODAL:
            return {
                isLearnerSubjectsModalOpen: false
            };
        case OPEN_CLASSMATES_MODAL:
            return { 
                isLearnerClassmatesModalOpen : true
            };
        case CLOSE_CLASSMATES_MODAL:
            return {
                isLearnerClassmatesModalOpen: false
            };
        default:
            return state
    }
}

export default navigationReducer;