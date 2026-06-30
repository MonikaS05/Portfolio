import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';

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

export default function Projects() {
  const [tilt, setTilt] = useState({ idx: null, x: 0, y: 0 });

  const projectsList = [
    {
      title: 'FitMe — AI Fabric Estimation & Trial Room',
      description: 'A full-stack fashion tech tool addressing sizing uncertainty. Connects a React UI with a Flask backend to detect measurements and overlay apparel templates.',
      image: '/fitme_preview.jpg',
      tech: ['React.js', 'Flask', 'OpenCV', 'TensorFlow', 'MongoDB', 'Express', 'Tailwind'],
      features: [
        'Body outlines processed using computer vision.',
        'Virtual canvas for clothing item alignment.',
        'Serving model calculations over secure Flask APIs.',
        'Component input validations and API integrity checks.'
      ],
      github: 'https://github.com/Fardeenkhan17/FitMe',
      live: '#'
    },
    {
      title: 'PetHub — Veterinary & Clinical Dashboard',
      description: 'A clinic booking application centering on user role mappings, medical record indexing, and backend authorization pipelines using relational models.',
      image: '/pethub_preview.jpg',
      tech: ['React.js', 'Spring Boot', 'Spring Security', 'MySQL', 'Bootstrap', 'REST APIs'],
      features: [
        'Responsive access dashboards for staff and patients.',
        'Spring Boot backend handling custom record filters.',
        'MySQL database mapped with relational user models.',
        'Spring Security tokens and secure password hashing.'
      ],
      github: 'https://github.com/Fardeenkhan17/PetHub',
      live: '#'
    }
  ];

  const handleMouseMove = (e, idx) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Max rotation is 5 degrees
    const rotateX = -(y / (box.height / 2)) * 5;
    const rotateY = (x / (box.width / 2)) * 5;
    
    setTilt({ idx, x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ idx: null, x: 0, y: 0 });
  };

  return (
    <section id="projects" className="py-24 bg-void relative border-b border-bone/10">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="font-acronym text-[12px] font-semibold tracking-eyebrow-custom uppercase text-plum-voltage mb-3">PORTFOLIO</span>
          <h2 className="font-display-dala text-[32px] md:text-heading-lg-custom text-bone leading-none">
            FEATURED <span className="text-ash/60 font-[200]">PROJECTS</span>
          </h2>
          <div className="w-12 h-[1px] bg-bone/25 mt-6" />
        </div>

        {/* Side-by-Side 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsList.map((project, index) => {
            const isTilting = tilt.idx === index;
            return (
              <div
                key={index}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
                className="bg-transparent border border-bone/10 hover:border-plum-voltage/30 p-6 flex flex-col justify-between transition-all duration-300 ease-out relative group overflow-hidden interactive-item"
                style={{ 
                  borderRadius: '24px',
                  transform: isTilting 
                    ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` 
                    : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
              >
                <div>
                  {/* Project banner image */}
                  <div className="relative aspect-video overflow-hidden border border-bone/10 mb-6" style={{ transform: 'translateZ(10px)', borderRadius: '12px' }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-void/10 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-acronym text-body-custom font-semibold text-bone mb-3 group-hover:text-plum-voltage transition-colors leading-tight" style={{ transform: 'translateZ(15px)' }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body-dala text-body-sm-custom text-smoke mb-6 leading-relaxed" style={{ transform: 'translateZ(5px)' }}>
                    {project.description}
                  </p>

                  {/* Features list */}
                  <div className="mb-6" style={{ transform: 'translateZ(10px)' }}>
                    <h4 className="font-acronym text-[11px] font-semibold uppercase tracking-wider text-bone/90 mb-2.5 flex items-center space-x-1.5">
                      <ShieldCheck size={12} className="text-plum-voltage" />
                      <span>Contributions & Features</span>
                    </h4>
                    <ul className="space-y-1.5">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="font-body-dala text-[12.5px] text-ash flex items-start">
                          <span className="text-plum-voltage mr-2 select-none">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech & Action links */}
                <div style={{ transform: 'translateZ(15px)' }}>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag}
                        className="font-acronym text-[10.5px] bg-transparent text-smoke border border-bone/10 px-2.5 py-0.5"
                        style={{ borderRadius: '24px' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-6 pt-4 border-t border-bone/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-acronym text-[12px] font-semibold tracking-eyebrow-custom text-smoke hover:text-bone transition-colors flex items-center space-x-1.5"
                    >
                      <Github size={14} />
                      <span>SOURCE CODE</span>
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-acronym text-[12px] font-semibold tracking-eyebrow-custom text-smoke hover:text-bone transition-colors flex items-center space-x-1.5"
                      >
                        <ExternalLink size={14} />
                        <span>LIVE DEMO</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
