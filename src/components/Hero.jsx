import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

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

export default function Hero() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [typedRole, setTypedRole] = useState('');
  const roles = ['FULL STACK DEVELOPER', 'JAVA SPECIALIST', 'CREATIVE BUILDER'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = roles[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedRole(currentFullText.substring(0, typedRole.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypedRole(currentFullText.substring(0, typedRole.length + 1));
      }, 70);
    }

    if (!isDeleting && typedRole === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedRole === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSuccess(true);
    setTimeout(() => {
      window.location.href = `mailto:fardeenkhann2003@gmail.com?subject=Portfolio%20Connection&body=Hello%20Fardeen,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%20My%20email%20is%20${email}`;
      setSuccess(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="relative min-h-screen w-full flex items-center bg-transparent px-6 py-24 z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Compact text block */}
        <div className="md:col-span-7 flex flex-col items-start text-left space-y-6 max-w-[500px]">
          
          {/* Eyebrow Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="font-acronym text-[12px] font-semibold tracking-eyebrow-custom uppercase text-plum-voltage">
              BUILDING SECURE LOGIC. DESIGNING INTUITIVE VISUALS.
            </span>
          </motion.div>

          {/* Display Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-acronym text-[64px] sm:text-[78px] md:text-hero leading-[0.85] tracking-hero-custom text-bone font-[200]"
          >
            MOHAMMED
            <br />
            FARDEEN
            <br />
            KHAN
          </motion.h1>

          {/* Typing Role Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="min-h-[22px] flex items-center"
          >
            <span className="font-acronym text-[13px] font-semibold tracking-eyebrow-custom text-amber-spark">
              {typedRole}
            </span>
            <span className="w-[1.5px] h-[14px] bg-amber-spark ml-1 animate-pulse shrink-0" />
          </motion.div>

          {/* Body Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body-dala text-[15px] md:text-body text-ash leading-relaxed tracking-body-custom"
          >
            Full Stack Developer specializing in Java, database indexing, and web systems. Constructing enterprise backend architectures and computer vision try-on prototypes.
          </motion.p>

          {/* 24px Pill Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full pt-4"
          >
            <form 
              onSubmit={handleSubmit} 
              className="flex items-center w-full bg-void border border-bone/15 p-[2px]"
              style={{ borderRadius: '24px' }}
            >
              <input
                type="email"
                placeholder="Enter email to connect"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent px-5 py-3 font-acronym text-[14px] text-bone placeholder-smoke focus:outline-none"
              />
              <button
                type="submit"
                className="font-button-dala text-[12px] bg-plum-voltage hover:bg-plum-voltage/90 text-bone px-5 py-3 transition-colors flex items-center justify-center space-x-1.5 shrink-0 cursor-pointer active:scale-95"
                style={{ borderRadius: '24px' }}
              >
                <span>{success ? 'TRANSMITTING' : 'REQUEST ENTRY'}</span>
                {!success && <ArrowRight size={14} />}
              </button>
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center space-x-8 pt-8 text-smoke"
          >
            <a 
              href="https://github.com/Fardeenkhan17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-bone transition-colors flex items-center space-x-2 font-acronym text-[12px] tracking-eyebrow-custom font-semibold"
            >
              <Github size={16} />
              <span>GITHUB</span>
            </a>
            <a 
              href="https://linkedin.com/in/md-fardeen-khan-5aa21b363" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-bone transition-colors flex items-center space-x-2 font-acronym text-[12px] tracking-eyebrow-custom font-semibold"
            >
              <Linkedin size={16} />
              <span>LINKEDIN</span>
            </a>
          </motion.div>

        </div>

        {/* Right Column: Profile Image Console Frame beside the name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="md:col-span-5 flex justify-center md:justify-end py-4 z-10"
        >
          <div className="relative w-full max-w-[260px] aspect-[3/4] p-1 border border-bone/15 rounded-3xl bg-transparent">
            <div className="w-full h-full overflow-hidden border border-plum-voltage/30 rounded-[20px] bg-void">
              <img 
                src="/profile_photo.jpg" 
                alt="Mohammed Fardeen Khan"
                className="w-full h-full object-cover grayscale-[0.08] hover:grayscale-0 hover:scale-102 transition-all duration-700 ease-out"
              />
            </div>
            
            {/* Outer floating console point */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-plum-voltage animate-pulse" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
