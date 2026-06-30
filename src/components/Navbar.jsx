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
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-sky-wash/95 backdrop-blur-md border-b border-stone/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        
        {/* Brand identity (Diamond Logo + Wordmark) */}
        <a href="#" className="flex items-center space-x-2.5 group">
          {/* Diamond logo mark with slightly soft angles */}
          <div className="w-5 h-5 bg-midnight-ink rotate-45 rounded-sm transition-transform duration-300 group-hover:-rotate-45" />
          <span className="font-display-genie text-[16px] font-[500] tracking-[-0.02em] text-midnight-ink">
            FARDEEN
          </span>
        </a>

        {/* Center: Desktop Nav Links (Geist 14px, Stone -> Signal Blue) */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-body-genie text-[14px] text-stone hover:text-signal-blue transition-colors duration-200 py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Ghost Navigation Button (Pressed Charcoal, 9999px radius) */}
        <div className="hidden md:block">
          <a
            href="/MD Fardeen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-button-genie text-[13px] bg-pressed-charcoal hover:bg-pressed-charcoal/90 text-pure-white rounded-full px-5 py-2 transition-colors duration-200 inline-block text-center cursor-pointer active:scale-95 shadow-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-midnight-ink focus:outline-none p-1.5 hover:bg-sky-wash/50 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 w-full bg-paper-white border-b border-stone/10 py-6 px-6 flex flex-col space-y-4 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body-genie text-[15px] text-stone hover:text-signal-blue transition-colors py-2 border-b border-stone/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/MD Fardeen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="font-button-genie text-[13px] bg-pressed-charcoal text-pure-white rounded-full py-3 text-center transition-colors duration-200 w-full cursor-pointer"
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
