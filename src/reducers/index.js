import grade from './gradeReducer';
import learner from './learnerReducer';
import subject from './subjectReducer';
import lesson from './lessonReducer';
import teacher from './teacherReducer';
import days from './dayReducer';
import navigation from './navigationReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    grade,
    learner,
    subject,
    lesson,
    teacher,
    days,
    navigation
});

export default rootReducer;
