/*
 *
 * this is the file that handles the redux reducer for all the authorization logic
 *
 */
import {CampaignsActionTypes} from '../../types/campaigns/campaigns.actions';

import {
  LIST_CAMPAIGNS,
  LIST_CAMPAIGNS_SUCCESS,
} from '../actions/campaignsActions.actions';

const initialState = {
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
    default:
      return state;
  }
};
