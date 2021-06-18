import { FETCH_LESSONS, ADD_LESSON, DELETE_LESSON } from '../actions/types'

let initialState = {
   items: [],
   loading: false
};

const lessonReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_LESSONS:
         return {
            ...state, 
            items: action.payload,
            loading: true
         }
      case ADD_LESSON:
         return {
            ...state, 
            items: [...state.items, action.payload]
         }
      case DELETE_LESSON:
         return {
            ...state, 
            items: action.payload
         }
      default:
         return state;
   }
}

export default lessonReducer;