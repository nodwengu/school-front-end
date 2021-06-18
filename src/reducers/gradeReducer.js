
import { FETCH_GRADES } from '../actions/types';

let initialState = {
   items: []
};

const gradeReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_GRADES:
         return {
            ...state,
            items: action.payload
         }
      default:
         return state;
   }
}

export default gradeReducer