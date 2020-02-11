import * as React from 'react';
// import {Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap';

import Recorder from '../components/Recorder';

type Props = {
  name: string;
  onUpdateCampaignName: (event: any) => void;
  onCreateCampaign: (event: any) => void;
};

const CampaignsView: React.FC<Props> = props => {
  // const {name, onUpdateCampaignName, onCreateCampaign} = props;

  // const UpdateCampaignName = (event: any) => {
  //   onUpdateCampaignName(event);
  // };

  // const CreateCampaign = (event: any) => {
  //   onCreateCampaign(event);
  // };

  return (
    <div>
      {/* <Card.Title>Create Campaign</Card.Title>
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
      </Form> */}

      <Recorder />
    </div>
  );
};

export default CampaignsView;
