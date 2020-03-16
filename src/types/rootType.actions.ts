/*
 *
 * this is the file that handles the typescript interface actions combined
 *
 */
// import {AuthActionTypes} from './auth/auth.actions';
// import {CampaignsActionTypes} from './campaigns/campaigns.actions';
// import {CampaignActionTypes} from './campaigns/campaign.actions';

// export type AppActions =
//   | AuthActionTypes
//   | CampaignsActionTypes
//   | CampaignActionTypes;

import {AuthActionTypes} from './auth/auth.actions';

export type AppActions = AuthActionTypes;
