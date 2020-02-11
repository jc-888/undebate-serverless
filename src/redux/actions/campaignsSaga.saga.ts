/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "campaignsActions.actions.ts"
 * file
 *
 */
import {API, graphqlOperation} from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

import {all, takeEvery, put, call} from 'redux-saga/effects';
import {
  CREATE_CAMPAIGN,
  createCampaignSuccess,
} from './campaignsActions.actions';

const onCampaignRequest = (data: any) => {
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

  console.log('making api call!');

  const result = yield call(onCampaignRequest, data);

  yield console.log('working!');

  yield console.log(result.data.createCampaign.id);

  yield put(createCampaignSuccess());

  yield history.push(`/campaign/${result.data.createCampaign.id}`);
}

/* 
  Saga Watcher
*/
export default function* rootSaga() {
  yield all([takeEvery(CREATE_CAMPAIGN, createCampaignAsync)]);
}
