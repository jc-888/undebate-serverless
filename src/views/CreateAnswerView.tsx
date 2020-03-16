import * as React from 'react';
import {Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap';

type Props = {
  answer: string;
  onUpdateAnswer: (event: any) => void;
  onCreateAnswer: (event: any) => void;
};

const CreateAnswerView: React.FC<Props> = props => {
  const {answer, onUpdateAnswer, onCreateAnswer} = props;

  const UpdateAnswer = (event: any) => {
    onUpdateAnswer(event);
  };

  const CreateAnswer = (event: any) => {
    onCreateAnswer(event);
  };

  return (
    <>
      <Card.Title>Create Answer</Card.Title>
      <Form onSubmit={CreateAnswer}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">Answer</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="basic-title"
            aria-describedby="basic-addon3"
            onChange={UpdateAnswer}
            value={answer}
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Create Answer
        </Button>
      </Form>
    </>
  );
};

export default CreateAnswerView;
