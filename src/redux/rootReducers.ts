/*
 *
 * this is the file that handles all all the reducers by combining them
 * into one and where you can set the keys for redux
 *
 */
import {combineReducers} from 'redux';

import authReducers from './reducers/authReducers.reducers';
import campaignsReducer from './reducers/campaignsReducers.reducers';
import campaignReducer from './reducers/campaignReducers.reducers';

export const rootReducer = combineReducers({
  Auth: authReducers,
  Campaigns: campaignsReducer,
  Campaign: campaignReducer,
});
