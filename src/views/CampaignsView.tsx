import * as React from 'react';
import Recorder from '../components/Recorder';

type Props = {};

const CampaignsView: React.FC<Props> = () => {
  return (
    <div>
      <h1>This is where to list all the Campaigns</h1>
      <Recorder />
    </div>
  );
};

export default CampaignsView;
