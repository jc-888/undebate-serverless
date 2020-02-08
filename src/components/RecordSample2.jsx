// NOT WORKING!

import React from 'react';
import RecordRTC from 'recordrtc';
import VideoSample from './VideoSample';

export default class RecordSample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stream: null,
      url: '',
      videoRecorder: '',
      isRecording: false,
      isUploading: false,
      isPreview: false,
      isDone: false,
      pausing: false,
    };
  }

  hasGetUserMedia() {
    return !!(
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia ||
      navigator.oGetUserMedia
    );
  }
  setupVideo(callback) {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    //check if stream has already been captured
    if (this.state.stream) {
      console.log(this.state.stream);
      this.setState(
        {
          url: window.URL.createObjectURL(this.state.stream),
        },
        callback,
      );
    } else {
      navigator.getUserMedia(
        {
          audio: true,
          video: {
            frameRate: {ideal: 20, max: 30},
          },
          height: '480px',
          width: '640px',
        },
        stream => {
          this.setState(
            {
              stream: stream,
              url: window.URL.createObjectURL(stream),
            },
            callback,
          );
        },
        err => {
          console.log(err.name);
        },
      );
    }
  }
  pauseRecording() {
    this.state.videoRecorder.pauseRecording();
    this.setState({
      pausing: true,
    });
  }
  startRecording() {
    if (this.state.pausing) {
      this.state.videoRecorder.resumeRecording();
      this.setState({
        pausing: false,
      });
      return;
    }
    this.setState(
      {
        videoRecorder: '',
        isUploading: false,
        pausing: false,
        isPreview: false,
        hasRecording: false,
      },
      this.setupVideo.bind(this, () => {
        const videoRecorder = RecordRTC(this.state.stream, {
          type: 'video',
          video: {
            width: 640,
            height: 480,
          },
          canvas: {
            width: 640,
            height: 480,
          },
        });
        videoRecorder.startRecording();
        this.setState({
          videoRecorder: videoRecorder,
          isRecording: true,
        });
      }),
    );
  }
  stopRecording() {
    window.dispatchEvent(new CustomEvent('stopRecording'));
    this.state.videoRecorder.stopRecording(url => {
      this.setState({
        isRecording: false,
        pausing: false,
        hasRecording: true,
      });
    });
  }

  startPreview() {
    this.state.videoRecorder.getDataURL(url => {
      this.setState({
        url: url,
        isPreview: true,
      });
    });
  }
  uploadFile() {
    this.setState({
      pausing: false,
      isRecording: false,
      isUploading: 1,
      isPreview: false,
    });

    this.state.videoRecorder.getDataURL(data => {
      var uploadData = {
        fileName: data.id,
        file: data,
        isBase64: true,
        streams: 'dynamic',
        chunkSize: 'dynamic',
      };

      var uploadInstance = Videos.insert(uploadData, false);

      uploadInstance.on('progress', (progress, file) => {
        this.setState({
          isUploading: progress,
        });
      });

      uploadInstance.on('end', (error, fileObj) => {
        if (error) {
          console.log('Error during upload: ' + error.reason);
        } else {
          console.log(fileObj.meta._id, fileObj.meta.try);
          this.setState({
            id: fileObj._id,
            isDone: true,
          });
        }
      });
      uploadInstance.start();
    });
  }
  render() {
    return (
      <VideoSample
        ref="video"
        isPreview={this.state.isPreview}
        url={this.state.url}
      />
    );
  }
}
