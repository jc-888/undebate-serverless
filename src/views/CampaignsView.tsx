import * as React from 'react';
import {Card, ListGroup} from 'react-bootstrap';

type Props = {
  campaigns: [];
};

const CampaignsView: React.FC<Props> = props => {
  const {campaigns} = props;

  return (
    <>
      {campaigns.length > 0 ? (
        <>
          <Card.Title>Campaigns List</Card.Title>
          <ListGroup>
            {campaigns.map((campaign: any) => (
              <ListGroup.Item key={campaign.name}>
                {campaign.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      ) : (
        <Card.Title>No Campaigns</Card.Title>
      )}
    </>
  );
};

export default CampaignsView;
