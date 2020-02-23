import * as React from 'react';
import {Card} from 'react-bootstrap';

type Props = {
  id: string;
  name: string;
};

const CampaignView: React.FC<Props> = props => {
  const {id, name} = props;

  return (
    <div>
      <Card.Title>Campaign Here</Card.Title>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default CampaignView;
