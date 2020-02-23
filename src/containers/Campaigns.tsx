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
    this.props.listCampaigns();
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
