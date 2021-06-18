import { FETCH_LEARNERS, ADD_LEARNER, DELETE_LEARNER, SELECT_SUBJECT, FETCH_LEARNER_BY_ID, DELETE_LEARNER_SUBJECT, FETCH_LEARNER_CLASSMATES } from '../actions/types';

let initialState = {
    items: [],
    // item: {},
    classmates: [],
    loading: false
};

const learnerReducer =  (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEARNERS:
            return {
                ...state, 
                items: action.payload,
                loading: true, 
            };
        case ADD_LEARNER:
            return {
                ...state, 
                items: [...state.items, action.payload]
            };
        case DELETE_LEARNER:
            return {
                ...state, 
                items: action.payload
            };
        case SELECT_SUBJECT:
            return {
                ...state, 
                item: action.payload,
                items: [...state.items, action.payload]
            };
        case DELETE_LEARNER_SUBJECT:
            return {
                ...state, 
                item: action.payload
            };
        case FETCH_LEARNER_BY_ID:
            return {
                ...state,
                item: action.payload
            };
        case FETCH_LEARNER_CLASSMATES:
            return {
                ...state,
                classmates: action.payload
            };
        default:
            return state;
    }
}

export default learnerReducer