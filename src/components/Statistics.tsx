import React from 'react';
import { motion } from 'framer-motion';
import { statistics } from '../data/constants';
import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
  value: number;
  label: string;
  suffix: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix }) => {
  const { count, ref } = useCountUp(value, 2000);

  return (
    <div className="flex flex-col items-center text-center p-4">
      <div 
        ref={ref} 
        className="text-3xl md:text-4xl font-bold text-gold mb-2"
      >
        {count}{suffix}
      </div>
      <div className="text-white/80 text-sm font-medium tracking-wide">
        {label}
      </div>
    </div>
  );
};

export default function Statistics() {
  return (
    <section className="bg-navy py-16 md:py-20 w-full relative overflow-hidden">
      {/* Optional: subtle background pattern or overlay could go here */}
      <div className="absolute inset-0 bg-navy-dark opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block text-center">
            By The Numbers
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gold rounded-full transform translate-y-2"></span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' as const, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-start"
        >
          {statistics.map((stat, index) => (
            <StatItem 
              key={index} 
              value={stat.value} 
              label={stat.label} 
              suffix={stat.suffix} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
