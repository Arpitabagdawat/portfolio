import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiX, FiMaximize2 } from 'react-icons/fi';
import { certifications } from '../data/constants';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  const selectedCertificate = selectedCert !== null ? certifications[selectedCert] : null;

  return (
    <section id="certifications" className="section-padding container-custom bg-gray-light">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 relative inline-block">
          Certifications
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gold rounded-full transform translate-y-2"></span>
        </h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col group"
            onClick={() => setSelectedCert(index)}
          >
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FiMaximize2 className="text-white text-3xl drop-shadow-md" />
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg text-navy mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <div className="flex items-center text-gray text-sm mb-4">
                  <FiAward className="text-gold mr-2 flex-shrink-0" />
                  <span className="truncate">{cert.issuer}</span>
                </div>
              </div>
              <div className="text-gold font-medium text-sm flex items-center group-hover:text-gold-light transition-colors">
                View Certificate
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedCert && selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-50"
              onClick={() => setSelectedCert(null)}
              aria-label="Close modal"
            >
              <FiX className="text-3xl" />
            </button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
            >
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate full view`}
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
