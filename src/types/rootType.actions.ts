/*
 *
 * this is the file that handles the typescript interface actions combined
 *
 */
import {AuthActionTypes} from './auth/auth.actions';
import {CampaignsActionTypes} from './campaigns/campaigns.actions';

export type AppActions = AuthActionTypes | CampaignsActionTypes;
