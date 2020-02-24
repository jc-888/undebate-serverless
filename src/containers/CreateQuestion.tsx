import React, {Component} from 'react';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AppState} from '../redux/rootAppState';
import {AppActions} from '../types/rootType.actions';
import CreateQuestionView from '../views/CreateQuestionView';

import {
  updateQuestion,
  createQuestion,
} from '../redux/actions/questionActions.actions';

interface CreateQuestionPageProps {
  history?: any;
}

interface CreateQuestionPageState {}

type Props = CreateQuestionPageProps &
  CreateQuestionStateProps &
  CreateQuestionDispatchProps;

export class CreateQuestion extends Component<Props, CreateQuestionPageState> {
  onUpdateQuestion = (event: any) => {
    this.props.updateQuestion(event.target.value);
  };

  onCreateQuestion = (event: any) => {
    event.preventDefault();
    this.props.createQuestion(
      this.props.question,
      this.props.campaignID,
      this.props.history,
    );
  };

  render() {
    return (
      <CreateQuestionView
        question={this.props.question}
        onUpdateQuestion={this.onUpdateQuestion}
        onCreateQuestion={this.onCreateQuestion}
      />
    );
  }
}

interface CreateQuestionStateProps {
  campaignID: string;
  question: string;
}

interface CreateQuestionDispatchProps {
  updateQuestion: (event: any) => void;
  createQuestion: (question: string, campaignID: string, history: any) => void;
}

const mapStateToProps = (
  state: AppState,
  ownProps: CreateQuestionPageProps,
): CreateQuestionStateProps => ({
  campaignID: state.Campaign.id,
  question: state.Question.question,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>,
  ownProps: CreateQuestionPageProps,
): CreateQuestionDispatchProps => ({
  updateQuestion: bindActionCreators(updateQuestion, dispatch),
  createQuestion: bindActionCreators(createQuestion, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
