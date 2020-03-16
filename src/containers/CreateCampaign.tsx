import React, {Component} from 'react';
// import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import {AppState} from '../redux/rootAppState';
// import {AppActions} from '../types/rootType.actions';
import CreateCampaignView from '../views/CreateCampaignView';

interface CreateCampaignPageProps {
  history?: any;
}

interface CreateCampaignPageState {
  history?: any;
  name: any;
}

export class CreateCampaign extends Component<
  CreateCampaignPageProps,
  CreateCampaignPageState
> {
  constructor(props: any) {
    super(props);
    this.state = {name: ''};
  }

  updateCampaignName = (value: any) => {};

  onUpdateCampaignName = (event: any) => {
    this.updateCampaignName(event.target.value);
  };

  createCampaign = (name: string, history: any) => {};

  onCreateCampaign = (event: any) => {
    event.preventDefault();
    this.createCampaign(this.state.name, this.state.history);
  };

  render() {
    return (
      <CreateCampaignView
        name={this.state.name}
        onUpdateCampaignName={this.onUpdateCampaignName}
        onCreateCampaign={this.onCreateCampaign}
      />
    );
  }
}

export default CreateCampaign;
