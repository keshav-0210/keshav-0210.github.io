'use client';

import { useEffect, useRef, useState } from 'react';

export function useSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Check for mute preference in localStorage
    const savedMuteState = localStorage.getItem('keshav_audio_muted');
    if (savedMuteState) {
      setIsMuted(JSON.parse(savedMuteState));
    }
  }, []);

  const play = (soundPath: string) => {
    if (isMuted) return;

    // Stop any currently playing sound
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Create new audio element
    const audio = new Audio(soundPath);
    audio.volume = 0.5;
    audio.play().catch(err => console.warn('Audio play failed:', err));
    audioRef.current = audio;
  };

  const toggleMute = () => {
    const newState = !isMuted;
    setIsMuted(newState);
    localStorage.setItem('keshav_audio_muted', JSON.stringify(newState));
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return {
    play,
    toggleMute,
    isMuted,
    stopSound,
  };
}
