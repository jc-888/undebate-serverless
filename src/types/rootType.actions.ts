/*
 *
 * this is the file that handles the typescript interface actions combined
 *
 */
import {AuthActionTypes} from './auth/auth.actions';
import {CampaignsActionTypes} from './campaigns/campaigns.actions';
import {CampaignActionTypes} from './campaigns/campaign.actions';
import {QuestionsActionTypes} from './question/questions.actions';
import {QuestionActionTypes} from './question/question.actions';

export type AppActions =
  | AuthActionTypes
  | CampaignsActionTypes
  | CampaignActionTypes
  | QuestionsActionTypes
  | QuestionActionTypes;
