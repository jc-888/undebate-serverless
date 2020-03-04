/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "questionActions.actions.ts"
 * file
 *
 */
// import {API, graphqlOperation} from 'aws-amplify';
// import * as queries from '../../graphql/queries';

import {FirebaseFirestore} from '../../firebase';

import {all, takeEvery, put, call} from 'redux-saga/effects';
import {LIST_QUESTIONS, listQuestionsSuccess} from './questionsActions.actions';

// const onListQuestionsRequest = () => {
//   const request = API.graphql(graphqlOperation(queries.listQuestions));
//   return request;
// };

const onListQuestionsRequest = (campaignID: any) => {
  const request = FirebaseFirestore.collection('questions')
    .where('campaignId', '==', campaignID)
    .get();
  return request;
};

/* 
    Saga Worker
  */
export function* listQuestionsAsync({payload}: any) {
  const {campaignID} = payload;

  yield console.log('onListQuestionsRequest');

  const result = yield call(onListQuestionsRequest, campaignID);

  yield console.log('listQuestionsAsync');
  yield console.log(result);

  yield put(listQuestionsSuccess(result.data.listQuestions.items));
}

export default function* rootSaga() {
  yield all([takeEvery(LIST_QUESTIONS, listQuestionsAsync)]);
}
