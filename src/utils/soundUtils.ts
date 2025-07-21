// Sound utility functions for handling audio with fallbacks

// Create a simple beep sound using Web Audio API as fallback
export const createFallbackSound = (frequency: number = 800, duration: number = 100) => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);

    return () => {
      // Cleanup function
    };
  } catch (error) {
    console.warn('Web Audio API not supported, sound disabled');
    return () => {};
  }
};

// Sound configurations
export const SOUND_CONFIGS = {
  themeToggle: {
    frequency: 600,
    duration: 150,
    volume: 0.3,
  },
  navHover: {
    frequency: 800,
    duration: 50,
    volume: 0.1,
  },
  cardHover: {
    frequency: 1000,
    duration: 80,
    volume: 0.2,
  },
  cardClick: {
    frequency: 1200,
    duration: 120,
    volume: 0.4,
  },
};

// Sound player function
export const playSound = (type: keyof typeof SOUND_CONFIGS) => {
  const config = SOUND_CONFIGS[type];
  return createFallbackSound(config.frequency, config.duration);
}; 