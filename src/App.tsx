import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { SoundProvider } from './components/SoundProvider';
import { SpotlightOverlay, useSpotlightCursor } from './components/SpotlightOverlay';
import Settings from './components/Settings';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or default to dark mode
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <SoundProvider darkMode={darkMode}>
      <AppContent darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </SoundProvider>
  );
}

function AppContent({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  const { isEnabled: spotlightEnabled } = useSpotlightCursor(true);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
      <SpotlightOverlay enabled={spotlightEnabled} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Settings />
    </div>
  );
}

export default App;
