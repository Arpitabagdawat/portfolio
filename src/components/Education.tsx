import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiBookOpen } from 'react-icons/fi';
import { education } from '../data/constants';

const Education: React.FC = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="education" className="section-padding container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy inline-block relative gold-underline">
          Education
        </h2>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 -translate-x-1/2 rounded-full hidden md:block"></div>
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/30 rounded-full md:hidden"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-6 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 top-6 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-sm -translate-x-1/2 z-10 hidden md:block"></div>
              <div className="absolute left-6 top-6 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-sm -translate-x-1/2 z-10 md:hidden"></div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-1/2"></div>

              {/* Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0">
                <div className={`bg-white rounded-xl shadow-card p-6 hover:shadow-card-hover transition-all duration-300 ${
                  index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'
                }`}>
                  <h3 className="text-xl font-semibold text-navy mb-1">{item.degree}</h3>
                  {item.field && <p className="text-gray-dark mb-4">{item.field}</p>}
                  
                  <div className="flex flex-col gap-2 mb-4">
                    {item.institution && (
                      <div className="flex items-center gap-2 text-gold">
                        <FiBookOpen className="shrink-0" />
                        <span className="text-sm font-medium">{item.institution}</span>
                      </div>
                    )}
                    {item.period && (
                      <div className="flex items-center gap-2 text-gray">
                        <FiCalendar className="shrink-0" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                    )}
                  </div>

                  <div className="inline-block bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full text-sm font-medium">
                    {item.score}
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

export default Education;
