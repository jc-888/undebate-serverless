import {AppActions} from '../../types/rootType.actions';

export const LIST_QUESTIONS = 'LIST_QUESTIONS';
export const LIST_QUESTIONS_SUCCESS = 'LIST_QUESTIONS_SUCCESS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';

export const listQuestions = (campaignId: string): AppActions => ({
  type: LIST_QUESTIONS,
  payload: {campaignId},
});

export const listQuestionsSuccess = (questions: any): AppActions => ({
  type: LIST_QUESTIONS_SUCCESS,
  payload: {questions},
});
