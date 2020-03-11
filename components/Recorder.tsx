// IMPORTANT: s3 object -> "sample1.mp4" is hardcoded; must change to a unique id

// this was created to test front-loading everything
// - recording webcam on the browser and directly upload to s3
// - s3 video hosting and making the whole app serverless (webRTC not needed)

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

  // check if "sample.mp4" is pressent in s3
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

  // hardcoded .mp4 name (must change to the s3 key/id that is given when successfully uploaded)
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
        {/* if "sample.mp4" is present in s3 */}
        {this.state.imgURL && (
          <div>
            <h1>sample.mp4</h1>
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

export default Recorder;
