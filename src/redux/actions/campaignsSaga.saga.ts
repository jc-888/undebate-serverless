/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "campaignsActions.actions.ts"
 * file
 *
 */
// import {API, graphqlOperation} from 'aws-amplify';
// import * as queries from '../../graphql/queries';

import {FirebaseFirestore} from '../../firebase';

import {all, takeEvery, put, call} from 'redux-saga/effects';
import {LIST_CAMPAIGNS, listCampaignsSuccess} from './campaignsActions.actions';

// const onListCampaignsRequest = () => {
//   const request = API.graphql(graphqlOperation(queries.listCampaigns));
//   return request;
// };

const onListCampaignsRequest = () => {
  const request = FirebaseFirestore.collection('campaigns').get();
  return request;
};

/* 
  Saga Worker
*/
export function* listCampaignsAsync() {
  const result = yield call(onListCampaignsRequest);

  const campaigns = yield result.docs.map((doc: {data: () => any}) =>
    doc.data(),
  );

  yield console.log(campaigns);

  yield put(listCampaignsSuccess(campaigns));
}

export default function* rootSaga() {
  yield all([takeEvery(LIST_CAMPAIGNS, listCampaignsAsync)]);
}
