import {AppActions} from '../../types/rootType.actions';

export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const QUERY_QUESTION = 'QUERY_QUESTION';
export const QUERY_QUESTION_SUCCESS = 'QUERY_QUESTION_SUCCESS';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS';

export const updateQuestion = (question: string) => ({
  type: UPDATE_QUESTION,
  payload: {question},
});

export const queryQuestion = (questionID: string) => ({
  type: QUERY_QUESTION,
  payload: {
    questionID,
  },
});

export const queryQuestionSuccess = (queriedQuestion: any) => ({
  type: QUERY_QUESTION_SUCCESS,
  payload: {
    question: queriedQuestion.question,
  },
});

export const createQuestion = (question: string, history: any): AppActions => ({
  type: CREATE_QUESTION,
  payload: {question, history},
});

export const createQuestionSuccess = () => ({
  type: CREATE_QUESTION_SUCCESS,
  payload: {
    question: '',
  },
});
