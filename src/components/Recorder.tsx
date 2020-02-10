import React, {Component} from 'react';
import {ReactMediaRecorder} from 'react-media-recorder';
import Countdown from 'react-countdown';
import VideoPreview from './VideoPreview';

interface RecorderProps {}

interface RecorderState {}

class Recorder extends Component<RecorderProps, RecorderState> {
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
