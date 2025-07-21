import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="section-padding bg-light-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-light-600 dark:text-dark-300 max-w-2xl mx-auto">
            My professional journey in software development, from AI research to full-stack engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className="relative mb-12"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent" />
              )}

              <div className="flex gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-6 h-6 bg-white rounded-full" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                                            <h3 className="text-xl font-bold text-light-900 dark:text-white mb-1">
                        {experience.role}
                      </h3>
                      <div className="flex items-center gap-4 text-light-600 dark:text-dark-300">
                        <span className="font-semibold text-primary-600 dark:text-primary-400">
                          {experience.company}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                                     <p className="text-light-600 dark:text-dark-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-light-700 dark:text-dark-200 mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-light-700 dark:text-dark-200 mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-light-600 dark:text-dark-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 