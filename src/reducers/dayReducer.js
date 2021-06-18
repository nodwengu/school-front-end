import { FETCH_DAYS } from '../actions/types';

let initialState = [];

const dayReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_DAYS:
            return [...state, ...action.payload];
        default:
            return state;
    }
}

export default dayReducer;