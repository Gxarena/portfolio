import { motion } from 'framer-motion';
import { Github, ExternalLink, Smartphone } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useSound } from './SoundProvider';

const Projects = () => {
  const { playCardHover } = useSound();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getProjectImage = (imagePath: string | any) => {
    // Handle null/undefined images
    if (!imagePath) {
      return `https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Project+Image`;
    }
    
    // If imagePath is already a URL (imported image), return it directly
    if (typeof imagePath === 'string' && imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // If it's an imported image (has default property), return the default
    if (imagePath && typeof imagePath === 'object' && imagePath.default) {
      return imagePath.default;
    }
    
    // If it's a string path, return it directly (for public folder images)
    if (typeof imagePath === 'string') {
      return imagePath;
    }
    
    // Fallback to placeholder
    return `https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Project+Image`;
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-light-600 dark:text-dark-300 max-w-2xl mx-auto">
            A showcase of my recent work, from AI applications to blockchain solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              onClick={() => project.github && window.open(project.github, '_blank')}
              className="group relative bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover hover:cursor-pointer"
                              onMouseEnter={playCardHover}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={getProjectImage(project.image)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-light-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-light-600 dark:text-dark-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-white hover:bg-primary-500 hover:text-white rounded-lg transition-colors duration-200"
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                  
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-white hover:bg-primary-500 hover:text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                  
                  {project.appStore && (
                    <motion.a
                      href={project.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-100 dark:bg-dark-800 text-dark-700 dark:text-white hover:bg-primary-500 hover:text-white rounded-lg transition-colors duration-200"
                    >
                      <Smartphone size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-lg font-semibold mb-2">Learn More</h4>
                  <p className="text-sm opacity-90">
                    {project.longDescription.substring(0, 120)}...
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Gxarena"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 