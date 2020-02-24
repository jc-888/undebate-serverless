/*
 *
 * this is the file that handles the redux reducer for all the authorization logic
 *
 */
import {QuestionsActionTypes} from '../../types/question/questions.actions';

import {
  LIST_QUESTIONS,
  LIST_QUESTIONS_SUCCESS,
} from '../actions/questionsActions.actions';

const initialState = {
  questions: [],
};

export default (state = initialState, action: QuestionsActionTypes) => {
  switch (action.type) {
    case LIST_QUESTIONS:
      return {...state};
    case LIST_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload.questions,
      };
    default:
      return state;
  }
};
