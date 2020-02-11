import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import CampaignView from '../views/CampaignView';

interface CampaignPageProps {}

interface CampaignPageState {}

type Props = CampaignPageProps & CampaignStateProps & CampaignDispatchProps;

export class Campaign extends Component<Props, CampaignPageState> {
  render() {
    return <CampaignView />;
  }
}

interface CampaignStateProps {}

interface CampaignDispatchProps {}

const mapStateToProps = (
  state: AppState,
  ownProps: CampaignPageProps,
): CampaignStateProps => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: CampaignPageProps,
): CampaignDispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
