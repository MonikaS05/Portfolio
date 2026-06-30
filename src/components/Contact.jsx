import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Github = ({ size = 18, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSent(true);
    setTimeout(() => {
      const subject = encodeURIComponent(`Message from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:fardeenkhann2003@gmail.com?subject=${subject}&body=${body}`;
      
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  const contactDetails = [
    {
      label: 'EMAIL',
      value: 'fardeenkhann2003@gmail.com',
      href: 'mailto:fardeenkhann2003@gmail.com',
      icon: <Mail size={16} className="text-plum-voltage" />
    },
    {
      label: 'PHONE',
      value: '+91 6366625607',
      href: 'tel:+916366625607',
      icon: <Phone size={16} className="text-plum-voltage" />
    },
    {
      label: 'LOCATION',
      value: 'Mysore, Karnataka, India',
      href: 'https://maps.google.com/?q=Mysore,India',
      icon: <MapPin size={16} className="text-plum-voltage" />
    }
  ];

  return (
    <section id="contact" className="py-24 bg-void relative border-b border-bone/10">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-acronym text-[12px] font-semibold tracking-eyebrow-custom uppercase text-plum-voltage mb-3">CONNECTION</span>
          <h2 className="font-display-dala text-[32px] md:text-heading-lg-custom text-bone leading-none">
            START A <span className="text-ash/60 font-[200]">SIGNAL</span>
          </h2>
          <div className="w-12 h-[1px] bg-bone/25 mt-6" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h3 className="font-acronym text-subheading font-light text-bone leading-tight tracking-body-custom">
              Let's engineer something remarkable.
            </h3>
            
            <p className="font-body-dala text-body-sm-custom text-smoke leading-relaxed">
              I am open to full-stack engineering internships, developer positions, or collaboration opportunities. Connect using the direct portals.
            </p>

            {/* Direct Details */}
            <div className="space-y-4 pt-4 border-t border-bone/10">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex items-center space-x-3.5 group interactive-item"
                >
                  <div className="p-2.5 border border-bone/10 text-smoke group-hover:text-bone transition-colors" style={{ borderRadius: '24px' }}>
                    {detail.icon}
                  </div>
                  <div>
                    <span className="font-acronym text-[10px] uppercase tracking-eyebrow-custom text-smoke block">
                      {detail.label}
                    </span>
                    <span className="font-body-dala text-body-sm-custom text-bone group-hover:text-plum-voltage transition-colors duration-200">
                      {detail.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social channels */}
            <div className="flex items-center space-x-5 pt-4 border-t border-bone/10">
              <a
                href="https://linkedin.com/in/md-fardeen-khan-5aa21b363"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-smoke hover:text-bone transition-colors font-acronym text-[12px] tracking-eyebrow-custom font-semibold"
              >
                <Linkedin size={16} className="text-plum-voltage" />
                <span>LINKEDIN</span>
              </a>
              <a
                href="https://github.com/Fardeenkhan17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-smoke hover:text-bone transition-colors font-acronym text-[12px] tracking-eyebrow-custom font-semibold"
              >
                <Github size={16} className="text-plum-voltage" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Right Column: Portal form container */}
          <div 
            className="lg:col-span-7 border border-bone/10 p-6 md:p-8 relative overflow-hidden bg-transparent"
            style={{ borderRadius: '24px' }}
          >
            <h4 className="font-acronym text-[11px] font-semibold uppercase tracking-eyebrow-custom text-bone/90 mb-6 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-plum-voltage rounded-full animate-pulse" />
              <span>Secure Terminal Transmission</span>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="font-acronym text-[10px] uppercase tracking-eyebrow-custom text-smoke block mb-1.5">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Identify your name"
                  required
                  className="w-full bg-transparent border border-bone/15 px-5 py-3 font-body-dala text-body-sm-custom text-bone placeholder-smoke/40 focus:outline-none focus:border-plum-voltage transition-colors duration-300"
                  style={{ borderRadius: '24px' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="font-acronym text-[10px] uppercase tracking-eyebrow-custom text-smoke block mb-1.5">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Identify your email"
                  required
                  className="w-full bg-transparent border border-bone/15 px-5 py-3 font-body-dala text-body-sm-custom text-bone placeholder-smoke/40 focus:outline-none focus:border-plum-voltage transition-colors duration-300"
                  style={{ borderRadius: '24px' }}
                />
              </div>

              <div>
                <label htmlFor="message" className="font-acronym text-[10px] uppercase tracking-eyebrow-custom text-smoke block mb-1.5">MESSAGE DETAILS</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Details of your signal or greetings..."
                  required
                  className="w-full bg-transparent border border-bone/15 px-5 py-3.5 font-body-dala text-body-sm-custom text-bone placeholder-smoke/40 focus:outline-none focus:border-plum-voltage transition-colors duration-300 resize-none"
                  style={{ borderRadius: '24px' }}
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full font-button-dala text-[12px] bg-plum-voltage hover:bg-plum-voltage/90 disabled:bg-[#333] text-bone py-3.5 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer active:scale-[0.98]"
                style={{ borderRadius: '24px' }}
              >
                <span>{sent ? 'TRANSMITTING SIGNAL...' : 'SEND MESSAGE'}</span>
                {!sent && <Send size={14} />}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
