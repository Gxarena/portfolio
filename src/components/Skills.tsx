import { motion } from 'framer-motion';
import { skills, skillCategories } from '../data/portfolio';

const Skills = () => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-500';
      case 'advanced':
        return 'bg-blue-500';
      case 'intermediate':
        return 'bg-yellow-500';
      case 'beginner':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'expert':
        return 100;
      case 'advanced':
        return 75;
      case 'intermediate':
        return 50;
      case 'beginner':
        return 25;
      default:
        return 25;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding bg-light-50 dark:bg-dark-800">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-lg text-light-600 dark:text-dark-300 max-w-2xl mx-auto">
            My technical toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(skillCategories).map(([categoryKey, categoryName]) => {
            const categorySkills = skills.filter(skill => skill.category === categoryKey);
            
            return (
              <motion.div
                key={categoryKey}
                variants={itemVariants}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-light-900 dark:text-white mb-6 text-center">
                  {categoryName}
                </h3>
                
                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-light-700 dark:text-dark-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-xs text-light-500 dark:text-dark-400 capitalize">
                          {skill.level}
                        </span>
                      </div>
                      
                                             <div className="w-full bg-light-200 dark:bg-dark-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: getLevelWidth(skill.level) + '%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
                          <h4 className="text-lg font-semibold text-light-900 dark:text-white mb-4">
            Skill Levels
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { level: 'expert', label: 'Expert', color: 'bg-green-500' },
              { level: 'advanced', label: 'Advanced', color: 'bg-blue-500' },
              { level: 'intermediate', label: 'Intermediate', color: 'bg-yellow-500' },
              { level: 'beginner', label: 'Beginner', color: 'bg-gray-400' }
            ].map((item) => (
              <div key={item.level} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                                 <span className="text-light-600 dark:text-dark-300 text-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 