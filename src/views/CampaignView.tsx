import * as React from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

type Props = {
  id: string;
  name: string;
  questions: [];
};

const CampaignView: React.FC<Props> = props => {
  const {id, name, questions} = props;

  return (
    <>
      <Card.Title className="question-title">Campaign: {name}</Card.Title>

      <ListGroup>
        {questions.map((question: any) => (
          <ListGroup.Item key={question.question}>
            <Link to={`/question/${question.id}`}>{question.question}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Link to={`/campagin/${id}/create-question`}>
        <Button variant="dark">Add Question</Button>
      </Link>
    </>
  );
};

export default CampaignView;
