import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { useSound } from './SoundProvider';

const Hero = () => {
  const { playCardHover } = useSound();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/10 dark:to-transparent" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-600 dark:text-primary-400 font-medium mb-4"
          >
            Hi there, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Titles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-light-600 dark:text-dark-300 mb-8"
          >
            {personalInfo.titles.map((title, index) => (
              <span key={index} className="block flex flex-col">
                {title}
                {index < personalInfo.titles.length - 1 && (
                  <span className="text-primary-500 dark:text-primary-400 mx-2">•</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-light-600 dark:text-dark-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.about}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scrollToSection('#projects');
              }}
              onMouseEnter={playCardHover}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              View My Work
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playCardHover}
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center items-center gap-6 mb-16"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white dark:bg-dark-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-dark-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
              >
                {getSocialIcon(link.icon)}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
                        <motion.button
              onClick={() => {
                scrollToSection('#experience');
              }}
              onMouseEnter={playCardHover}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 text-light-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <ArrowDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 