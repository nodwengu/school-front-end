import axios from 'axios';
import { 
   FETCH_LEARNERS, 
   ADD_LEARNER, 
   DELETE_LEARNER, 
   SELECT_SUBJECT, 
   FETCH_LEARNER_BY_ID, 
   DELETE_LEARNER_SUBJECT,
   FETCH_LEARNER_CLASSMATES 

} from './types'


export const getAllLearners = () => (dispatch) => {
   axios.get(`http://localhost:8080/learners`)
      .then(response => response.data)
      .then(learners => {
         dispatch({
            type: FETCH_LEARNERS,
            payload: learners
         });
      });
}

// export const addLearner = (gradeId, newLearner) => (dispatch) => {
//    console.log("FROM ADD NEW LEARNER ACTION");
//    axios.post(`http://localhost:8080/learners/grade/${gradeId}/add`, newLearner)
//     .then((response) => {
//         console.log("RESPONSE:", response);
//         dispatch({
//             type: ADD_LEARNER,
//             payload: newLearner
//         });
//     });

// dispatch({
//     type: ADD_LEARNER,
//     payload: newLearner
// });

//    console.log("NEW LEARNER: ", newLearner);
// }

export const addLearner = (learnersList, gradeId, newLearner) => async (dispatch) => {
   try {
      let response = await axios.post(`http://localhost:8080/learners/grade/${gradeId}/add`, newLearner)

      dispatch({
         type: ADD_LEARNER,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}

export const removeLearner = (learnersList, learnerId) => async (dispatch) => {
   try {
      const newLearnersList = learnersList.slice().filter( learner => learner.id !== learnerId);
      let response = await axios.delete(`http://localhost:8080/learners/${learnerId}`)

      dispatch({
         type: DELETE_LEARNER,
         payload: newLearnersList
      });

   } catch (error) {
      console.log(error);
   }
}


export const selectSubject = (subjectId, learnerObj) => async(dispatch) => {
   try {
      const response = await axios.put(`http://localhost:8080/learners/subject/${subjectId}/add`, learnerObj);

      dispatch({
         type: SELECT_SUBJECT,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}

export const removeLearnerSubject = (subjectId, learnerObj) => async(dispatch) => {
   try {
      const response = await axios.put(`http://localhost:8080/learners/subject/${subjectId}/remove`, learnerObj);

      dispatch({
         type: DELETE_LEARNER_SUBJECT,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}

export const getLearnerById = (id) => async(dispatch) => {
   try {
      const response = await axios.get(`http://localhost:8080/learners/${id}`);

      dispatch({
         type: FETCH_LEARNER_BY_ID,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}


export const getClassmates = (id) => async(dispatch) => {
   try {
      const response = await axios.get(`http://localhost:8080/learners/${id}/classmates`);

      dispatch({
         type: FETCH_LEARNER_CLASSMATES,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}