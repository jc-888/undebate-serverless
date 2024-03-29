/*
 *
 * this is the file that handles all all the reducers by combining them
 * into one and where you can set the keys for redux
 *
 */
import {combineReducers} from 'redux';

import authReducers from './reducers/authReducers.reducers';

export const rootReducer = combineReducers({
  Auth: authReducers,
});
