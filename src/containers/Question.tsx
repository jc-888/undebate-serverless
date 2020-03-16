import React, {Component} from 'react';
// import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import {AppState} from '../redux/rootAppState';
// import {AppActions} from '../types/rootType.actions';
import QuestionView from '../views/QuestionView';

import {FirebaseFirestore} from '../firebase';

interface QuestionPageProps {
  match: any;
}

interface QuestionPageState {
  campaignID: string;
  questionID: string;
  question: string;
}

export class Question extends Component<QuestionPageProps, QuestionPageState> {
  constructor(props: any) {
    super(props);
    this.state = {campaignID: '', questionID: '', question: ''};
  }

  componentDidMount() {
    const {campaignID, questionID} = this.props.match.params;

    console.log('campaignID + questionID');
    console.log(campaignID);
    console.log(questionID);
    // Query Question
    this.getQuestion(campaignID, questionID);
  }

  getQuestion = async (campaignID: string, questionID: string) => {
    await console.log('getting single question from firebase');

    await FirebaseFirestore.collection('UndebateQuestions')
      .doc(questionID)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          console.log('Document data:', doc.data());
          this.setState({campaignID, questionID: doc.id, ...doc.data()});
        }
      });
  };

  render() {
    return (
      <QuestionView
        campaignID={this.state.campaignID}
        questionID={this.state.questionID}
        question={this.state.question}
      />
    );
  }
}

export default Question;
