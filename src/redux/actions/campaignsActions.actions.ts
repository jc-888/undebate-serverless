import {AppActions} from '../../types/rootType.actions';

export const UPDATE_CAMPAIGN_NAME = 'UPDATE_CAMPAIGN_NAME';
export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN';
export const CREATE_CAMPAIGN_SUCCESS = 'CREATE_CAMPAIGN_SUCCESS';

export const updateCampaignName = (name: string) => ({
  type: UPDATE_CAMPAIGN_NAME,
  payload: {name},
});

export const createCampaign = (name: string, history: any): AppActions => ({
  type: CREATE_CAMPAIGN,
  payload: {name, history},
});

export const createCampaignSuccess = () => ({
  type: CREATE_CAMPAIGN_SUCCESS,
  payload: {
    id: '',
    name: '',
  },
});
