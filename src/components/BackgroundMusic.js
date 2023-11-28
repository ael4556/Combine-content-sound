import React, { useState, useRef } from "react";
import soundURL from "../sound/backgroundmusic.mp3";
import SoundOn from "../components/icon/music-note.svg";
import SoundOff from "../components/icon/music-note-slash.svg";

const BackgroundMusic = () => {
  const [play, setPlay] = useState(true);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setPlay(!play);

    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    audioRef.current.loop = true;
  };

  const IconPause = () => {
    return <img src={SoundOff} alt="Pause Icon" className="w-8 h-8" />;
  };

  const IconPlay = () => {
    return <img src={SoundOn} alt="Play Icon" className="w-8 h-8" />;
  };

  return (
    <div className="fixed right-2 p-4 top-16 hover:-translate-y-1 hover:scale-110 bg-green-500 hover:bg-green-700 duration-300 rounded-2xl transition ease-in-out delay-50 hover:shadow-md py-2 px-2">
      <button id="audioBtn" onClick={togglePlay}>
        {play ? <IconPause /> : <IconPlay />}
      </button>
      <audio ref={audioRef} src={soundURL} />
    </div>
  );
};

export default BackgroundMusic;
