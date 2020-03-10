import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import CampaignsView from '../views/CampaignsView';

import {listCampaigns} from '../redux/actions/campaignsActions.actions';

interface CampaignsPageProps {
  history?: any;
}

interface CampaignsPageState {}

type Props = CampaignsPageProps & CampaignsStateProps & CampaignsDispatchProps;

export class Campaigns extends Component<Props, CampaignsPageState> {
  componentDidMount() {
    console.log('getting a list of campaigns');
    this.props.listCampaigns();
    console.log('finished getting a list of campaigns');
  }

  render() {
    return <CampaignsView campaigns={this.props.campaigns} />;
  }
}

interface CampaignsStateProps {
  campaigns: [];
}

interface CampaignsDispatchProps {
  listCampaigns: () => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: CampaignsPageProps,
): CampaignsStateProps => ({
  campaigns: state.Campaigns.campaigns,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: CampaignsPageProps,
): CampaignsDispatchProps => ({
  listCampaigns: bindActionCreators(listCampaigns, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);
