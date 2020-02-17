import * as React from 'react';
import {
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  ListGroup,
} from 'react-bootstrap';

// import Recorder from '../components/Recorder';

type Props = {
  campaigns: [];
  name: string;
  onUpdateCampaignName: (event: any) => void;
  onCreateCampaign: (event: any) => void;
};

const CampaignsView: React.FC<Props> = props => {
  const {campaigns, name, onUpdateCampaignName, onCreateCampaign} = props;

  const UpdateCampaignName = (event: any) => {
    onUpdateCampaignName(event);
  };

  const CreateCampaign = (event: any) => {
    onCreateCampaign(event);
  };

  return (
    <div>
      {campaigns !== [] ? (
        <>
          <Card.Title>List Campaigns</Card.Title>
          <ListGroup>
            {campaigns.map((campaign: any) => (
              <ListGroup.Item>{campaign.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </>
      ) : (
        <Card.Title>No Campaigns</Card.Title>
      )}
      <Card.Title>Create Campaign</Card.Title>
      <Form onSubmit={CreateCampaign}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">Campaign Name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="basic-title"
            aria-describedby="basic-addon3"
            onChange={UpdateCampaignName}
            value={name}
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Create Campaign
        </Button>
      </Form>

      {/* <Recorder /> */}
    </div>
  );
};

export default CampaignsView;
