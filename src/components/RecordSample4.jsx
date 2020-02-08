import React, {Component} from 'react';
import {ReactMediaRecorder} from 'react-media-recorder';

class RecordSample4 extends Component {
  timer = (startRecording, stopRecording) => {
    console.log('Starting');
    startRecording();
    setTimeout(function() {
      console.log('Stopping');
      stopRecording();
    }, 5000);
  };

  render() {
    return (
      <div>
        <ReactMediaRecorder
          video
          render={({status, startRecording, stopRecording, mediaBlobUrl}) => (
            <div>
              <p>{status}</p>
              <button
                onClick={() => {
                  this.timer(startRecording, stopRecording);
                }}>
                Start Recording
              </button>
              {/* <button onClick={stopRecording}>Stop Recording</button> */}
              <video src={mediaBlobUrl} controls />
            </div>
          )}
        />
      </div>
    );
  }
}

export default RecordSample4;
