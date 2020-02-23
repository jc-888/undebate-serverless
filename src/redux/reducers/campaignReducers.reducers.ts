/*
 *
 * this is the file that handles the redux reducer for all the authorization logic
 *
 */
import {CampaignActionTypes} from '../../types/campaigns/campaign.actions';

import {
  UPDATE_CAMPAIGN_NAME,
  QUERY_CAMPAIGN,
  QUERY_CAMPAIGN_SUCCESS,
  CREATE_CAMPAIGN,
  CREATE_CAMPAIGN_SUCCESS,
} from '../actions/campaignActions.actions';

const initialState = {
  id: '',
  name: '',
  history: null,
};

export default (state = initialState, action: CampaignActionTypes) => {
  switch (action.type) {
    case UPDATE_CAMPAIGN_NAME:
      return {...state, name: action.payload.name};
    case QUERY_CAMPAIGN:
      return {
        ...state,
        campaignID: action.payload.campaignID,
      };
    case QUERY_CAMPAIGN_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
      };
    case CREATE_CAMPAIGN:
      return {
        ...state,
        name: action.payload.name,
      };
    case CREATE_CAMPAIGN_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
