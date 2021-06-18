import axios from 'axios';
import { FETCH_DAYS } from './types';

//import { days } from './TestData';

export const getAllDays = () => async(dispatch) => {
    try {
        const response = await axios.get(`http://localhost:8080/days`);
        dispatch({
            type: FETCH_DAYS,
            payload: response.data
        })
        
    } catch (error) {
        console.log(error);
    }
}