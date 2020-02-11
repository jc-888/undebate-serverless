/*
 *
 * this is the file that handles the typescript interfaces for all authorization actions
 *
 */
import {UPDATE_CAMPAIGN_NAME} from '../../redux/actions/campaignsActions.actions';

export interface updateNameInterface {
  type: typeof UPDATE_CAMPAIGN_NAME;
  payload: {
    name: string;
  };
}

// export type AuthActionTypes =
//   | updateNameInterface
//   | updatePasswordInterface
//   | signUpInterface
//   | loginInterface
//   | logoutInterface
//   | updateClearCredentials;

export type CampaignsActionTypes = updateNameInterface;
