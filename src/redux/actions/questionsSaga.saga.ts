/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "questionActions.actions.ts"
 * file
 *
 */
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../graphql/queries';

import {all, takeEvery, put, call} from 'redux-saga/effects';
import {LIST_QUESTIONS, listQuestionsSuccess} from './questionsActions.actions';

const onListQuestionsRequest = () => {
  const request = API.graphql(graphqlOperation(queries.listQuestions));
  return request;
};

/* 
    Saga Worker
  */
export function* listQuestionsAsync() {
  const result = yield call(onListQuestionsRequest);

  yield put(listQuestionsSuccess(result.data.listQuestions.items));
}

export default function* rootSaga() {
  yield all([takeEvery(LIST_QUESTIONS, listQuestionsAsync)]);
}
