/*
 *
 * this is the file that handles all all the sagas
 *
 */
import {all} from 'redux-saga/effects';
import campaignsSaga from './actions/campaignsSaga.saga';
import campaignSaga from './actions/campaignSaga.saga';
import questionsSaga from './actions/questionsSaga.saga';
import questionSaga from './actions/questionSaga.saga';

export default function* rootSaga() {
  yield all([campaignsSaga(), campaignSaga(), questionsSaga(), questionSaga()]);
}
