/*
 *
 * this is the file that handles the redux reducer for all the authorization logic
 *
 */
import {QuestionActionTypes} from '../../types/question/question.actions';

import {
  UPDATE_QUESTION,
  QUERY_QUESTION,
  QUERY_QUESTION_SUCCESS,
  CREATE_QUESTION,
  CREATE_QUESTION_SUCCESS,
} from '../actions/questionActions.actions';

const initialState = {
  id: '',
  question: '',
  questionID: '',
  history: null,
};

export default (state = initialState, action: QuestionActionTypes) => {
  switch (action.type) {
    case UPDATE_QUESTION:
      return {...state, question: action.payload.question};
    case QUERY_QUESTION:
      return {
        ...state,
        questionID: action.payload.questionID,
      };
    case QUERY_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload.question,
      };
    case CREATE_QUESTION:
      return {
        ...state,
        question: action.payload.question,
      };
    case CREATE_QUESTION_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
