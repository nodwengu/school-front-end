import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

// import mathReducer from './reducers/mathReducer';
// import userReducer from './reducers/userReducer';

const initialState = {}

const store = createStore( 
    rootReducer, 
    initialState,
    applyMiddleware(logger, thunk) 
);

export default store;