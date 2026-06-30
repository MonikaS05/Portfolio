import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, User, GraduationCap, Briefcase } from 'lucide-react';

export default function Journey() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me', icon: <User size={13} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={13} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={13} /> }
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
    <section id="journey" className="py-24 bg-transparent relative border-b border-stone/10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-button-genie text-[11px] tracking-[0.05em] uppercase text-signal-blue bg-morning-tint px-3 py-1 rounded-full mb-3">
            TRAJECTORY
          </span>
          <h2 className="font-display-genie text-[32px] md:text-[48px] text-midnight-ink leading-tight">
            My <span className="text-stone/60 font-light">Journey</span>
          </h2>
          <div className="w-12 h-[1px] bg-stone/20 mt-5" />
        </div>

        {/* Centered Tabbed Console */}
        <div className="max-w-3xl mx-auto flex flex-col justify-between">
          {/* Tab Controls Bar */}
          <div className="flex justify-center mb-8">
            <div 
              className="flex border border-stone/20 p-[3px] bg-pure-white shadow-sm" 
              style={{ borderRadius: '9999px' }}
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-1.5 px-5 py-2.5 font-button-genie text-[12px] tracking-wide relative z-10 transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-pure-white' : 'text-stone hover:text-midnight-ink'
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-pressed-charcoal -z-10"
                        style={{ borderRadius: '9999px' }}
                        transition={{ type: 'spring', stiffness: 420, damping: 33 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Panels */}
          <div 
            className="flex-grow bg-paper-white border border-stone p-6 md:p-10 relative overflow-hidden" 
            style={{ 
              borderRadius: '32px',
              boxShadow: 'rgba(4, 69, 144, 0.08) 0px 14px 20px 4px'
            }}
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
                  <div className="border-b border-stone/10 pb-5">
                    <h3 className="font-display-genie text-[20px] leading-relaxed text-midnight-ink font-[500] tracking-[-0.4px]">
                      Constructing structured, clean, and scalable full-stack engines. Bridging robust Object-Oriented principles with modern web deployment.
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] pt-2">
                    <div>
                      <span className="font-button-genie text-[10px] tracking-wide text-fog uppercase block mb-0.5">LOCATION</span>
                      <p className="font-body-genie text-stone">Mysore, Karnataka, India</p>
                    </div>
                    <div>
                      <span className="font-button-genie text-[10px] tracking-wide text-fog uppercase block mb-0.5">SPECIALTIES</span>
                      <p className="font-body-genie text-stone">Java, Spring Boot, React, SQL & API design</p>
                    </div>
                    <div>
                      <span className="font-button-genie text-[10px] tracking-wide text-fog uppercase block mb-0.5">EDUCATION STAGE</span>
                      <p className="font-body-genie text-stone">B.E. Computer Science — CGPA 8.63</p>
                    </div>
                    <div>
                      <span className="font-button-genie text-[10px] tracking-wide text-fog uppercase block mb-0.5">CORE MOTIVE</span>
                      <p className="font-body-genie text-stone">Write secure, fast, and maintainable services</p>
                    </div>
                  </div>

                  <p className="font-body-genie text-[14px] text-stone/90 leading-relaxed mt-4">
                    My build aesthetic is anchored in clean workspaces and functional density. Every project relies on structured schemas, clean endpoint divisions, and smooth client-side rendering.
                  </p>
                </motion.div>
              )}

              {activeTab === 'experience' && (
                <motion.div
                  key="experience-tab"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {experienceList.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-stone/15">
                      <div className="absolute left-0 top-1.5 -translate-x-[5px] w-2.5 h-2.5 bg-tangerine rounded-full" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                        <div>
                          <h4 className="font-display-genie text-[16px] font-semibold text-midnight-ink">
                            {exp.role}
                          </h4>
                          <span className="font-body-genie text-[13px] text-stone">{exp.company}</span>
                        </div>
                        
                        <div className="flex items-center space-x-1.5 bg-morning-tint border border-stone/10 px-3 py-1 text-stone text-[11px] self-start sm:self-center rounded-full">
                          <Calendar size={11} className="text-signal-blue" />
                          <span className="font-button-genie text-[10px] uppercase">{exp.duration}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mt-3">
                        {exp.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start space-x-2">
                            <ChevronRight size={13} className="text-signal-blue mt-1 shrink-0" />
                            <p className="font-body-genie text-[13.5px] text-stone leading-relaxed">{h}</p>
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
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  {educationList.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-stone/15 pb-4 last:pb-0">
                      <div className="absolute left-0 top-1.5 -translate-x-[5px] w-2.5 h-2.5 bg-amethyst rounded-full" />

                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 items-start mb-2">
                        <div className="sm:col-span-8">
                          <h4 className="font-display-genie text-[16px] font-semibold text-midnight-ink flex items-center space-x-1.5">
                            <GraduationCap size={15} className="text-amethyst shrink-0" />
                            <span>{edu.degree}</span>
                          </h4>
                          <p className="font-body-genie text-[13px] text-stone">{edu.institution}</p>
                        </div>

                        <div className="sm:col-span-4 flex flex-col sm:items-end gap-1">
                          <span className="font-body-genie text-[11px] text-stone/85 flex items-center space-x-1">
                            <Calendar size={9} className="text-amethyst" />
                            <span className="font-button-genie text-[10px] uppercase">{edu.duration}</span>
                          </span>
                          <span className="font-button-genie text-[10px] border border-stone/20 bg-cloud-veil px-2.5 py-0.5 text-midnight-ink font-semibold self-start sm:self-end rounded-full">
                            {edu.grade}
                          </span>
                        </div>
                      </div>

                      <p className="font-body-genie text-[13px] text-stone/85 leading-relaxed mt-1">
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
