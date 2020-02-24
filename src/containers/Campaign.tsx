import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import CampaignView from '../views/CampaignView';

import {queryCampaign} from '../redux/actions/campaignActions.actions';
import {listQuestions} from '../redux/actions/questionsActions.actions';

interface CampaignPageProps {
  match: any;
}

interface CampaignPageState {}

type Props = CampaignPageProps & CampaignStateProps & CampaignDispatchProps;

export class Campaign extends Component<Props, CampaignPageState> {
  componentDidMount() {
    let {campaignID} = this.props.match.params;

    this.props.queryCampaign(campaignID);
    this.props.listQuestions(campaignID);
  }
  render() {
    return (
      <CampaignView
        questions={this.props.questions}
        id={this.props.id}
        name={this.props.name}
      />
    );
  }
}

interface CampaignStateProps {
  id: string;
  name: string;
  questions: any;
}

interface CampaignDispatchProps {
  queryCampaign: (campaignID: string) => void;
  listQuestions: (campaignID: string) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: CampaignPageProps,
): CampaignStateProps => ({
  id: state.Campaign.id,
  name: state.Campaign.name,
  questions: state.Questions.questions,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: CampaignPageProps,
): CampaignDispatchProps => ({
  queryCampaign: bindActionCreators(queryCampaign, dispatch),
  listQuestions: bindActionCreators(listQuestions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Campaign);
