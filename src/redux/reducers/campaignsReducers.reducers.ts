/*
 *
 * this is the file that handles the redux reducer for all the authorization logic
 *
 */
import {CampaignsActionTypes} from '../../types/campaigns/campaigns.actions';

import {
  LIST_CAMPAIGNS,
  LIST_CAMPAIGNS_SUCCESS,
  UPDATE_CAMPAIGN_NAME,
  CREATE_CAMPAIGN,
  CREATE_CAMPAIGN_SUCCESS,
} from '../actions/campaignsActions.actions';

const initialState = {
  id: '',
  name: '',
  history: null,
  campaigns: [],
};

export default (state = initialState, action: CampaignsActionTypes) => {
  switch (action.type) {
    case LIST_CAMPAIGNS:
      return {...state};
    case LIST_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        campaigns: action.payload.campaigns,
      };
    case UPDATE_CAMPAIGN_NAME:
      return {...state, name: action.payload.name};
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
