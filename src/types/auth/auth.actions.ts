/*
 *
 * this is the file that handles the typescript interfaces for all authorization actions
 *
 */
import {
  LOGOUT,
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  CLEAR_CREDENTIALS,
} from '../../redux/actions/authActions.actions';

export interface updateClearCredentials {
  type: typeof CLEAR_CREDENTIALS;
  payload: {
    email: string;
    password: string;
  };
}

export interface updateEmailInterface {
  type: typeof UPDATE_EMAIL;
  payload: {
    email: string;
  };
}

export interface updatePasswordInterface {
  type: typeof UPDATE_PASSWORD;
  payload: {
    password: string;
  };
}

export interface signUpInterface {
  type: typeof SIGNUP_SUCCESS;
  payload: {
    email: string;
    password: string;
  };
}

export interface loginInterface {
  type: typeof LOGIN_SUCCESS;
  payload: {
    email: string;
    password: string;
    isLoggedIn: boolean;
    idToken: string;
    userId: string;
  };
}

export interface logoutInterface {
  type: typeof LOGOUT;
  payload: {
    isLoggedIn: boolean;
    idToken: string;
    userId: string;
  };
}

export type AuthActionTypes =
  | updateEmailInterface
  | updatePasswordInterface
  | signUpInterface
  | loginInterface
  | logoutInterface
  | updateClearCredentials;
