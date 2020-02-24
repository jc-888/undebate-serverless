import {AppActions} from '../../types/rootType.actions';

export const UPDATE_QUESTION_NAME = 'UPDATE_QUESTION_NAME';
export const QUERY_QUESTION = 'QUERY_QUESTION';
export const QUERY_QUESTION_SUCCESS = 'QUERY_QUESTION_SUCCESS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';

export const updateQuestion = (question: string): AppActions => ({
  type: UPDATE_QUESTION_NAME,
  payload: {question},
});

export const queryQuestion = (campaignID: string): AppActions => ({
  type: QUERY_QUESTION,
  payload: {
    campaignID,
  },
});

export const queryQuestionSuccess = (queriedQuestion: any): AppActions => ({
  type: QUERY_QUESTION_SUCCESS,
  payload: {
    id: queriedQuestion.id,
    question: queriedQuestion.question,
  },
});

export const createQuestion = (
  question: string,
  campaignID: string,
  history: any,
): AppActions => ({
  type: CREATE_QUESTION,
  payload: {question, campaignID, history},
});

export const createQuestionSuccess = (): AppActions => ({
  type: CREATE_QUESTION_SUCCESS,
  payload: {
    id: '',
    question: '',
  },
});
