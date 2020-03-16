import React, {Component} from 'react';
// import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import {AppState} from '../redux/rootAppState';
// import {AppActions} from '../types/rootType.actions';
import CampaignsView from '../views/CampaignsView';

import {FirebaseFirestore} from '../firebase';

interface CampaignsPageProps {
  history?: any;
}

interface CampaignsPageState {
  campaigns: [];
}

export class Campaigns extends Component<
  CampaignsPageProps,
  CampaignsPageState
> {
  constructor(props: any) {
    super(props);
    this.state = {campaigns: []};
  }

  componentDidMount() {
    this.getCampaigns();
  }

  getCampaigns = async () => {
    await console.log('getting campaigns from firebase');

    let campaigns: any = [];

    await FirebaseFirestore.collection('UndebateCampaigns')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          campaigns.push({id: doc.id, ...doc.data()});
        });

        this.setState({
          campaigns: campaigns,
        });
      });
  };

  render() {
    return <CampaignsView campaigns={this.state.campaigns} />;
  }
}

export default Campaigns;
