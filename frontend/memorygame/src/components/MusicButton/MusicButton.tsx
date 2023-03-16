import React, { useState, useRef, useEffect } from 'react';
import './MusicButton.css'
import volume from './volume.png'
import mute from './mute.png'
const bgm = require('./bgm.mp3')

function MusicButton(): JSX.Element {
    const [isMuted, setIsMuted] = useState<boolean>(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    function toggleMute(): void {
        setIsMuted((prevMuted) => !prevMuted);
        if (audioRef.current?.paused) {
            audioRef.current?.play()
        }
        audioRef.current!.muted = !audioRef.current!.muted;
    }

    return (
        <div>
            <audio ref={audioRef} src={bgm} muted={isMuted} loop />
            <button className="music-button" onClick={toggleMute}><img className='music-img' src={isMuted ? mute : volume} alt="" /></button>
        </div>
    );
}
export default MusicButton;