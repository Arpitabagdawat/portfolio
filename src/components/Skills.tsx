import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/constants';

const Skills: React.FC = () => {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="skills" className="section-padding container-custom">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy inline-block relative gold-underline">
          Skills & Tools
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="mb-12 last:mb-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-gold rounded-full"></div>
              <h3 className="text-lg md:text-xl font-semibold text-navy">
                {category.category}
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-gray-light rounded-xl p-4 text-center hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col items-center justify-center gap-3 h-full border border-transparent hover:border-gold/20"
                >
                  <skill.icon className="text-3xl text-gold" />
                  <span className="text-sm text-navy font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
