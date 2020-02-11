// import {Dispatch} from 'redux';
// import {AppState} from '../rootAppState';
// import {AppActions} from '../../types/rootType.actions';

export const UPDATE_CAMPAIGN_NAME = 'UPDATE_CAMPAIGN_NAME';
export const CREATE_CAMPAIGN = 'CREATE_CAMPAIGN';

export const updateCampaignName = (name: string) => ({
  type: UPDATE_CAMPAIGN_NAME,
  payload: {name: name},
});

// export const updatePassword = (password: string) => ({
//   type: UPDATE_PASSWORD,
//   payload: {password: password},
// });

// export const signUp = (history: any) => {
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     const userCred = getState().Auth;
//     Auth.signUp({
//       username: userCred.email,
//       password: userCred.password,
//     })
//       .then(data => {
//         dispatch({
//           type: SIGNUP_SUCCESS,
//           payload: {email: '', password: ''},
//         });
//         history.push('/login');
//       })
//       .catch(err => {
//         console.log('Fail!');
//         console.log(err);
//       });
//   };
// };

// export const login = (history: any) => {
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     const userCred = getState().Auth;
//     Auth.signIn({
//       username: userCred.email,
//       password: userCred.password,
//     })
//       .then(data => {
//         dispatch({
//           type: LOGIN_SUCCESS,
//           payload: {
//             email: '',
//             password: '',
//             isLoggedIn: true,
//             idToken: data.signInUserSession.idToken.jwtToken,
//             userId: data.attributes.sub,
//           },
//         });
//         history.push('/campaigns');
//       })
//       .catch(err => {
//         console.log('Login Fail!');
//         console.log(err);
//       });
//   };
// };

// export const logout = (history: any) => {
//   return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
//     Auth.signOut()
//       .then(data => {
//         dispatch({
//           type: CREATE_CAMPAIGN,
//           payload: {
//             isLoggedIn: false,
//             idToken: '',
//             userId: '',
//           },
//         });
//         history.push('/login');
//       })
//       .catch(err => {
//         console.log('Logout Fail!');
//         console.log(err);
//       });
//   };
// };
