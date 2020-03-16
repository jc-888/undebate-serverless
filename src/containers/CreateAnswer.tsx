import React, {Component} from 'react';
// import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import {AppState} from '../redux/rootAppState';
// import {AppActions} from '../types/rootType.actions';
import CreateAnswerView from '../views/CreateAnswerView';

import {FirebaseFirestore} from '../firebase';

interface CreateAnswerPageProps {
  history?: any;
  match: any;
}

interface CreateAnswerPageState {
  answer: any;
}

export class CreateAnswer extends Component<
  CreateAnswerPageProps,
  CreateAnswerPageState
> {
  constructor(props: any) {
    super(props);
    this.state = {answer: ''};
  }

  updateAnswer = (value: any) => {
    this.setState({
      answer: value,
    });
  };

  onUpdateAnswer = (event: any) => {
    this.updateAnswer(event.target.value);
  };

  createAnswer = async (answer: string) => {
    const {campaignID} = this.props.match.params;

    await FirebaseFirestore.collection('UndebateAnswers').add({
      answer: answer,
      campaignID: campaignID,
    });
  };

  onCreateAnswer = (event: any) => {
    const {campaignID} = this.props.match.params;

    event.preventDefault();
    this.createAnswer(this.state.answer);
    this.props.history.push(`/campaign/${campaignID}`);
  };

  render() {
    return (
      <CreateAnswerView
        answer={this.state.answer}
        onUpdateAnswer={this.onUpdateAnswer}
        onCreateAnswer={this.onCreateAnswer}
      />
    );
  }
}

export default CreateAnswer;
