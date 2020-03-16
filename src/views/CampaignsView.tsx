import * as React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import {Link} from 'react-router-dom';

type Props = {
  campaigns: [];
};

const CampaignsView: React.FC<Props> = props => {
  const {campaigns} = props;

  return (
    <>
      {campaigns.length > 0 ? (
        <>
          <ListGroup>
            {campaigns.map((campaign: any) => (
              <ListGroup.Item key={campaign.name}>
                <Link to={`/campaign/${campaign.campaignID}`}>
                  {campaign.name}
                </Link>
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
