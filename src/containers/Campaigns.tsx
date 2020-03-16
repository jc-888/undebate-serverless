import React, {Component} from 'react';
// import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import {AppState} from '../redux/rootAppState';
// import {AppActions} from '../types/rootType.actions';
import CampaignsView from '../views/CampaignsView';

interface CampaignsPageProps {
  history?: any;
}

interface CampaignsPageState {
  campaigns: [];
}

export class Campaigns extends Component<
  CampaignsPageProps,
  CampaignsPageState
> {
  constructor(props: any) {
    super(props);
    this.state = {campaigns: []};
  }

  componentDidMount() {
    this.getCampaigns();
  }

  getCampaigns = () => {
    // firebase here!
    console.log('getting campaigns from firebase');
  };

  render() {
    return <CampaignsView campaigns={this.state.campaigns} />;
  }
}

export default Campaigns;
