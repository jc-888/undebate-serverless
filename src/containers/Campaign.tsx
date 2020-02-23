import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import CampaignView from '../views/CampaignView';

import {queryCampaign} from '../redux/actions/campaignActions.actions';

interface CampaignPageProps {
  match: any;
}

interface CampaignPageState {}

type Props = CampaignPageProps & CampaignStateProps & CampaignDispatchProps;

export class Campaign extends Component<Props, CampaignPageState> {
  componentDidMount() {
    let {campaignID} = this.props.match.params;

    this.props.queryCampaign(campaignID);
  }
  render() {
    return <CampaignView id={this.props.id} name={this.props.name} />;
  }
}

interface CampaignStateProps {
  id: string;
  name: string;
}

interface CampaignDispatchProps {
  queryCampaign: (campaignID: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: CampaignPageProps,
): CampaignStateProps => ({
  id: state.Campaign.id,
  name: state.Campaign.name,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: CampaignPageProps,
): CampaignDispatchProps => ({
  queryCampaign: bindActionCreators(queryCampaign, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
