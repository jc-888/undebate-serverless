/*
 *
 * this is the file that handles the redux reducer for all the authorization logic
 *
 */
import {CampaignsTypes} from '../../types/campaigns/campaigns';
import {CampaignsActionTypes} from '../../types/campaigns/campaigns.actions';

import {UPDATE_CAMPAIGN_NAME} from '../actions/campaignsActions.actions';

const initialState: CampaignsTypes = {
  name: '',
};

export default (
  state = initialState,
  action: CampaignsActionTypes,
): CampaignsTypes => {
  switch (action.type) {
    case UPDATE_CAMPAIGN_NAME:
      return {...state, name: action.payload.name};
    default:
      return state;
  }
};
