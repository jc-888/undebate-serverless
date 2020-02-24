/*
 *
 * this is the file that handles the typescript interfaces for all authorization actions
 *
 */

import {
  UPDATE_QUESTION_NAME,
  QUERY_QUESTION,
  QUERY_QUESTION_SUCCESS,
  CREATE_QUESTION,
  CREATE_QUESTION_SUCCESS,
} from '../../redux/actions/questionActions.actions';

export interface updateNameInterface {
  type: typeof UPDATE_QUESTION_NAME;
  payload: {
    question: string;
  };
}

export interface queryQuestionInterface {
  type: typeof QUERY_QUESTION;
  payload: {
    campaignID: string;
  };
}

export interface queryQuestionSuccessInterface {
  type: typeof QUERY_QUESTION_SUCCESS;
  payload: {
    id: string;
    question: string;
  };
}

export interface createQuestionInterface {
  type: typeof CREATE_QUESTION;
  payload: {
    question: string;
    campaignID: string;
    history: any;
  };
}

export interface createQuestionSuccessInterface {
  type: typeof CREATE_QUESTION_SUCCESS;
  payload: {
    id: string;
    question: string;
  };
}

export type QuestionActionTypes =
  | updateNameInterface
  | queryQuestionInterface
  | queryQuestionSuccessInterface
  | createQuestionInterface
  | createQuestionSuccessInterface;
