import React, {Component} from 'react';
// import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import {AppState} from '../redux/rootAppState';
// import {AppActions} from '../types/rootType.actions';
import CampaignView from '../views/CampaignView';

interface CampaignPageProps {
  match: any;
}

interface CampaignPageState {
  id: string;
  name: string;
}

export class Campaign extends Component<CampaignPageProps, CampaignPageState> {
  constructor(props: any) {
    super(props);
    this.state = {id: '', name: ''};
  }

  componentDidMount() {
    // let {campaignID} = this.props.match.params;
    // List Questions
  }
  render() {
    return (
      <CampaignView
        // questions={this.props.questions}
        id={this.state.id}
        name={this.state.name}
      />
    );
  }
}

export default Campaign;
