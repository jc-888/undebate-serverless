import * as React from 'react';
import {Card} from 'react-bootstrap';

type Props = {
  name: string;
};

const CampaignView: React.FC<Props> = props => {
  const {name} = props;

  return (
    <>
      <Card.Title className="campaign-title">Campaign: {name}</Card.Title>
    </>
  );
};

export default CampaignView;
