import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-dark-900 dark:bg-black text-white py-12">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="text-2xl font-bold gradient-text mb-2">
              {personalInfo.name}
            </div>
            <p className="text-dark-300 text-sm">
              Full-Stack Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-dark-800 hover:bg-primary-600 rounded-lg transition-all duration-200 text-dark-300 hover:text-white"
              >
                {getSocialIcon(link.icon)}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-dark-300 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-dark-700"
        >
          <p className="text-center text-dark-400 text-xs">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 