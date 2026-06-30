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
      icon: <Mail size={16} className="text-signal-blue" />
    },
    {
      label: 'PHONE',
      value: '+91 6366625607',
      href: 'tel:+916366625607',
      icon: <Phone size={16} className="text-signal-blue" />
    },
    {
      label: 'LOCATION',
      value: 'Mysore, Karnataka, India',
      href: 'https://maps.google.com/?q=Mysore,India',
      icon: <MapPin size={16} className="text-signal-blue" />
    }
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative border-b border-stone/10">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-button-genie text-[11px] tracking-[0.05em] uppercase text-signal-blue bg-morning-tint px-3 py-1 rounded-full mb-3 block w-max">
            CONNECTION
          </span>
          <h2 className="font-display-genie text-[32px] md:text-[48px] text-midnight-ink leading-none">
            Start a <span className="text-stone/60 font-light">Signal</span>
          </h2>
          <div className="w-12 h-[1px] bg-stone/20 mt-5" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-center">
          
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <h3 className="font-display-genie text-[20px] font-semibold text-midnight-ink leading-tight tracking-[-0.4px]">
              Let's engineer something remarkable.
            </h3>
            
            <p className="font-body-genie text-[14px] text-stone leading-relaxed">
              I am open to full-stack engineering internships, developer positions, or collaboration opportunities. Connect using the direct portals.
            </p>

            {/* Direct Details */}
            <div className="space-y-4 pt-4 border-t border-stone/10">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex items-center space-x-3.5 group interactive-item"
                >
                  <div className="p-2.5 bg-cloud-veil border border-stone/10 text-stone group-hover:text-midnight-ink" style={{ borderRadius: '24px' }}>
                    {detail.icon}
                  </div>
                  <div>
                    <span className="font-button-genie text-[9.5px] uppercase tracking-wide text-fog block">
                      {detail.label}
                    </span>
                    <span className="font-body-genie text-[13.5px] text-midnight-ink group-hover:text-signal-blue transition-colors duration-200">
                      {detail.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Social channels */}
            <div className="flex items-center space-x-5 pt-4 border-t border-stone/10">
              <a
                href="https://linkedin.com/in/md-fardeen-khan-5aa21b363"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-stone hover:text-signal-blue transition-colors font-button-genie text-[12px] tracking-wide"
              >
                <Linkedin size={16} className="text-signal-blue" />
                <span>LINKEDIN</span>
              </a>
              <a
                href="https://github.com/Fardeenkhan17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-stone hover:text-signal-blue transition-colors font-button-genie text-[12px] tracking-wide"
              >
                <Github size={16} className="text-midnight-ink" />
                <span>GITHUB</span>
              </a>
            </div>
          </div>

          {/* Right Column: Portal form container */}
          <div 
            className="lg:col-span-7 bg-paper-white border border-stone p-6 md:p-8 relative overflow-hidden"
            style={{ 
              borderRadius: '32px',
              boxShadow: 'rgba(4, 69, 144, 0.08) 0px 14px 20px 4px'
            }}
          >
            <h4 className="font-button-genie text-[11px] font-semibold uppercase tracking-wider text-midnight-ink mb-6 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-signal-blue rounded-full animate-pulse" />
              <span>Secure Transmission Portal</span>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="font-button-genie text-[10px] uppercase tracking-wide text-stone block mb-1.5">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Identify your name"
                  required
                  className="w-full bg-pure-white border border-stone/20 px-5 py-3 font-body-genie text-[14px] text-midnight-ink placeholder-fog/60 focus:outline-none focus:border-signal-blue transition-colors shadow-sm"
                  style={{ borderRadius: '32px' }}
                />
              </div>

              <div>
                <label htmlFor="email" className="font-button-genie text-[10px] uppercase tracking-wide text-stone block mb-1.5">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Identify your email"
                  required
                  className="w-full bg-pure-white border border-stone/20 px-5 py-3 font-body-genie text-[14px] text-midnight-ink placeholder-fog/60 focus:outline-none focus:border-signal-blue transition-colors shadow-sm"
                  style={{ borderRadius: '32px' }}
                />
              </div>

              <div>
                <label htmlFor="message" className="font-button-genie text-[10px] uppercase tracking-wide text-stone block mb-1.5">MESSAGE DETAILS</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Details of your signal or greetings..."
                  required
                  className="w-full bg-pure-white border border-stone/20 px-5 py-3.5 font-body-genie text-[14px] text-midnight-ink placeholder-fog/60 focus:outline-none focus:border-signal-blue transition-colors shadow-sm resize-none"
                  style={{ borderRadius: '32px' }}
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full font-button-genie text-[13px] bg-pressed-charcoal hover:bg-pressed-charcoal/90 disabled:bg-fog text-pure-white py-3.5 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer active:scale-[0.98] shadow"
                style={{ borderRadius: '32px' }}
              >
                <span>{sent ? 'TRANSMITTING SIGNAL...' : 'Send Message'}</span>
                {!sent && <Send size={14} />}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
