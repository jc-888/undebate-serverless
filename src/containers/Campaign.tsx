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
  campaignID: string;
  name: string;
  questions: [];
}

export class Campaign extends Component<CampaignPageProps, CampaignPageState> {
  constructor(props: any) {
    super(props);
    this.state = {campaignID: '', name: '', questions: []};
  }

  componentDidMount() {
    const {campaignID} = this.props.match.params;

    // Query Campaign
    this.getCampaign(campaignID);

    // List Questions
    this.getQuestions(campaignID);
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
          this.setState({campaignID: doc.id, ...doc.data()});
        }
      });
  };

  getQuestions = async (campaignID: string) => {
    await console.log('getting all questions from firebase');

    let questions: any = [];

    await FirebaseFirestore.collection('UndebateQuestions')
      .where('campaignID', '==', campaignID)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          questions.push({campaignID: doc.id, ...doc.data()});
        });

        this.setState({
          questions: questions,
        });
      });
  };

  render() {
    return (
      <CampaignView
        questions={this.state.questions}
        campaignID={this.state.campaignID}
        name={this.state.name}
      />
    );
  }
}

export default Campaign;
