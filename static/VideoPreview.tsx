/*
 *
 * Preview video
 *
 * may need to replace <video> tag with react-video
 *
 */
import React, {useRef, useEffect} from 'react';

const VideoPreview = ({stream}: {stream: MediaStream | null}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} width={500} height={500} autoPlay />;
};

export default VideoPreview;
