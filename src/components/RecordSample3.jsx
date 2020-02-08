import React, {Component} from 'react';

let constraintObj = {
  audio: true,
  video: {
    facingMode: 'user',
    width: {min: 640, ideal: 1280, max: 1920},
    height: {min: 480, ideal: 720, max: 1080},
  },
};

class RecordSample3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mediaRecorder: null,
      chunks: [],
      videoURL: null,
    };
  }

  componentDidMount = async () => {
    await console.log('Getting Access To Video And Audio');
    const mediaStreamObj = await navigator.mediaDevices.getUserMedia(
      constraintObj,
    );
    await console.log('Access Granted');
    await console.log(mediaStreamObj);

    await console.log('Creating a Recorder');
    let mediaRecorder = await new MediaRecorder(mediaStreamObj);
    console.log(mediaRecorder);

    await console.log('Setting Recorder In State');
    await this.setState({
      mediaRecorder,
    });
  };

  start = () => {
    console.log('START');
    this.state.mediaRecorder.start();
  };

  stop = () => {
    console.log('STOP');
    this.state.mediaRecorder.stop();

    console.log('Creating Blob');
    let blob = new Blob(this.state.chunks, {type: 'video/mp4;'});

    console.log('Emptying Chunks State');
    this.setState({
      chunks: [],
    });

    console.log('Creating Video URL');
    let videoURL = window.URL.createObjectURL(blob);

    this.setState({
      videoURL,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.start}>START</button>
        <button onClick={this.stop}>STOP</button>

        {this.state.videoURL ? (
          <div>
            <p>Video URL Created</p>
            <video src={this.state.videoURL} />
          </div>
        ) : (
          <div>
            <p>No Video URL</p>
          </div>
        )}
      </div>
    );
  }
}

export default RecordSample3;
