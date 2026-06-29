import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Calendar, Briefcase, ChevronRight, User, GraduationCap } from 'lucide-react';

export default function Journey() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me', icon: <User size={14} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={14} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={14} /> }
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
    <section id="journey" className="py-24 md:py-32 bg-midnight-slate relative border-b border-lead/15 overflow-hidden">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-body text-caption-custom tracking-[0.2em] uppercase text-mercury-blue mb-3">Interactive Journey</span>
          <h2 className="font-display text-[32px] md:text-heading-lg-custom font-[300] tracking-wide text-starlight">
            My <span className="text-silver/70 font-[300]">Trajectory</span>
          </h2>
          <div className="w-12 h-[1px] bg-lead mt-6" />
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Oval-Framed Profile Image */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center py-4">
            <div className="relative w-full max-w-[270px] aspect-[3/4] p-1 bg-gradient-to-tr from-mercury-blue to-bright-violet rounded-[150px_90px_150px_90px] shadow-[0_0_35px_rgba(82,102,235,0.18)]">
              <div className="w-full h-full overflow-hidden bg-deep-space rounded-[148px_88px_148px_88px]">
                <img 
                  src="/profile_photo.jpg" 
                  alt="Mohammed Fardeen Khan"
                  className="w-full h-full object-cover grayscale-[0.05] contrast-[1.02] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>
              
              {/* Outer floating orbit point */}
              <div className="absolute top-1/4 right-0 w-3.5 h-3.5 rounded-full bg-bright-violet border-2 border-midnight-slate shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-bounce" />
            </div>
          </div>

          {/* Right Column: Sliding Tabs Console */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Tab Controls Bar */}
            <div className="flex justify-start mb-6">
              <div className="flex bg-deep-space border border-lead/20 p-1 rounded-[40px] relative max-w-sm w-full justify-around">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-1.5 px-4 py-2.5 font-body text-caption-custom font-medium relative z-10 transition-colors duration-300 cursor-pointer ${
                        isActive ? 'text-pure-white' : 'text-silver hover:text-starlight'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-mercury-blue to-bright-violet rounded-[40px] -z-10"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content Panels */}
            <div 
              className="flex-grow bg-deep-space/50 border border-lead/15 p-6 md:p-8 relative overflow-hidden" 
              style={{ borderRadius: '0px' }}
            >
              <AnimatePresence mode="wait">
                {activeTab === 'about' && (
                  <motion.div
                    key="about-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-lead/15 pb-4">
                      <h3 className="font-display text-subheading-custom md:text-heading-sm-custom text-starlight leading-relaxed font-light">
                        I build structured and scalable full-stack applications. Bridging object-oriented principles with clean browser rendering.
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] pt-2">
                      <div>
                        <span className="font-display text-[10px] tracking-wider text-silver uppercase block mb-0.5">Location</span>
                        <p className="font-body text-starlight font-semibold">Mysore, Karnataka, India</p>
                      </div>
                      <div>
                        <span className="font-display text-[10px] tracking-wider text-silver uppercase block mb-0.5">Specialties</span>
                        <p className="font-body text-starlight font-semibold">Java, Spring Boot, React, SQL</p>
                      </div>
                      <div>
                        <span className="font-display text-[10px] tracking-wider text-silver uppercase block mb-0.5">Education Stage</span>
                        <p className="font-body text-starlight font-semibold">B.E. Computer Science (CGPA 8.63)</p>
                      </div>
                      <div>
                        <span className="font-display text-[10px] tracking-wider text-silver uppercase block mb-0.5">Core Values</span>
                        <p className="font-body text-starlight font-semibold">Clean Code, Performance, Reliability</p>
                      </div>
                    </div>

                    <p className="font-body text-[13.5px] text-silver leading-relaxed font-light mt-4">
                      My workflow is inspired by modern dev tool aesthetics like Apple and Linear. I prioritize modular codebases, intuitive data structures, and crisp micro-interactions that elevate the final deployment.
                    </p>
                  </motion.div>
                )}

                {activeTab === 'experience' && (
                  <motion.div
                    key="experience-tab"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {experienceList.map((exp, index) => (
                      <div key={index} className="relative pl-5 border-l border-lead/20">
                        <div className="absolute left-0 top-1.5 -translate-x-[4px] w-2 h-2 bg-bright-violet rounded-full" />
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-3">
                          <div>
                            <h4 className="font-display text-body-custom font-semibold text-starlight">
                              {exp.role}
                            </h4>
                            <span className="font-body text-body-sm-custom text-silver">{exp.company}</span>
                          </div>
                          
                          <div className="flex items-center space-x-1.5 bg-graphite border border-lead/20 px-2.5 py-0.5 text-silver text-[11px] self-start sm:self-center" style={{ borderRadius: '0px' }}>
                            <Calendar size={11} className="text-mercury-blue" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        <div className="space-y-2 mt-3">
                          {exp.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-start space-x-2">
                              <ChevronRight size={13} className="text-mercury-blue mt-1 shrink-0" />
                              <p className="font-body text-[13px] text-silver leading-relaxed">{h}</p>
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
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {educationList.map((edu, index) => (
                      <div key={index} className="relative pl-5 border-l border-lead/20 pb-3 last:pb-0">
                        <div className="absolute left-0 top-1.5 -translate-x-[4px] w-2 h-2 bg-mercury-blue rounded-full" />

                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 items-start mb-1">
                          <div className="sm:col-span-8">
                            <h4 className="font-display text-[14.5px] font-semibold text-starlight flex items-center space-x-1.5">
                              <GraduationCap size={14} className="text-mercury-blue shrink-0" />
                              <span>{edu.degree}</span>
                            </h4>
                            <p className="font-body text-[12.5px] text-silver">{edu.institution}</p>
                          </div>

                          <div className="sm:col-span-4 flex flex-col sm:items-end gap-1">
                            <span className="font-body text-[10.5px] text-silver/80 flex items-center space-x-1">
                              <Calendar size={9} className="text-mercury-blue" />
                              <span>{edu.duration}</span>
                            </span>
                            <span className="font-body text-[10px] bg-graphite border border-lead/15 px-2 py-0.5 text-starlight font-medium self-start sm:self-end" style={{ borderRadius: '0px' }}>
                              {edu.grade}
                            </span>
                          </div>
                        </div>

                        <p className="font-body text-[12px] text-silver/80 leading-relaxed mt-1">
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
      </div>
    </section>
  );
}
