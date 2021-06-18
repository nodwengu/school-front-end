import axios from "axios";
//import { grades } from './TestData'
import { FETCH_GRADES } from './types'

// export const getAllGrades = () => dipatch => {
//    axios.get("http://localhost:8080/grades")
//       .then(response => response.data)
//       .then(grades => {
//          dipatch({
//             type: FETCH_GRADES,
//             payload: grades
//          });
//       });
// }

export const getAllGrades = () => async(dispatch) => {
    const response = await  axios.get("http://localhost:8080/grades")
    const grades = response.data;

    dispatch({
        type: FETCH_GRADES,
        payload: grades
    });
}