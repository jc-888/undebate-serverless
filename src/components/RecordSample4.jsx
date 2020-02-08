import React, {Component} from 'react';
import {ReactMediaRecorder} from 'react-media-recorder';

class RecordSample4 extends Component {
  render() {
    return (
      <div>
        <ReactMediaRecorder
          video
          render={({status, startRecording, stopRecording, mediaBlobUrl}) => (
            <div>
              <p>{status}</p>
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
              <video src={mediaBlobUrl} controls autoplay loop />
            </div>
          )}
        />
      </div>
    );
  }
}

export default RecordSample4;
