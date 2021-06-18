import { FETCH_TEACHERS, ADD_TEACHER, DELETE_TEACHER } from '../actions/types';

let initialState = {
    items: [],
    loading: false
};

const teacherReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TEACHERS:
            return {
                ...state, 
                items: action.payload,
                loading: true
            }
        case ADD_TEACHER:
            return {
                ...state,
                items: [ ...state.items, action.payload ]
            }
        case DELETE_TEACHER:
            return {
                ...state, 
                items: action.payload
            };
        default:
            return state;
    }
}

export default teacherReducer;