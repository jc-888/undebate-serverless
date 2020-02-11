/*
 *
 * this is the file that handles all all the sagas
 *
 */
import {all} from 'redux-saga/effects';
import campaignsSaga from './actions/campaignsSaga.saga';

export default function* rootSaga() {
  yield all([campaignsSaga()]);
}
