import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/constants';

const Projects: React.FC = () => {
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
    <section id="projects" className="section-padding container-custom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy inline-block relative gold-underline mb-4">
          Featured Projects
        </h2>
        <p className="text-gray max-w-2xl mx-auto">
          Turning data into decisions through end-to-end analysis
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl shadow-card overflow-hidden border border-transparent hover:border-gold/30 hover:shadow-card-hover transition-all duration-300 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden bg-gray-light">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-semibold text-xl text-navy mb-2">{project.title}</h3>
              <p className="text-gray text-sm line-clamp-3 mb-4 flex-grow">
                {project.description}
              </p>
              
              <ul className="mb-4 space-y-1">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-dark">
                    <span className="text-gold mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-navy/5 text-navy text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-gray-light">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
                  >
                    <FiGithub />
                    <span>View on GitHub</span>
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors ml-auto"
                  >
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
