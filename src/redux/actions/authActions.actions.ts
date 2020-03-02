/*
 *
 * this files handles all the redux actions for authorization
 *
 */
// import {Auth} from 'aws-amplify';

import {FirebaseAuth} from '../../firebase';

import {Dispatch} from 'redux';
import {AppState} from '../rootAppState';
import {AppActions} from '../../types/rootType.actions';

export const LOGOUT = 'LOGOUT';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS';

export const clearCredentials = (): AppActions => ({
  type: CLEAR_CREDENTIALS,
  payload: {email: '', password: ''},
});

export const updateEmail = (email: string): AppActions => ({
  type: UPDATE_EMAIL,
  payload: {email: email},
});

export const updatePassword = (password: string): AppActions => ({
  type: UPDATE_PASSWORD,
  payload: {password: password},
});

export const signUp = (history: any) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const userCred = getState().Auth;
    FirebaseAuth.createUserWithEmailAndPassword(
      userCred.email,
      userCred.password,
    )
      .then(data => {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: {email: '', password: ''},
        });
        history.push('/login');
        alert('confirm your email');
      })
      .catch(err => {
        console.log('Fail!');
        console.log(err);
      });
  };
};

export const login = (history: any) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    const userCred = getState().Auth;
    FirebaseAuth.signInWithEmailAndPassword(userCred.email, userCred.password)
      .then(data => {
        console.log(data);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            email: '',
            password: '',
            isLoggedIn: true,
            // idToken: data.signInUserSession.idToken.jwtToken,
            // userId: data.attributes.sub,
          },
        });
        history.push('/');
      })
      .catch(err => {
        console.log('Login Fail!');
        console.log(err);
      });
  };
};

export const logout = (history: any) => {
  return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
    FirebaseAuth.signOut()
      .then(data => {
        dispatch({
          type: LOGOUT,
          payload: {
            isLoggedIn: false,
            idToken: '',
            userId: '',
          },
        });
        history.push('/login');
      })
      .catch(err => {
        console.log('Logout Fail!');
        console.log(err);
      });
  };
};
