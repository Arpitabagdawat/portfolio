import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiCheckCircle, FiAward } from 'react-icons/fi';
import { experiences } from '../data/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const }
  }
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy inline-block relative">
            Work Experience
            <span className="block w-16 h-1 bg-gold mx-auto mt-2 rounded-full gold-underline"></span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: 'easeInOut' as const }}
          ></motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col gap-10 relative"
          >
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center justify-between md:justify-normal w-full group">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[7px] md:left-1/2 w-4 h-4 rounded-full bg-gold transform -translate-x-1/2 border-4 border-white shadow z-10"></div>
                  
                  {/* Content Container */}
                  <motion.div 
                    variants={cardVariants}
                    className={`w-full ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] ${isEven ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}
                  >
                    <div className="bg-white rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300 p-6 border border-gray-light/50">
                      
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-navy">{exp.title}</h3>
                          <div className="flex items-center gap-2 mt-1 text-gold font-medium">
                            <FiBriefcase className="shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <span className="bg-gold/10 text-gold rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap">
                          {exp.type}
                        </span>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-2 text-gray text-sm mb-5">
                        <FiCalendar className="shrink-0" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Responsibilities */}
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="mb-4">
                          <ul className="space-y-2">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-dark text-sm">
                                <FiCheckCircle className="shrink-0 text-gold mt-1 w-4 h-4" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <h4 className="text-sm font-semibold text-navy mb-2">Key Achievements:</h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achieve, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-dark text-sm font-medium bg-gray-50 p-2 rounded-md">
                                <FiAward className="shrink-0 text-gold mt-0.5 w-4 h-4" />
                                <span>{achieve}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
