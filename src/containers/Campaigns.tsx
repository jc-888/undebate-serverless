import React, {Component} from 'react';
import CampaignsView from '../views/CampaignsView';

interface CampaignsPageProps {}

interface CampaignsPageState {}

export class Campaigns extends Component<
  CampaignsPageProps,
  CampaignsPageState
> {
  render() {
    return <CampaignsView />;
  }
}

export default Campaigns;
