import React, { createContext, useContext, useState, useEffect } from 'react';
import useSoundHook from 'use-sound';
import { playSound } from '../utils/soundUtils';

interface SoundContextType {
  playThemeToggle: () => void;
  playNavClick: () => void;
  playCardHover: () => void;
  isSoundEnabled: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

interface SoundProviderProps {
  children: React.ReactNode;
  darkMode?: boolean;
}

export const SoundProvider: React.FC<SoundProviderProps> = ({ children, darkMode = false }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [prefersReducedSound, setPrefersReducedSound] = useState(false);

  // Check user preferences on mount
  useEffect(() => {
    const soundQuery = window.matchMedia('(prefers-reduced-sound: reduce)');
    
    setPrefersReducedSound(soundQuery.matches);

    const handleSoundChange = (e: MediaQueryListEvent) => setPrefersReducedSound(e.matches);

    soundQuery.addEventListener('change', handleSoundChange);

    return () => {
      soundQuery.removeEventListener('change', handleSoundChange);
    };
  }, []);

  // Sound effects with actual audio files (with fallback to Web Audio API)
  const [playSwitchOn] = useSoundHook('/sounds/switch-on.mp3', {
    volume: 0.4,
    soundEnabled: isSoundEnabled && !prefersReducedSound,
  });

  const [playSwitchOff] = useSoundHook('/sounds/switch-off.mp3', {
    volume: 0.4,
    soundEnabled: isSoundEnabled && !prefersReducedSound,
  });

  const [playPlungerImmediate] = useSoundHook('/sounds/plunger-immediate.mp3', {
    volume: 0.3,
    soundEnabled: isSoundEnabled && !prefersReducedSound,
  });

  const [playMenuOpenSofter] = useSoundHook('/sounds/menu-open-softer.mp3', {
    volume: 0.2,
    soundEnabled: isSoundEnabled && !prefersReducedSound,
  });

  // Sound effect functions with fallback
  const playThemeToggle = () => {
    if (isSoundEnabled && !prefersReducedSound) {
      try {
        // Play switch-on for light mode, switch-off for dark mode
        if (darkMode) {
          playSwitchOff(); // Switching from dark to light
        } else {
          playSwitchOn(); // Switching from light to dark
        }
      } catch (error) {
        // Fallback to Web Audio API
        playSound('themeToggle');
      }
    }
  };

  const playNavClick = () => {
    if (isSoundEnabled && !prefersReducedSound) {
      try {
        playMenuOpenSofter();
      } catch (error) {
        // Fallback to Web Audio API
        playSound('navHover');
      }
    }
  };

  const playCardHover = () => {
    if (isSoundEnabled && !prefersReducedSound) {
      try {
        playPlungerImmediate();
      } catch (error) {
        // Fallback to Web Audio API
        playSound('cardHover');
      }
    }
  };

  const playCardClick = () => {
    if (isSoundEnabled && !prefersReducedSound) {
      try {
        playPlungerImmediate();
      } catch (error) {
        // Fallback to Web Audio API
        playSound('cardClick');
      }
    }
  };

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  const value: SoundContextType = {
    playThemeToggle,
    playNavClick,
    playCardHover,
    isSoundEnabled,
    toggleSound,
  };

  return (
    <SoundContext.Provider value={value}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = (): SoundContextType => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}; 