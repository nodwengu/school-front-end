import axios from 'axios';
import { FETCH_LESSONS, ADD_LESSON, DELETE_LESSON } from './types';

// import { lessons } from './TestData';

export const getAllLessons = () => async (dispatch) => {
   try {
      const response = await axios.get(`http://localhost:8080/lessons`);

      dispatch({
         type: FETCH_LESSONS,
         payload: response.data
      });

   } catch (error) {
      console.log(error);
   }
   // dispatch({
   //    type: FETCH_LESSONS,
   //    payload: lessons
   // });
}

export const addLesson = (subjectId, gradeId, dayId, newLesson) => async(dispatch) => {
   try {
      const ADD_LESSON_URL = `http://localhost:8080/lessons/subject/${subjectId}/grade/${gradeId}/day/${dayId}/add`;
      const response = await axios.post(ADD_LESSON_URL, newLesson);
     
      dispatch({
         type: ADD_LESSON,
         payload: response.data
      });
      
   } catch (error) {
      console.log(error);
   }
}


export const removeLesson = (items, lessonId) => async(dispatch) => {
   try {
      const lessonsList = items.slice().filter(item => item.id !== lessonId);
      const response = await axios.delete(`http://localhost:8080/lessons/${lessonId}`);

      dispatch({
         type: DELETE_LESSON,
         payload: lessonsList
      })
      
   } catch (error) {
      console.log(error);
   }

}

// @PostMapping("/lessons/subject/{subjectId}/grade/{gradeId}/day/{dayId}/add")
//    public Lesson addLesson(@PathVariable Long subjectId, @PathVariable Long gradeId, @PathVariable Long dayId, @RequestBody Lesson lesson) {
//       return lessonService.addLesson(subjectId, gradeId, dayId, lesson);
//    }
