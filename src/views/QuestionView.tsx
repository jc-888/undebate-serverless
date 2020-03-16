import * as React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

type Props = {
  campaignID: string;
  questionID: string;
  question: string;
};

const QuestionView: React.FC<Props> = props => {
  const {campaignID, questionID, question} = props;

  return (
    <>
      <Card.Title className="question-title">Question: {question}</Card.Title>

      <Link to={`/campaign/${campaignID}/question/${questionID}/create-answer`}>
        <Button variant="dark">Add Answer</Button>
      </Link>
    </>
  );
};

export default QuestionView;
