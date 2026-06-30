import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'JOURNEY', href: '#journey' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-void/90 backdrop-blur-md border-b border-bone/10 py-3.5' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        
        {/* Brand identity (Wordmark + Crystal Icon) */}
        <a href="#" className="flex items-center space-x-2.5 group">
          {/* Geometric envelope/crystal logo mark */}
          <svg 
            width="22" 
            height="22" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            className="text-plum-voltage transition-transform duration-300 group-hover:rotate-45"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="font-acronym text-[18px] font-semibold tracking-wide text-bone">
            FARDEEN
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-acronym text-[14px] tracking-nav-custom font-normal text-smoke hover:text-bone transition-colors duration-200 py-2 relative"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Primary Action Button (Ghost Nav Button) */}
        <div className="hidden md:block">
          <a
            href="/MD Fardeen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-acronym text-[12px] font-semibold tracking-eyebrow-custom uppercase bg-plum-voltage hover:bg-plum-voltage/90 text-bone rounded-3xl px-5 py-3 transition-colors duration-200 inline-block text-center cursor-pointer active:scale-95"
            style={{ borderRadius: '24px' }}
          >
            RESUME
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-bone focus:outline-none p-1 hover:bg-[#111] rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 w-full bg-void border-b border-bone/10 py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-acronym text-subheading-custom text-smoke hover:text-bone transition-colors py-2 border-b border-bone/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/MD Fardeen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="font-acronym text-[12px] font-semibold tracking-eyebrow-custom uppercase bg-plum-voltage text-bone rounded-3xl py-3.5 text-center transition-colors duration-200 w-full cursor-pointer"
              style={{ borderRadius: '24px' }}
            >
              VIEW RESUME
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
