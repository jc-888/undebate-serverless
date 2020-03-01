import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import HomeView from '../views/HomeView';

interface HomePageProps {
  match: any;
}

interface HomePageState {}

type Props = HomePageProps & HomeStateProps & HomeDispatchProps;

export class Home extends Component<Props, HomePageState> {
  render() {
    return <HomeView />;
  }
}

interface HomeStateProps {}

interface HomeDispatchProps {}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps,
): HomeStateProps => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps,
): HomeDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
