/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "campaignsActions.actions.ts"
 * file
 *
 */
import {API, graphqlOperation} from 'aws-amplify';
import * as queries from '../../graphql/queries';

import {all, takeEvery, put, call} from 'redux-saga/effects';
import {LIST_CAMPAIGNS, listCampaignsSuccess} from './campaignsActions.actions';

const onListCampaignsRequest = () => {
  const request = API.graphql(graphqlOperation(queries.listCampaigns));
  return request;
};

/* 
    Saga Worker
  */
export function* listCampaignsAsync() {
  const result = yield call(onListCampaignsRequest);

  yield console.log(result.data.listCampaigns.items);

  yield put(listCampaignsSuccess(result.data.listCampaigns.items));
}

export default function* rootSaga() {
  yield all([takeEvery(LIST_CAMPAIGNS, listCampaignsAsync)]);
}
