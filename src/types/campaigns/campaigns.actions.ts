/*
 *
 * this is the file that handles the typescript interfaces for all authorization actions
 *
 */
import {
  LIST_CAMPAIGNS,
  LIST_CAMPAIGNS_SUCCESS,
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

export type CampaignsActionTypes =
  | queryCampaignsInterface
  | queryCampaignsSuccessInterface;
