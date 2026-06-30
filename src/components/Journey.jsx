import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, User, GraduationCap, Briefcase } from 'lucide-react';

export default function Journey() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'ABOUT ME', icon: <User size={13} /> },
    { id: 'experience', label: 'EXPERIENCE', icon: <Briefcase size={13} /> },
    { id: 'education', label: 'EDUCATION', icon: <GraduationCap size={13} /> }
  ];

  const experienceList = [
    {
      role: 'Java Full Stack Intern',
      company: 'Pentagon Space',
      duration: 'Feb 2026 – Aug 2026',
      highlights: [
        'Undergoing industry-level full stack engineering training focusing on enterprise backend systems.',
        'Learning Core and Advanced Java constructs (OOPs, Collections, Exception Handling, Threads).',
        'Gaining exposure to service integration, RESTful web services, database relational mapping, and SQL.',
        'Practicing debugging techniques and participating in daily technical challenges.'
      ]
    }
  ];

  const educationList = [
    {
      degree: 'B.E. — Computer Science & Engineering',
      institution: 'Mysore College of Engineering and Management',
      duration: 'Graduation: May 2026',
      grade: 'CGPA: 8.63',
      details: 'Specializing in software design, algorithms, database architectures, and full stack web development.'
    },
    {
      degree: 'Pre-University College (PCMB)',
      institution: "St. Philomena’s P.U. College",
      duration: '2020 – 2022',
      grade: 'Percentage: 81%',
      details: 'Foundational training in core sciences and mathematics.'
    },
    {
      degree: 'High School (CBSE - 10th)',
      institution: 'Presentation Public School',
      duration: '2009 – 2020',
      grade: 'Percentage: 74%',
      details: 'General mathematics, language, and sciences.'
    }
  ];

  return (
    <section id="journey" className="py-24 bg-void relative border-b border-bone/10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-acronym text-[12px] font-semibold tracking-eyebrow-custom uppercase text-plum-voltage mb-3">TRAJECTORY</span>
          <h2 className="font-display-dala text-[32px] md:text-heading-lg-custom text-bone">
            MY <span className="text-ash/60 font-[200]">JOURNEY</span>
          </h2>
          <div className="w-12 h-[1px] bg-bone/25 mt-6" />
        </div>

        {/* Centered Tabbed Console */}
        <div className="max-w-3xl mx-auto flex flex-col justify-between">
          {/* Tab Controls Bar */}
          <div className="flex justify-center mb-8">
            <div className="flex border border-bone/15 p-1 rounded-3xl relative max-w-sm w-full justify-around bg-void" style={{ borderRadius: '24px' }}>
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-1.5 px-4 py-2.5 font-acronym text-[11px] font-semibold tracking-eyebrow-custom relative z-10 transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-bone' : 'text-smoke hover:text-bone'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-plum-voltage -z-10"
                        style={{ borderRadius: '24px' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Panels */}
          <div 
            className="flex-grow border border-bone/15 p-6 md:p-8 relative overflow-hidden bg-transparent" 
            style={{ borderRadius: '24px' }}
          >
            <AnimatePresence mode="wait">
              {activeTab === 'about' && (
                <motion.div
                  key="about-tab"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="border-b border-bone/10 pb-4">
                    <h3 className="font-acronym text-subheading font-[200] leading-relaxed text-bone tracking-body-custom">
                      Constructing structured, clean, and scalable full-stack engines. Bridging robust Object-Oriented principles with modern web deployment.
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] pt-2">
                    <div>
                      <span className="font-acronym text-[10px] tracking-eyebrow-custom text-smoke uppercase block mb-0.5">LOCATION</span>
                      <p className="font-body-dala text-bone">Mysore, Karnataka, India</p>
                    </div>
                    <div>
                      <span className="font-acronym text-[10px] tracking-eyebrow-custom text-smoke uppercase block mb-0.5">SPECIALTIES</span>
                      <p className="font-body-dala text-bone">Java, Spring Boot, React, SQL & API design</p>
                    </div>
                    <div>
                      <span className="font-acronym text-[10px] tracking-eyebrow-custom text-smoke uppercase block mb-0.5">EDUCATION STAGE</span>
                      <p className="font-body-dala text-bone">B.E. Computer Science — CGPA 8.63</p>
                    </div>
                    <div>
                      <span className="font-acronym text-[10px] tracking-eyebrow-custom text-smoke uppercase block mb-0.5">CORE MOTIVE</span>
                      <p className="font-body-dala text-bone">Write secure, fast, and maintainable services</p>
                    </div>
                  </div>

                  <p className="font-body-dala text-[13.5px] text-ash leading-relaxed font-light mt-4">
                    My build aesthetic is anchored in clean voids and functional density. Every project relies on structured schemas, clean endpoint divisions, and smooth client-side rendering.
                  </p>
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div
                  key="experience-tab"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {experienceList.map((exp, index) => (
                    <div key={index} className="relative pl-5 border-l border-bone/20">
                      <div className="absolute left-0 top-1.5 -translate-x-[4px] w-2 h-2 bg-plum-voltage rounded-full" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                        <div>
                          <h4 className="font-acronym text-[15px] font-semibold text-bone">
                            {exp.role}
                          </h4>
                          <span className="font-body-dala text-body-sm-custom text-ash">{exp.company}</span>
                        </div>
                        
                        <div className="flex items-center space-x-1 bg-transparent border border-bone/20 px-2.5 py-0.5 text-ash text-[11px] self-start sm:self-center" style={{ borderRadius: '24px' }}>
                          <Calendar size={11} className="text-plum-voltage" />
                          <span className="font-acronym text-[10px] font-semibold tracking-eyebrow-custom uppercase">{exp.duration}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mt-3">
                        {exp.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start space-x-2">
                            <ChevronRight size={13} className="text-plum-voltage mt-1 shrink-0" />
                            <p className="font-body-dala text-[13px] text-ash leading-relaxed">{h}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  key="education-tab"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {educationList.map((edu, index) => (
                    <div key={index} className="relative pl-5 border-l border-bone/20 pb-4 last:pb-0">
                      <div className="absolute left-0 top-1.5 -translate-x-[4px] w-2 h-2 bg-plum-voltage rounded-full" />

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 items-start mb-1">
                        <div className="sm:col-span-8">
                          <h4 className="font-acronym text-[14.5px] font-semibold text-bone flex items-center space-x-1.5">
                            <GraduationCap size={14} className="text-plum-voltage shrink-0" />
                            <span>{edu.degree}</span>
                          </h4>
                          <p className="font-body-dala text-[12.5px] text-ash">{edu.institution}</p>
                        </div>

                        <div className="sm:col-span-4 flex flex-col sm:items-end gap-1">
                          <span className="font-body-dala text-[10.5px] text-ash/80 flex items-center space-x-1">
                            <Calendar size={9} className="text-plum-voltage" />
                            <span className="font-acronym text-[10px] font-semibold tracking-eyebrow-custom uppercase">{edu.duration}</span>
                          </span>
                          <span className="font-acronym text-[10px] border border-bone/20 px-2.5 py-0.5 text-bone font-semibold self-start sm:self-end" style={{ borderRadius: '24px' }}>
                            {edu.grade}
                          </span>
                        </div>
                      </div>

                      <p className="font-body-dala text-[12px] text-ash/80 leading-relaxed mt-1">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
