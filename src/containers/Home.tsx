import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import HomeView from '../views/HomeView';

import {listCampaigns} from '../redux/actions/campaignsActions.actions';

interface HomePageProps {
  history?: any;
}

interface HomePageState {}

type Props = HomePageProps & HomeStateProps & HomeDispatchProps;

export class Home extends Component<Props, HomePageState> {
  componentDidMount() {
    this.props.listCampaigns();
  }

  render() {
    return <HomeView campaigns={this.props.campaigns} />;
  }
}

interface HomeStateProps {
  campaigns: [];
}

interface HomeDispatchProps {
  listCampaigns: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: HomePageProps,
): HomeStateProps => ({
  campaigns: state.Campaign.campaigns,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: HomePageProps,
): HomeDispatchProps => ({
  listCampaigns: bindActionCreators(listCampaigns, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
