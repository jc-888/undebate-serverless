/*
 *
 * this is the file that handles the typescript interfaces for all authorization actions
 *
 */
import {
  UPDATE_CAMPAIGN_NAME,
  CREATE_CAMPAIGN,
  CREATE_CAMPAIGN_SUCCESS,
} from '../../redux/actions/campaignsActions.actions';

export interface updateNameInterface {
  type: typeof UPDATE_CAMPAIGN_NAME;
  payload: {
    name: string;
  };
}

export interface createCampaignInterface {
  type: typeof CREATE_CAMPAIGN;
  payload: {
    name: string;
    history: any;
  };
}

export interface createCampaignSuccessInterface {
  type: typeof CREATE_CAMPAIGN_SUCCESS;
  payload: {
    payload: any;
  };
}

export type CampaignsActionTypes =
  | updateNameInterface
  | createCampaignInterface
  | createCampaignSuccessInterface;
