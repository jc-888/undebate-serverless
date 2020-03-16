import * as React from 'react';
import {Card, ListGroup, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

type Props = {
  campaignID: string;
  name: string;
  questions: [];
};

const CampaignView: React.FC<Props> = props => {
  const {campaignID, name, questions} = props;

  return (
    <>
      <Card.Title className="question-title">Campaign: {name}</Card.Title>

      <ListGroup>
        {questions.map((question: any) => (
          <ListGroup.Item key={question.question}>
            <Link
              to={`/campaign/${campaignID}/question/${question.questionID}`}>
              {question.question}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Link to={`/campaign/${campaignID}/create-question`}>
        <Button variant="dark">Add Question</Button>
      </Link>
    </>
  );
};

export default CampaignView;
