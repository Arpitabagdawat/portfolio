import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiSend, FiLoader } from 'react-icons/fi';
import { contactInfo, emailjsConfig } from '../data/constants';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      setStatus('success');
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error: any) {
      console.error('Email sending failed:', error);
      setStatus('error');
      setErrorMessage(error?.text || 'Something went wrong. Please try again later.');
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="contact" className="section-padding container-custom bg-white">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 relative inline-block text-center">
          Let's Talk
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gold rounded-full transform translate-y-2"></span>
        </h2>
        <p className="text-gray text-center max-w-2xl mt-4">
          I'm open to discussing new projects, opportunities, or partnerships.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-card p-6 md:p-8"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                placeholder="How can I help you?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-gold text-navy font-semibold py-3 px-6 rounded-full hover:bg-gold-light transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                <>
                  <FiLoader className="animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="mr-2" />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="p-3 bg-green-50 text-green-700 rounded-xl text-center text-sm font-medium">
                Message sent successfully!
              </div>
            )}
            
            {status === 'error' && (
              <div className="p-3 bg-red-50 text-red-700 rounded-xl text-center text-sm font-medium">
                {errorMessage}
              </div>
            )}
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col space-y-8 lg:pl-8"
        >
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 text-gold text-xl">
                    <Icon />
                  </div>
                  <div>
                    <div className="text-sm text-gray mb-1">{info.label}</div>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-navy font-medium hover:text-gold transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-navy font-medium">{info.value}</div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Optional decorative element */}
          <div className="flex-grow hidden lg:flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square bg-gray-50 rounded-full flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 border-2 border-dashed border-gold/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute inset-4 border-2 border-dashed border-navy/20 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
              <div className="text-center z-10">
                <h3 className="text-2xl font-bold text-navy mb-2">Ready to work together?</h3>
                <p className="text-gray text-sm">Reach out and let's create something amazing.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
