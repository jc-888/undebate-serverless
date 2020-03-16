import React, {Component} from 'react';
// import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import {AppState} from '../redux/rootAppState';
// import {AppActions} from '../types/rootType.actions';
import CreateQuestionView from '../views/CreateQuestionView';

import {FirebaseFirestore} from '../firebase';

interface CreateQuestionPageProps {
  history?: any;
  match: any;
}

interface CreateQuestionPageState {
  question: any;
}

export class CreateQuestion extends Component<
  CreateQuestionPageProps,
  CreateQuestionPageState
> {
  constructor(props: any) {
    super(props);
    this.state = {question: ''};
  }

  updateQuestion = (value: any) => {
    this.setState({
      question: value,
    });
  };

  onUpdateQuestion = (event: any) => {
    this.updateQuestion(event.target.value);
  };

  createQuestion = async (question: string) => {
    const {campaignID} = this.props.match.params;

    await FirebaseFirestore.collection('UndebateQuestions').add({
      question: question,
      campaignID: campaignID,
    });
  };

  onCreateQuestion = (event: any) => {
    event.preventDefault();
    this.createQuestion(this.state.question);
    this.props.history.push('/');
  };

  render() {
    return (
      <CreateQuestionView
        question={this.state.question}
        onUpdateQuestion={this.onUpdateQuestion}
        onCreateQuestion={this.onCreateQuestion}
      />
    );
  }
}

export default CreateQuestion;
