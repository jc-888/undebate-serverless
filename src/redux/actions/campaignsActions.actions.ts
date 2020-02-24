import {AppActions} from '../../types/rootType.actions';

export const LIST_CAMPAIGNS = 'LIST_CAMPAIGNS';
export const LIST_CAMPAIGNS_SUCCESS = 'LIST_CAMPAIGNS_SUCCESS';

export const listCampaigns = (): AppActions => ({
  type: LIST_CAMPAIGNS,
});

export const listCampaignsSuccess = (campaigns: any): AppActions => ({
  type: LIST_CAMPAIGNS_SUCCESS,
  payload: {campaigns},
});
