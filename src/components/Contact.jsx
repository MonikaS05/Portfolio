import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Github = ({ size = 18, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
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
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
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
      label: 'Email',
      value: 'fardeenkhann2003@gmail.com',
      href: 'mailto:fardeenkhann2003@gmail.com',
      icon: <Mail size={16} className="text-mercury-blue" />
    },
    {
      label: 'Phone',
      value: '+91 6366625607',
      href: 'tel:+916366625607',
      icon: <Phone size={16} className="text-mercury-blue" />
    },
    {
      label: 'Location',
      value: 'Mysore, Karnataka, India',
      href: 'https://maps.google.com/?q=Mysore,India',
      icon: <MapPin size={16} className="text-mercury-blue" />
    }
  ];

  return (
    <section id="contact" className="py-24 bg-deep-space relative border-b border-lead/15">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-body text-caption-custom tracking-[0.2em] uppercase text-mercury-blue mb-3">Get in Touch</span>
          <h2 className="font-display text-[32px] md:text-heading-lg-custom font-[300] tracking-wide text-starlight leading-none">
            Start a <span className="text-silver/70 font-[300]">Connection</span>
          </h2>
          <div className="w-12 h-[1px] bg-lead mt-6" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h3 className="font-display text-subheading-custom md:text-heading-sm-custom font-normal text-starlight leading-tight">
              Let's engineer something remarkable.
            </h3>
            
            <p className="font-body text-body-sm-custom text-silver leading-relaxed font-light">
              I am open to full-stack engineering internships, developer positions, or collaboration opportunities. Connect using the direct portals.
            </p>

            {/* Direct Details */}
            <div className="space-y-4 pt-4 border-t border-lead/10">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex items-center space-x-3.5 group interactive-item"
                >
                  <div className="p-2.5 bg-graphite/40 border border-lead/10 text-silver group-hover:text-starlight transition-colors duration-200">
                    {detail.icon}
                  </div>
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">
                      {detail.label}
                    </span>
                    <span className="font-body text-body-sm-custom text-starlight group-hover:text-mercury-blue transition-colors duration-200">
                      {detail.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social channels */}
            <div className="flex items-center space-x-5 pt-4 border-t border-lead/10">
              <a
                href="https://linkedin.com/in/md-fardeen-khan-5aa21b363"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-silver hover:text-starlight transition-colors duration-200 font-body text-body-sm-custom"
              >
                <Linkedin size={16} className="text-bright-violet" />
                <span>LinkedIn</span>
              </a>
              <div className="w-[1px] h-3 bg-lead/20" />
              <a
                href="https://github.com/Fardeenkhan17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-silver hover:text-starlight transition-colors duration-200 font-body text-body-sm-custom"
              >
                <Github size={16} className="text-mercury-blue" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Portal form container */}
          <div 
            className="lg:col-span-7 bg-midnight-slate/40 border border-lead/15 p-6 md:p-8 relative overflow-hidden"
            style={{ borderRadius: '0px' }}
          >
            <h4 className="font-display text-[13px] font-semibold uppercase tracking-wider text-starlight/90 mb-6 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-bright-violet rounded-full animate-ping" />
              <span>Command Transmission Terminal</span>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="font-body text-[11px] uppercase tracking-wider text-silver/80 block mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Identify your name"
                  required
                  className="w-full bg-deep-space/60 border border-lead/25 rounded-[32px] px-5 py-3 font-body text-body-sm-custom text-starlight placeholder-silver/30 focus:outline-none focus:border-bright-violet transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-body text-[11px] uppercase tracking-wider text-silver/80 block mb-1.5">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Identify your email"
                  required
                  className="w-full bg-deep-space/60 border border-lead/25 rounded-[32px] px-5 py-3 font-body text-body-sm-custom text-starlight placeholder-silver/30 focus:outline-none focus:border-bright-violet transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="font-body text-[11px] uppercase tracking-wider text-silver/80 block mb-1.5">Proposal / Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Details of your inquiry or greetings..."
                  required
                  className="w-full bg-deep-space/60 border border-lead/25 rounded-[12px] px-5 py-3.5 font-body text-body-sm-custom text-starlight placeholder-silver/30 focus:outline-none focus:border-bright-violet transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full font-body text-body-sm-custom font-semibold bg-gradient-to-r from-mercury-blue to-bright-violet hover:brightness-110 disabled:bg-lead/50 text-pure-white rounded-[32px] py-3.5 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer active:scale-[0.98]"
              >
                <span>{sent ? 'Sending Signal...' : 'Transmit Message'}</span>
                {!sent && <Send size={14} />}
              </button>
            </form>

            {/* Corner glow */}
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-mercury-blue/5 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}
