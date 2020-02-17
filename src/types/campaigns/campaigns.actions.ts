/*
 *
 * this is the file that handles the typescript interfaces for all authorization actions
 *
 */
import {
  LIST_CAMPAIGNS,
  LIST_CAMPAIGNS_SUCCESS,
  UPDATE_CAMPAIGN_NAME,
  CREATE_CAMPAIGN,
  CREATE_CAMPAIGN_SUCCESS,
} from '../../redux/actions/campaignsActions.actions';

export interface queryCampaignsInterface {
  type: typeof LIST_CAMPAIGNS;
  payload: {};
}

export interface queryCampaignsSuccessInterface {
  type: typeof LIST_CAMPAIGNS_SUCCESS;
  payload: {
    campaigns: any;
  };
}

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
  | queryCampaignsInterface
  | queryCampaignsSuccessInterface
  | updateNameInterface
  | createCampaignInterface
  | createCampaignSuccessInterface;
