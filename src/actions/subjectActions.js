import axios from 'axios';
import { 
   FETCH_SUBJECTS, 
   ADD_SUBJECT, 
   DELETE_SUBJECT, 
   ADD_SUBJECT_STARTED, 
   ADD_SUBJECT_SUCCESS, 
   ADD_SUBJECT_FAILURE,

   FETCH_SUBJECT_BY_ID,
   UPDATE_SUBJECT,

} from './types';
import { subjects } from './TestData';

export const getAllSubjects = () => async (dispatch) => {
   try {
      const response = await axios.get(`http://localhost:8080/subjects`);
      dispatch({
         type: FETCH_SUBJECTS,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}

// export const addSubject = (subjectsList, newSubject) => async(dispatch, getState) => {
//     try {
//         const list = getState().subject.items;
//         list.push({...newSubject});
//         console.log("SHOWING LIST: ", list);
//         // const response = await axios.post(`http://localhost:8080/subjects`, newSubject);

//         // subjectsList.push({...response.data})

//         // dispatch({
//         //     type: ADD_SUBJECT,
//         //     payload: subjectsList
//         // });

//     } catch (error) {
//         console.log(error);
//     }
// }



export const removeSubject = (items, id) => async (dispatch) => {
   try {
      const newSubjects = items.slice().filter(item => item.id !== id);
      const response = await axios.delete(`http://localhost:8080/subjects/${id}`);

      dispatch({
         type: DELETE_SUBJECT,
         payload: newSubjects
      });
   }
   catch (error) {
      console.log(error);
   }
}

export const addSubject = (newSubject) => async (dispatch, getState) => {
   try {
      dispatch( addSubjectStarted() );
      const response = await axios.post(`http://localhost:8080/subjects`, newSubject);
      dispatch( addSubjectSuccess(response.data) );

   } catch (error) {
      dispatch( addSubjectFailure() );
      console.log(error);
   }
}

const addSubjectSuccess = subject => ({
   type: ADD_SUBJECT_SUCCESS,
   payload: {
      ...subject
   }
});

const addSubjectStarted = () => ({
   type: ADD_SUBJECT_STARTED
});

const addSubjectFailure = error => ({
   type: ADD_SUBJECT_FAILURE,
   payload: {
      error
   }
})


export const getSubjectById = (id) => async(dispatch) => {
   try {
      const response = await axios.get(`http://localhost:8080/subjects/${id}`);

      dispatch({
         type: FETCH_SUBJECT_BY_ID,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}

export const updateSubject = (subject, id) => async(dispatch) => {
   try {
      const response = await axios.put(`http://localhost:8080/subjects/${id}`, subject);

      dispatch({
         type: UPDATE_SUBJECT,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}



