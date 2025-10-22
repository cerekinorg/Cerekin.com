import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

// Simple sound effects using Web Audio API
const playSound = (frequency: number, duration: number) => {
  if (typeof window === 'undefined') return;
  
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
};

export const useSoundEffects = () => {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('cerekin-sound-enabled');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('cerekin-sound-enabled', JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  const playHoverSound = () => {
    if (soundEnabled) playSound(800, 0.1);
  };

  const playClickSound = () => {
    if (soundEnabled) playSound(1000, 0.15);
  };

  const playSuccessSound = () => {
    if (soundEnabled) {
      playSound(600, 0.1);
      setTimeout(() => playSound(800, 0.1), 100);
    }
  };

  return {
    soundEnabled,
    setSoundEnabled,
    playHoverSound,
    playClickSound,
    playSuccessSound,
  };
};

export const SoundToggle = () => {
  const { soundEnabled, setSoundEnabled, playClickSound } = useSoundEffects();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleToggle = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) {
      playClickSound();
    }
  };

  return (
    <div className="relative">
      <motion.button
        onClick={handleToggle}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="glass glass-hover p-3 rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={soundEnabled ? 'Disable sound effects' : 'Enable sound effects'}
      >
        <AnimatePresence mode="wait">
          {soundEnabled ? (
            <motion.div
              key="volume-on"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Volume2 className="w-5 h-5 text-blonde-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="volume-off"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <VolumeX className="w-5 h-5 text-cerekin-text-secondary" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          >
            <div className="glass px-3 py-2 rounded-lg text-sm">
              {soundEnabled ? 'Sound On' : 'Sound Off'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
