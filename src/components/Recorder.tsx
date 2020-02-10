import React, {Component} from 'react';
import {ReactMediaRecorder} from 'react-media-recorder';
import Countdown from 'react-countdown';
import VideoPreview from './VideoPreview';

import {Storage} from 'aws-amplify';

interface RecorderProps {}

interface RecorderState {
  imgURL: string;
}

class Recorder extends Component<RecorderProps, RecorderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      imgURL: '',
    };
  }
  componentDidMount() {
    Storage.get('sample1.mp4')
      .then(result => {
        console.log(result);
        this.setState({
          imgURL: result.toString(),
        });
      })
      .catch(err => console.log(err));
  }

  addToStorage = async (mediaBlobUrl: any) => {
    console.log('addToStorage');
    console.log(mediaBlobUrl);
    let blob = await fetch(mediaBlobUrl).then(r => r.blob());
    console.log(blob);

    Storage.put('sample1.mp4', blob, {
      contentType: 'video/mp4',
    })
      .then(result => {
        console.log('Success!');
        console.log(result);
      })
      .catch(err => {
        console.log('Error!');
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Video If Available</h1>
          <video src={this.state.imgURL} controls></video>
        </div>

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
              {status === 'acquiring_media' && (
                <div>
                  <h1>Please Give Permission To Access Webcam And Audio</h1>
                </div>
              )}
              {status === 'idle' && (
                <div>
                  <button onClick={() => startRecording()}>
                    Start Recording
                  </button>
                </div>
              )}
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
              {status === 'stopped' && (
                <div>
                  <video src={mediaBlobUrl} controls />
                  <button
                    onClick={() => {
                      this.addToStorage(mediaBlobUrl);
                    }}>
                    Use
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

export default Recorder;
