/*
 *
 * this is the saga file that handles the external api requests
 * in referece to the logic based in the "campaignsActions.actions.ts"
 * file
 *
 */
// import {API, graphqlOperation} from 'aws-amplify';
// import * as mutations from '../../graphql/mutations';
// import * as queries from '../../graphql/queries';

import {FirebaseFirestore} from '../../firebase';

import {v4 as uuidv4} from 'uuid';

import {all, takeEvery, put, call} from 'redux-saga/effects';
import {
  QUERY_CAMPAIGN,
  queryCampaignSuccess,
  CREATE_CAMPAIGN,
  createCampaignSuccess,
} from './campaignActions.actions';

// const onQueryCampaignRequest = (campaignID: any) => {
//   const request = API.graphql(
//     graphqlOperation(queries.getCampaign, {id: campaignID}),
//   );
//   return request;
// };

const onQueryCampaignRequest = (campaignID: any) => {
  const request = FirebaseFirestore.collection('campaigns').doc(campaignID);
  return request;
};

/* 
  Saga Worker
*/
export function* queryCampaignAsync({payload}: any) {
  const {campaignID} = payload;

  const result = yield call(onQueryCampaignRequest, campaignID);

  yield put(queryCampaignSuccess(result.data.getCampaign));
}

// const onCreateCampaignRequest = (data: any) => {
//   const request = API.graphql(
//     graphqlOperation(mutations.createCampaign, {input: data}),
//   );
//   return request;
// };

const onCreateCampaignRequest = (data: any) => {
  console.log('onCreateCampaignRequest: ', data);
  const request = FirebaseFirestore.collection('campaigns').add(data);
  return request;
};

/* 
  Saga Worker
*/
export function* createCampaignAsync({payload}: any) {
  const {name, history} = payload;

  const data = {
    id: uuidv4(),
    name,
  };

  yield call(onCreateCampaignRequest, data);

  yield put(createCampaignSuccess());

  yield history.push(`/campaign/${data.id}`);
}

export default function* rootSaga() {
  yield all([
    takeEvery(CREATE_CAMPAIGN, createCampaignAsync),
    takeEvery(QUERY_CAMPAIGN, queryCampaignAsync),
  ]);
}
