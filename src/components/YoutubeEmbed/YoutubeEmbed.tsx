import ReactPlayer from 'react-player/youtube';
import { useRef, useState } from 'react';
import { OnProgressProps } from 'react-player/base';
import styles from './YoutubeEmbed.styled';
import storage from '../../helpers/storage';

const DEFAULT_STATE: OnProgressProps = {
  playing: false,
  seeking: false,
  loaded: 0,
  loadedSeconds: 0,
  played: 0,
  playedSeconds: 0,
};

function YoutubeEmbed(): JSX.Element {
  const { Container } = styles;

  const videoPlayerRef = useRef(null);

  const [videoState, setVideoState] = useState(
    storage.load('video-progress') ?? DEFAULT_STATE
  );

  const { seeking, playing, playedSeconds } = videoState;

  const progressHandler = (state: OnProgressProps) => {
    if (!seeking && playing) {
      setVideoState({ ...videoState, ...state });
      storage.save('video-progress', { ...videoState, ...state });
    }
  };

  const playPauseHandler = () => {
    setVideoState({ ...videoState, playing: !playing });
    storage.save('video-progress', { ...videoState, playing: !playing });
  };

  return (
    <Container>
      <ReactPlayer
        config={{
          playerVars: {
            start: Math.round(playedSeconds),
          },
        }}
        onPause={playPauseHandler}
        onPlay={playPauseHandler}
        onProgress={progressHandler}
        ref={videoPlayerRef}
        controls
        url="https://www.youtube.com/embed/2EK6FGx16mo?si=FX1p_WD9YbV0YUdH"
      />
    </Container>
  );
}

export default YoutubeEmbed;
