import React, {Component} from 'react';
import {ReactMediaRecorder} from 'react-media-recorder';

class Recorder extends Component {
  timer = (startRecording: any, stopRecording: any) => {
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
          render={({
            status,
            startRecording,
            stopRecording,
            mediaBlobUrl,
          }: any) => (
            <div>
              <p>{status}</p>
              <button
                onClick={() => {
                  this.timer(startRecording, stopRecording);
                }}>
                Start Recording
              </button>
              <video src={mediaBlobUrl} controls />
            </div>
          )}
        />
      </div>
    );
  }
}

export default Recorder;
