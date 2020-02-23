import * as React from 'react';
import {Card, Form, Button, InputGroup, FormControl} from 'react-bootstrap';

type Props = {
  question: string;
  onUpdateQuestion: (event: any) => void;
  onCreateQuestion: (event: any) => void;
};

const CreateQuestionView: React.FC<Props> = props => {
  const {question, onUpdateQuestion, onCreateQuestion} = props;

  const UpdateQuestion = (event: any) => {
    onUpdateQuestion(event);
  };

  const CreateQuestion = (event: any) => {
    onCreateQuestion(event);
  };

  return (
    <>
      <Card.Title>Create Question</Card.Title>
      <Form onSubmit={CreateQuestion}>
        <InputGroup className="mb-3">
          <FormControl
            id="basic-title"
            aria-describedby="basic-addon3"
            onChange={UpdateQuestion}
            value={question}
          />
        </InputGroup>
        <Button variant="primary" type="submit">
          Create Question
        </Button>
      </Form>
    </>
  );
};

export default CreateQuestionView;
