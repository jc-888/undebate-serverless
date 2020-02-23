import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import CreateCampaignView from '../views/CreateCampaignView';

import {
  updateCampaignName,
  createCampaign,
} from '../redux/actions/campaignActions.actions';

interface CreateCampaignPageProps {
  history?: any;
}

interface CreateCampaignPageState {}

type Props = CreateCampaignPageProps &
  CreateCampaignStateProps &
  CreateCampaignDispatchProps;

export class CreateCampaign extends Component<Props, CreateCampaignPageState> {
  onUpdateCampaignName = (event: any) => {
    this.props.updateCampaignName(event.target.value);
  };

  onCreateCampaign = (event: any) => {
    event.preventDefault();
    this.props.createCampaign(this.props.name, this.props.history);
  };

  render() {
    return (
      <CreateCampaignView
        name={this.props.name}
        onUpdateCampaignName={this.onUpdateCampaignName}
        onCreateCampaign={this.onCreateCampaign}
      />
    );
  }
}

interface CreateCampaignStateProps {
  name: string;
}

interface CreateCampaignDispatchProps {
  updateCampaignName: (event: any) => void;
  createCampaign: (name: string, history: any) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: CreateCampaignPageProps,
): CreateCampaignStateProps => ({
  name: state.Campaign.name,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: CreateCampaignPageProps,
): CreateCampaignDispatchProps => ({
  updateCampaignName: bindActionCreators(updateCampaignName, dispatch),
  createCampaign: bindActionCreators(createCampaign, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaign);
