import React, {Component} from 'react';
import {RecordRTCPromisesHandler} from 'recordrtc';
import Webcam from 'react-webcam';

// interface Props {
//   webcam: any;
//   recorder: any;
//   videoURL: any;
// }

// interface State {
//   recorder: any;
//   videoURL: any;
// }

// <Props, State>

class RecordSample extends Component {
  state = {
    recorder: null,
    videoURL: null,
  };

  handleUserMedia = () => {
    const stream = this.webcam.stream;
    const recorder = new RecordRTCPromisesHandler(stream, {
      type: 'video',
    });
    this.setState({recorder: recorder});
  };

  start = () => {
    this.state.recorder.startRecording();
  };

  stop = async () => {
    await this.state.recorder.stopRecording();
    let videoURL = await this.state.recorder.getDataURL();
    this.setState({videoURL: videoURL});
    console.log(videoURL);
  };

  render() {
    const {videoURL} = this.state;

    return (
      <div>
        {videoURL ? (
          <video
            id="video"
            style={{height: '480px', width: '640px'}}
            ref="video"
            preload="auto"
            controls
            autoPlay={false}
            src={this.state.videoURL}
          />
        ) : (
          <>
            <Webcam
              ref={e => (this.webcam = e)}
              onUserMedia={this.handleUserMedia}
            />
            <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
          </>
        )}
      </div>
    );
  }
}

export default RecordSample;
