import axios from 'axios';
import { FETCH_TEACHERS, ADD_TEACHER, DELETE_TEACHER } from './types';

export const getAllTeachers = () => async (dispatch) => {
   try {
      const response = await axios.get(`http://localhost:8080/teachers`);

      dispatch({
         type: FETCH_TEACHERS,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}

export const addTeacher = (newTeacher) => async (dispatch) => {
   try {
      const response = await axios.post(`http://localhost:8080/teachers`, newTeacher)

      dispatch({
         type: ADD_TEACHER,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
}

export const removeTeacher = (teachersList, teacherId) => async(dispatch) => {
   try {
      const newTeachersList = teachersList.slice().filter(teacher => teacher.id !== teacherId);
      const response = await axios.delete(`http://localhost:8080/teachers/${teacherId}`)

      dispatch({
         type: DELETE_TEACHER,
         payload: newTeachersList
      });

   } catch (error) {
      console.log(error);
   }
}