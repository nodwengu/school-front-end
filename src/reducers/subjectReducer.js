import { 
   FETCH_SUBJECTS, 
   ADD_SUBJECT, 
   DELETE_SUBJECT, 
   ADD_SUBJECT_STARTED, 
   ADD_SUBJECT_SUCCESS, 
   ADD_SUBJECT_FAILURE,

   FETCH_SUBJECT_BY_ID,
   UPDATE_SUBJECT

} from '../actions/types'

const initialState = {
   items: [],
   loading: false,
   item: {}
  
};

const subjectReducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_SUBJECTS:
         return {
            ...state, 
            items: action.payload,
            loading: true
         };
      case ADD_SUBJECT:
         return {
            items: action.payload,
         };
      case DELETE_SUBJECT:
         return {
            ...state, 
            items: action.payload
         };

      case ADD_SUBJECT_STARTED:
         return {
            ...state,
            loading: true
         };
      case ADD_SUBJECT_SUCCESS:
         return {
            ...state,
            loading: false,
            error: null,
            items: [...state.items, action.payload]
         };
      case ADD_SUBJECT_FAILURE:
         return {
            ...state,
            loading: false,
            error: action.payload.error
         };
      case FETCH_SUBJECT_BY_ID:
         return {
            ...state,
            item: action.payload
         };
      case UPDATE_SUBJECT:
         return {
            ...state,
            items: action.payload
         };
      default:
         return state;
   }
}

export default subjectReducer