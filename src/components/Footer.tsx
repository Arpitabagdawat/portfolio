import { socialLinks } from '../data/constants';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gold mb-4">
          AB
        </div>
        
        {/* Name & Tagline */}
        <h3 className="text-lg font-medium mb-2">Arpita Bagdawat</h3>
        <p className="text-white/60 italic mb-8 text-center max-w-md">
          "Turning Data Into Decisions."
        </p>
        
        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gold transition-colors p-2"
                aria-label={`Visit ${link.label}`}
              >
                <Icon className="text-xl" />
              </a>
            );
          })}
        </div>
        
        {/* Divider */}
        <div className="w-full max-w-md border-t border-white/10 mb-6"></div>
        
        {/* Copyright */}
        <div className="text-white/40 text-sm text-center">
          &copy; 2026 Arpita Bagdawat. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
