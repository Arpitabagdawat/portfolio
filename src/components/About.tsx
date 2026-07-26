import React from 'react';
import { motion } from 'framer-motion';
import { FiCrosshair, FiEye } from 'react-icons/fi';

const navButtons = [
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: 'easeOut' as const,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const }
  }
};

const About: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy inline-block relative">
              About Me
              <span className="block w-16 h-1 bg-gold mx-auto mt-2 rounded-full gold-underline"></span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            {/* Left Column - Image */}
            <motion.div 
              variants={itemVariants}
              className="w-full lg:w-1/3 flex justify-center relative"
            >
              <div className="relative">
                {/* Gold accent background */}
                <div className="absolute inset-0 bg-gold rounded-2xl transform translate-x-3 translate-y-3 -z-10 opacity-50"></div>
                <img 
                  src="/images/profile.jpeg" 
                  alt="Profile" 
                  className="w-full max-w-[350px] rounded-2xl shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right Column - Text & Cards */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <motion.div variants={itemVariants} className="text-gray-dark text-lg leading-relaxed">
                <p>
                  I'm an AI & Data Science Graduate from Mahakal Institute of Technology, Ujjain, with a CGPA of 7.43/10. 
                  My work focuses on data cleaning, exploratory data analysis, SQL querying, dashboard development, KPI reporting, 
                  and business insights using Python, SQL, Power BI, and Excel.
                </p>
                <p className="mt-4">
                  I've developed end-to-end projects including a Power BI dashboard analyzing 50,000+ crowdfunding records and 
                  a customer churn prediction model achieving 89% accuracy. During my internship at Indus AI, I optimized SQL 
                  queries and created dashboards that improved reporting efficiency by 30%. I enjoy transforming complex data 
                  into clear business decisions through analytical thinking and effective communication.
                </p>
              </motion.div>

              {/* Mission & Vision Cards */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {/* Mission Card */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gray-light rounded-xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 bg-navy/10 rounded-full flex items-center justify-center mb-4 text-navy">
                    <FiCrosshair className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Mission</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    To transform complex datasets into clear insights that help businesses make smarter decisions.
                  </p>
                </motion.div>

                {/* Vision Card */}
                <motion.div 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gray-light rounded-xl p-6 shadow-sm border border-gray-200"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold">
                    <FiEye className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Vision</h3>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    To become a highly skilled Data Analyst bridging the gap between raw data and strategic business decisions.
                  </p>
                </motion.div>
              </motion.div>

              {/* Quick Navigation Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-4">
                {navButtons.map((btn) => (
                  <a
                    key={btn.label}
                    href={btn.href}
                    onClick={(e) => handleNavClick(e, btn.href)}
                    className="border border-navy/20 rounded-full px-5 py-2 text-sm text-navy hover:bg-navy hover:text-white transition duration-300"
                  >
                    {btn.label}
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
