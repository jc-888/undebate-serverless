import React, {Component} from 'react';
import {ReactMediaRecorder} from 'react-media-recorder';
import VideoPreview from './VideoPreview';

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
                  <button
                    onClick={() => {
                      this.timer(startRecording, stopRecording);
                    }}>
                    Start Recording
                  </button>
                </div>
              )}
              {status === 'recording' && (
                <div>
                  {/* add 60 second countdown clock here */}
                  <VideoPreview stream={previewStream} />
                </div>
              )}
              {status === 'stopped' && (
                <div>
                  <video src={mediaBlobUrl} controls />
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
