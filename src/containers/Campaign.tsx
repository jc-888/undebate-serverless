import React, {Component} from 'react';
// import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import {AppState} from '../redux/rootAppState';
// import {AppActions} from '../types/rootType.actions';
import CampaignView from '../views/CampaignView';

import {FirebaseFirestore} from '../firebase';

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
    const {campaignID} = this.props.match.params;

    // Query Campaign
    this.getCampaign(campaignID);

    // List Questions
  }

  getCampaign = async (campaignID: string) => {
    await console.log('getting single campaign from firebase');

    await FirebaseFirestore.collection('UndebateCampaigns')
      .doc(campaignID)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
          this.setState({id: doc.id, ...doc.data()});
        }
      });
  };

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
