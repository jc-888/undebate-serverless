import * as React from 'react';
import {Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap';

type Props = {
  name: string;
  onUpdateCampaignName: (event: any) => void;
  onCreateCampaign: (event: any) => void;
};

const CreateCampaignView: React.FC<Props> = props => {
  const {name, onUpdateCampaignName, onCreateCampaign} = props;

  const UpdateCampaignName = (event: any) => {
    onUpdateCampaignName(event);
  };

  const CreateCampaign = (event: any) => {
    onCreateCampaign(event);
  };

  return (
    <>
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
    </>
  );
};

export default CreateCampaignView;
