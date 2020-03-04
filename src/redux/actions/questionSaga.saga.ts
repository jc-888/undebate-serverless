/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "campaignsActions.actions.ts"
 * file
 *
 */
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
// import * as queries from '../../graphql/queries';

import {FirebaseFirestore} from '../../firebase';

import {all, takeEvery, put, call} from 'redux-saga/effects';
import {
  QUERY_QUESTION,
  queryQuestionSuccess,
  CREATE_QUESTION,
  createQuestionSuccess,
} from './questionActions.actions';

// const onQueryQuestionRequest = (campaignID: any) => {
//   const request = API.graphql(
//     graphqlOperation(queries.getQuestion, {id: campaignID}),
//   );
//   return request;
// };
const onQueryQuestionRequest = (campaignID: any) => {
  const request = FirebaseFirestore.collection('questions')
    .where('campaignId', '==', campaignID)
    .get();
  return request;
};

/* 
  Saga Worker
*/
export function* queryQuestionAsync({payload}: any) {
  const {campaignID} = payload;

  const result = yield call(onQueryQuestionRequest, campaignID);

  yield console.log('queryQuestionAsync');
  yield console.log(result);

  const questions = yield result.docs.map((doc: {data: () => any}) =>
    doc.data(),
  );

  yield console.log('questions');
  yield console.log(questions);

  yield put(queryQuestionSuccess(questions));
}

const onCreateQuestionRequest = (data: any) => {
  const request = API.graphql(
    graphqlOperation(mutations.createQuestion, {input: data}),
  );
  return request;
};

/* 
  Saga Worker
*/
export function* createQuestionAsync({payload}: any) {
  const {question, campaignID, history} = payload;

  const data = {
    question,
    questionCampaignId: campaignID,
  };

  const result = yield call(onCreateQuestionRequest, data);

  yield console.log('createQuestionAsync');
  yield console.log(result);

  yield put(createQuestionSuccess());

  yield history.push(`/campaign/${result.data.createQuestion.id}`);
}

export default function* rootSaga() {
  yield all([
    takeEvery(CREATE_QUESTION, createQuestionAsync),
    takeEvery(QUERY_QUESTION, queryQuestionAsync),
  ]);
}
