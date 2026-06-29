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
          ? 'bg-[#171721]/80 backdrop-blur-md border-b border-lead/20 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Name Logo */}
        <a 
          href="#" 
          className="font-display text-heading-sm-custom font-[360] tracking-wide text-starlight hover:text-ghost-blue transition-colors duration-300"
        >
          Fardeen.
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-body text-body-sm-custom text-silver hover:text-starlight transition-colors duration-300 py-2 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-mercury-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Secondary CTA Header Pill Button */}
        <div className="hidden md:block">
          <a
            href="/MD Fardeen_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-body-sm-custom bg-[#cdddff]/20 hover:bg-[#cdddff]/30 text-starlight border border-[#cdddff]/10 rounded-[40px] px-5 py-2 transition-all duration-300 inline-block text-center cursor-pointer active:scale-95"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-starlight focus:outline-none p-1 hover:bg-graphite rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-midnight-slate border-b border-lead/30 py-6 px-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body text-subheading-custom text-silver hover:text-starlight transition-colors py-2 border-b border-lead/10"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/MD Fardeen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="font-body text-body-sm-custom bg-[#cdddff]/20 hover:bg-[#cdddff]/30 text-starlight border border-[#cdddff]/10 rounded-[40px] py-3 text-center transition-all duration-300 w-full cursor-pointer"
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
