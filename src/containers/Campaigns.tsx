import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import CampaignsView from '../views/CampaignsView';

import {
  listCampaigns,
  updateCampaignName,
  createCampaign,
} from '../redux/actions/campaignsActions.actions';

interface CampaignsPageProps {
  history?: any;
}

interface CampaignsPageState {}

type Props = CampaignsPageProps & CampaignsStateProps & CampaignsDispatchProps;

export class Campaigns extends Component<Props, CampaignsPageState> {
  componentDidMount() {
    this.props.listCampaigns();
  }

  onUpdateCampaignName = (event: any) => {
    this.props.updateCampaignName(event.target.value);
  };

  onCreateCampaign = (event: any) => {
    event.preventDefault();
    this.props.createCampaign(this.props.name, this.props.history);
  };

  render() {
    return (
      <CampaignsView
        campaigns={this.props.campaigns}
        name={this.props.name}
        onUpdateCampaignName={this.onUpdateCampaignName}
        onCreateCampaign={this.onCreateCampaign}
      />
    );
  }
}

interface CampaignsStateProps {
  name: string;
  campaigns: [];
}

interface CampaignsDispatchProps {
  listCampaigns: () => void;
  updateCampaignName: (event: any) => void;
  createCampaign: (name: string, history: any) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: CampaignsPageProps,
): CampaignsStateProps => ({
  name: state.Campaign.name,
  campaigns: state.Campaign.campaigns,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: CampaignsPageProps,
): CampaignsDispatchProps => ({
  listCampaigns: bindActionCreators(listCampaigns, dispatch),
  updateCampaignName: bindActionCreators(updateCampaignName, dispatch),
  createCampaign: bindActionCreators(createCampaign, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);
