/*
 *
 * this is the file that handles the typescript interfaces for all authorization actions
 *
 */

import {
  UPDATE_QUESTION,
  QUERY_QUESTION,
  QUERY_QUESTION_SUCCESS,
  CREATE_QUESTION,
  CREATE_QUESTION_SUCCESS,
} from '../../redux/actions/questionActions.actions';

export interface updateQuestionInterface {
  type: typeof UPDATE_QUESTION;
  payload: {
    question: string;
  };
}

export interface queryQuestionInterface {
  type: typeof QUERY_QUESTION;
  payload: {
    questionID: string;
  };
}

export interface queryQuestionSuccessInterface {
  type: typeof QUERY_QUESTION_SUCCESS;
  payload: {
    question: string;
  };
}

export interface createQuestionInterface {
  type: typeof CREATE_QUESTION;
  payload: {
    question: string;
    history: any;
  };
}

export interface createQuestionSuccessInterface {
  type: typeof CREATE_QUESTION_SUCCESS;
  payload: {
    payload: any;
  };
}

export type QuestionActionTypes =
  | updateQuestionInterface
  | queryQuestionInterface
  | queryQuestionSuccessInterface
  | createQuestionInterface
  | createQuestionSuccessInterface;
