/*
 *
 * this is the file that handles the typescript interfaces for all authorization actions
 *
 */
import {
  LIST_QUESTIONS,
  LIST_QUESTIONS_SUCCESS,
} from '../../redux/actions/questionsActions.actions';

export interface queryQuestionsInterface {
  type: typeof LIST_QUESTIONS;
  payload: {};
}

export interface queryQuestionsSuccessInterface {
  type: typeof LIST_QUESTIONS_SUCCESS;
  payload: {
    questions: any;
  };
}

export type QuestionsActionTypes =
  | queryQuestionsInterface
  | queryQuestionsSuccessInterface;
