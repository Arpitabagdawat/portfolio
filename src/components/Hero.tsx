import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiMapPin, FiBriefcase, FiGlobe } from 'react-icons/fi';
import { LuGraduationCap } from 'react-icons/lu';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-20 min-h-[90vh] flex items-center relative overflow-hidden bg-white">
      {/* Decorative background elements (optional) */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gray-light rounded-full blur-3xl opacity-50 -z-10 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content (Text) */}
          <motion.div 
            className="w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span variants={itemVariants} className="text-gold font-bold tracking-wider uppercase text-sm mb-3">
              Hello, I'm
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="text-navy font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              Arpita Bagdawat
            </motion.h1>
            
            <motion.h2 variants={itemVariants} className="text-gold text-xl md:text-2xl font-semibold mb-6">
              Data Analyst | AI & Data Science Graduate
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-gray text-base leading-relaxed max-w-xl mb-8">
              AI & Data Science graduate skilled in SQL, Python, Power BI, and Excel, with hands-on experience transforming raw data into actionable insights. During my internship at Indus AI, I analyzed and cleaned datasets containing 10,000+ records and developed interactive dashboards that improved reporting efficiency by 30%. I enjoy solving business problems through data, from crowdfunding trend analysis to customer churn prediction, while combining analytical thinking with effective data storytelling. Currently seeking full-time Data Analyst opportunities where I can create measurable business impact.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
              <a 
                href="/resume.pdf" 
                download
                className="bg-gold text-navy font-bold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-gold-light transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                <FiDownload />
                <span>Download Resume</span>
              </a>
              <a 
                href="#about"
                className="border-2 border-navy text-navy font-semibold py-3 px-6 rounded-full hover:bg-navy hover:text-white transition-all hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More About Me
              </a>
              <a 
                href="#contact"
                className="border-2 border-gold text-gold font-semibold py-3 px-6 rounded-full hover:bg-gold hover:text-navy transition-all hover:-translate-y-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
            </motion.div>
            
            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 mb-10">
              <a href="https://github.com/Arpitabagdawat" target="_blank" rel="noopener noreferrer" className="bg-gray-light p-3 rounded-full text-navy hover:text-gold hover:bg-navy transition-all hover:-translate-y-1 shadow-sm" aria-label="GitHub">
                <FiGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/arpitabagdawat-dataanalyst/" target="_blank" rel="noopener noreferrer" className="bg-gray-light p-3 rounded-full text-navy hover:text-gold hover:bg-navy transition-all hover:-translate-y-1 shadow-sm" aria-label="LinkedIn">
                <FiLinkedin size={22} />
              </a>
              <a href="mailto:arpitabagdawat@gmail.com" className="bg-gray-light p-3 rounded-full text-navy hover:text-gold hover:bg-navy transition-all hover:-translate-y-1 shadow-sm" aria-label="Email">
                <FiMail size={22} />
              </a>
            </motion.div>
            
            {/* Quick Info Badges */}
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4"
              variants={containerVariants}
            >
              <motion.div variants={badgeVariants} className="flex items-center gap-2 text-sm text-gray bg-gray-light/50 px-3 py-1.5 rounded-full border border-gray-light">
                <FiMapPin className="text-gold" />
                <span>Ujjain, MP, India</span>
              </motion.div>
              <motion.div variants={badgeVariants} className="flex items-center gap-2 text-sm text-gray bg-gray-light/50 px-3 py-1.5 rounded-full border border-gray-light">
                <LuGraduationCap className="text-gold" />
                <span>B.Tech AI & DS 2022–2026</span>
              </motion.div>
              <motion.div variants={badgeVariants} className="flex items-center gap-2 text-sm text-gray bg-gray-light/50 px-3 py-1.5 rounded-full border border-gray-light">
                <FiBriefcase className="text-gold" />
                <span>Data Analyst Intern · Hands-on Experience</span>
              </motion.div>
              <motion.div variants={badgeVariants} className="flex items-center gap-2 text-sm text-gray bg-gray-light/50 px-3 py-1.5 rounded-full border border-gray-light">
                <FiGlobe className="text-gold" />
                <span>Open to Remote & Relocation</span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content (Image) */}
          <motion.div 
            className="w-full md:w-[40%] flex justify-center md:justify-end relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Background shape behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] lg:w-[430px] lg:h-[430px] bg-gold/10 rounded-full -z-10"></div>
            
            <div className="relative rounded-full p-1 border-4 border-gold bg-white shadow-xl overflow-hidden">
              <img 
                src="/images/profile.png" 
                alt="Arpita Bagdawat" 
                loading="lazy"
                className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] object-cover rounded-full"
              />
            </div>
            
            {/* Optional floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-12 h-12 bg-navy rounded-full flex items-center justify-center text-gold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' as const }}
            >
              <FiBriefcase size={20} />
            </motion.div>
            <motion.div 
              className="absolute -bottom-2 -left-2 w-14 h-14 bg-white border-2 border-gold rounded-full flex items-center justify-center text-navy shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' as const, delay: 1 }}
            >
              <LuGraduationCap size={24} />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
