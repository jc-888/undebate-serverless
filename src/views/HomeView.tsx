import * as React from 'react';
import {Card, ListGroup} from 'react-bootstrap';

type Props = {
  campaigns: [];
};

const HomeView: React.FC<Props> = props => {
  const {campaigns} = props;

  return (
    <div>
      {campaigns !== [] ? (
        <>
          <Card.Title>List Campaigns</Card.Title>
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
    </div>
  );
};

export default HomeView;
