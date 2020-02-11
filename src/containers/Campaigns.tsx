import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import CampaignsView from '../views/CampaignsView';

import {updateCampaignName} from '../redux/actions/campaignsActions.actions';

interface CampaignsPageProps {
  name: string;
}

interface CampaignsPageState {}

type Props = CampaignsPageProps & CampaignsStateProps & CampaignsDispatchProps;

export class Campaigns extends Component<Props, CampaignsPageState> {
  onUpdateCampaignName = (event: any) => {
    this.props.updateCampaignName(event.target.value);
  };

  onCreateCampaign = (event: any) => {
    event.preventDefault();
    // Add Props to create campaign here
  };

  render() {
    return (
      <CampaignsView
        name={this.props.name}
        onCreateCampaign={this.onCreateCampaign}
        onUpdateCampaignName={this.onUpdateCampaignName}
      />
    );
  }
}

interface CampaignsStateProps {
  name: string;
}

interface CampaignsDispatchProps {
  updateCampaignName: (event: any) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: CampaignsPageProps,
): CampaignsStateProps => ({
  name: state.Campaign.name,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: CampaignsPageProps,
): CampaignsDispatchProps => ({
  updateCampaignName: bindActionCreators(updateCampaignName, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);
