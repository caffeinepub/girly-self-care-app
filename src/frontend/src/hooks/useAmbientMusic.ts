import { useEffect, useRef, useState } from 'react';

const MUSIC_URL = 'https://assets.mixkit.co/music/preview/mixkit-soft-piano-ambient-111.mp3';
const MUSIC_STATE_KEY = 'ambient-music-state';

interface MusicState {
  isPlaying: boolean;
  isMuted: boolean;
}

export function useAmbientMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.current = audio;

    const savedState = localStorage.getItem(MUSIC_STATE_KEY);
    if (savedState) {
      try {
        const state: MusicState = JSON.parse(savedState);
        setIsMuted(state.isMuted);
        audio.muted = state.isMuted;
        
        if (state.isPlaying) {
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch(() => {
            setIsPlaying(false);
          });
        }
      } catch (e) {
        // Ignore parse errors
      }
    }

    audio.addEventListener('canplaythrough', () => {
      setIsReady(true);
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = () => {
    if (!audioRef.current) return;
    
    audioRef.current.play()
      .then(() => {
        setIsPlaying(true);
        saveState(true, isMuted);
      })
      .catch((error) => {
        console.warn('Audio play failed:', error);
        setIsPlaying(false);
      });
  };

  const pause = () => {
    if (!audioRef.current) return;
    
    audioRef.current.pause();
    setIsPlaying(false);
    saveState(false, isMuted);
  };

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    const newMuted = !isMuted;
    audioRef.current.muted = newMuted;
    setIsMuted(newMuted);
    saveState(isPlaying, newMuted);
  };

  const saveState = (playing: boolean, muted: boolean) => {
    const state: MusicState = { isPlaying: playing, isMuted: muted };
    localStorage.setItem(MUSIC_STATE_KEY, JSON.stringify(state));
  };

  return {
    isPlaying,
    isMuted,
    isReady,
    play,
    pause,
    togglePlay,
    toggleMute,
  };
}
