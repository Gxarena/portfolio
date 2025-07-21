import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Github, Linkedin } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-lg text-light-600 dark:text-dark-300 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's work together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-light-600 dark:text-dark-300 leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-dark-900 rounded-lg shadow-lg"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Email</h4>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-dark-900 rounded-lg shadow-lg"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                  <MessageSquare className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Location</h4>
                  <p className="text-light-600 dark:text-dark-300">{personalInfo.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white dark:bg-dark-900 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-light-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {link.name === 'GitHub' ? (
                      <Github size={24} />
                    ) : link.name === 'LinkedIn' ? (
                      <Linkedin size={24} />
                    ) : (
                      <Mail size={24} />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark-900 rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                                  <label htmlFor="name" className="block text-sm font-medium text-light-700 dark:text-dark-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                                  <label htmlFor="email" className="block text-sm font-medium text-light-700 dark:text-dark-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                                  <label htmlFor="message" className="block text-sm font-medium text-light-700 dark:text-dark-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-dark-900 dark:text-white placeholder-dark-500 dark:placeholder-dark-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 