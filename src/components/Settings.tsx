import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings as SettingsIcon, Volume2, VolumeX, Eye, EyeOff } from 'lucide-react';
import { useSound } from './SoundProvider';
import { useSpotlightCursor } from './SpotlightOverlay';

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isSoundEnabled, toggleSound } = useSound();
  const { isEnabled: spotlightEnabled, toggleSpotlight } = useSpotlightCursor();

  return (
    <>
      {/* Settings Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-colors duration-200"
        aria-label="Settings"
      >
        <SettingsIcon size={20} />
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 bg-white dark:bg-dark-900 rounded-xl shadow-xl border border-light-200 dark:border-dark-700 p-4 min-w-[200px]"
          >
            <h3 className="text-lg font-semibold text-light-900 dark:text-white mb-4">
              Settings
            </h3>
            
            <div className="space-y-4">
              {/* Sound Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isSoundEnabled ? (
                    <Volume2 size={18} className="text-primary-600 dark:text-primary-400" />
                  ) : (
                    <VolumeX size={18} className="text-light-500 dark:text-dark-400" />
                  )}
                  <span className="text-light-700 dark:text-dark-300 text-sm">
                    Sound Effects
                  </span>
                </div>
                <button
                  onClick={toggleSound}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                    isSoundEnabled
                      ? 'bg-primary-600 dark:bg-primary-500'
                      : 'bg-light-300 dark:bg-dark-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      isSoundEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Spotlight Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {spotlightEnabled ? (
                    <Eye size={18} className="text-primary-600 dark:text-primary-400" />
                  ) : (
                    <EyeOff size={18} className="text-light-500 dark:text-dark-400" />
                  )}
                  <span className="text-light-700 dark:text-dark-300 text-sm">
                    Spotlight Cursor
                  </span>
                </div>
                <button
                  onClick={toggleSpotlight}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                    spotlightEnabled
                      ? 'bg-primary-600 dark:bg-primary-500'
                      : 'bg-light-300 dark:bg-dark-700'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      spotlightEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full text-xs text-light-500 dark:text-dark-400 hover:text-light-700 dark:hover:text-dark-300 transition-colors duration-200"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Settings; 