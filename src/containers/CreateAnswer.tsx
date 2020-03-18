import React, {Component} from 'react';
// import {ThunkDispatch} from 'redux-thunk';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// import {AppState} from '../redux/rootAppState';
// import {AppActions} from '../types/rootType.actions';
// import CreateAnswerView from '../views/CreateAnswerView';

import Countdown from 'react-countdown';
import {ReactMediaRecorder} from 'react-media-recorder';
import VideoPreview from '../components/VideoPreview';

import {FirebaseFirestore, FirebaseStorage} from '../firebase';

interface CreateAnswerPageProps {
  history?: any;
  match: any;
}

interface CreateAnswerPageState {
  campaignID: string;
  questionID: string;
  question: string;
  imgURL: string;
}

export class CreateAnswer extends Component<
  CreateAnswerPageProps,
  CreateAnswerPageState
> {
  constructor(props: any) {
    super(props);
    this.state = {campaignID: '', questionID: '', question: '', imgURL: ''};
  }

  componentDidMount = async () => {
    const {campaignID, questionID} = this.props.match.params;

    console.log('campaignID + questionID');
    console.log(campaignID);
    console.log(questionID);
    // Query Question
    await this.getQuestion(campaignID, questionID);

    console.log('Sample');
    const imgURL = await FirebaseStorage.child('sample').getDownloadURL();
    await console.log(imgURL);

    await this.setState({
      imgURL,
    });
  };

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

  addToStorage = async (mediaBlobUrl: any) => {
    console.log('addToStorage');
    console.log(mediaBlobUrl);
    let blob = await fetch(mediaBlobUrl).then(r => r.blob());
    console.log(blob);

    FirebaseStorage.child('sample')
      .put(blob)
      .then(function(snapshot: any) {
        console.log('Uploaded a blob or file!');
        console.log(snapshot);
      });
  };

  render() {
    return (
      <div>
        {this.state.imgURL && (
          <div>
            <h1>MP4</h1>
            <video src={this.state.imgURL} controls></video>
          </div>
        )}

        <ReactMediaRecorder
          video
          render={({
            status,
            previewStream,
            startRecording,
            stopRecording,
            mediaBlobUrl,
          }: any) => (
            <div>
              {/* ask for browser permission to record the video and audio */}
              {status === 'acquiring_media' && (
                <div>
                  <h1>Please Give Permission To Access Webcam And Audio</h1>
                </div>
              )}

              {/* idle mode */}
              {status === 'idle' && (
                <div>
                  <VideoPreview stream={previewStream} />
                  <button onClick={() => startRecording()}>
                    Start Recording
                  </button>
                </div>
              )}

              {/* record with a 60 second countdown */}
              {status === 'recording' && (
                <div>
                  <Countdown
                    date={Date.now() + 60000}
                    onComplete={() => stopRecording()}
                    renderer={({seconds}) => <h1>{seconds}</h1>}
                  />
                  <VideoPreview stream={previewStream} />
                  <button onClick={() => stopRecording()}>
                    Stop Recording
                  </button>
                </div>
              )}

              {/* convert video blob to .mp4 file in order to upload to s3 */}
              {status === 'stopped' && (
                <div>
                  <video src={mediaBlobUrl} controls />
                  <button
                    onClick={() => {
                      this.addToStorage(mediaBlobUrl);
                    }}>
                    Upload
                  </button>
                </div>
              )}
            </div>
          )}
        />
      </div>
    );
  }
}

export default CreateAnswer;
