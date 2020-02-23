/*
 *
 * this is the file that handles the typescript interfaces for all authorization actions
 *
 */

import {
  UPDATE_CAMPAIGN_NAME,
  QUERY_CAMPAIGN,
  QUERY_CAMPAIGN_SUCCESS,
  CREATE_CAMPAIGN,
  CREATE_CAMPAIGN_SUCCESS,
} from '../../redux/actions/campaignActions.actions';

export interface updateNameInterface {
  type: typeof UPDATE_CAMPAIGN_NAME;
  payload: {
    name: string;
  };
}

export interface queryCampaignInterface {
  type: typeof QUERY_CAMPAIGN;
  payload: {
    campaignID: string;
  };
}

export interface queryCampaignSuccessInterface {
  type: typeof QUERY_CAMPAIGN_SUCCESS;
  payload: {
    id: string;
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

export type CampaignActionTypes =
  | updateNameInterface
  | queryCampaignInterface
  | queryCampaignSuccessInterface
  | createCampaignInterface
  | createCampaignSuccessInterface;
