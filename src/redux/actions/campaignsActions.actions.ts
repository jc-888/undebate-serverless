export const LIST_CAMPAIGNS = 'LIST_CAMPAIGNS';
export const LIST_CAMPAIGNS_SUCCESS = 'LIST_CAMPAIGNS_SUCCESS';

export const listCampaigns = () => ({
  type: LIST_CAMPAIGNS,
});

export const listCampaignsSuccess = (campaigns: any) => ({
  type: LIST_CAMPAIGNS_SUCCESS,
  payload: {campaigns},
});
