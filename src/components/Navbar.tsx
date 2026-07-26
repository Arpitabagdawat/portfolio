import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

interface NavbarProps {
  activeSection: string;
}

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Education', href: 'education' },
  { name: 'Projects', href: 'projects' },
  { name: 'Skills', href: 'skills' },
  { name: 'Certifications', href: 'certifications' },
  { name: 'Contact', href: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={scrollToTop}
            className="text-2xl font-extrabold text-navy tracking-tighter flex items-center"
            aria-label="Go to top"
          >
            A<span className="text-gold">B</span>
          </a>
          <span className="text-sm font-medium text-gray border-l border-gray-light pl-3 hidden sm:block">
            Data Analyst
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium transition-colors relative pb-1 ${
                    activeSection === link.href ? 'text-gold' : 'text-navy hover:text-gold'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute left-0 bottom-0 w-full h-[2px] bg-gold"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy font-semibold px-5 py-2 rounded-full text-sm flex items-center gap-2 hover:bg-gold-light transition-all hover:scale-105 active:scale-95 shadow-sm"
          >
            <span>Download CV</span>
            <FiDownload />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-navy p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy/50 z-40 lg:hidden backdrop-blur-sm"
              aria-hidden="true"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 flex flex-col pt-20 px-6 pb-6 lg:hidden overflow-y-auto"
            >
              <button
                className="absolute top-6 right-6 text-navy p-2 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FiX size={24} />
              </button>

              <nav className="flex flex-col gap-6 mt-4">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={`#${link.href}`}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className={`block text-lg font-medium transition-colors border-b border-gray-light/50 pb-2 ${
                          activeSection === link.href ? 'text-gold border-gold' : 'text-navy'
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-navy font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gold-light mt-4 shadow-sm w-full"
                >
                  <FiDownload />
                  <span>Download Resume</span>
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
