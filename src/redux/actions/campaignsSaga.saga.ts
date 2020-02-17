/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "campaignsActions.actions.ts"
 * file
 *
 */
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

import {all, takeEvery, put, call} from 'redux-saga/effects';
import {
  LIST_CAMPAIGNS,
  listCampaignsSuccess,
  CREATE_CAMPAIGN,
  createCampaignSuccess,
} from './campaignsActions.actions';

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

const onCreateCampaignRequest = (data: any) => {
  const request = API.graphql(
    graphqlOperation(mutations.createCampaign, {input: data}),
  );
  return request;
};

/* 
  Saga Worker
*/
export function* createCampaignAsync({payload}: any) {
  const {name, history} = payload;

  const data = {
    name,
  };

  const result = yield call(onCreateCampaignRequest, data);

  yield put(createCampaignSuccess());

  yield history.push(`/campaign/${result.data.createCampaign.id}`);
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([
    takeEvery(CREATE_CAMPAIGN, createCampaignAsync),
    takeEvery(LIST_CAMPAIGNS, listCampaignsAsync),
  ]);
}
