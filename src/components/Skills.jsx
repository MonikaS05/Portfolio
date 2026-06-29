import { motion } from 'framer-motion';
import { Code, Wrench, Award, Sparkles, HelpCircle } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & Languages',
      icon: <Code size={16} className="text-mercury-blue" />,
      items: [
        { name: 'Java (OOPs)', logo: 'java' },
        { name: 'JavaScript', logo: 'javascript' },
        { name: 'Spring Boot', logo: 'springboot' },
        { name: 'MySQL / SQL', logo: 'mysql' }
      ]
    },
    {
      title: 'Frontend & UI Design',
      icon: <Sparkles size={16} className="text-bright-violet" />,
      items: [
        { name: 'React.js', logo: 'react' },
        { name: 'Tailwind CSS', logo: 'tailwindcss' },
        { name: 'HTML5 & CSS3', logo: 'html5' },
        { name: 'Figma Design', logo: 'figma' }
      ]
    },
    {
      title: 'Cloud & Engineering Tools',
      icon: <Wrench size={16} className="text-mercury-blue" />,
      items: [
        { name: 'GitHub & Git', logo: 'github' },
        { name: 'AWS Cloud', logo: 'aws' },
        { name: 'MongoDB', logo: 'mongodb' },
        { name: 'Manual Testing', logo: 'testing' }
      ]
    }
  ];

  const achievements = [
    {
      title: 'Project Expo Runner-up',
      subtitle: 'FitMe AI Exhibition',
      desc: 'Secured Runner-up positions in two separate project expositions for computer vision work in FitMe.',
      icon: <Award size={16} className="text-mercury-blue" />
    },
    {
      title: 'Hackathon Contender',
      subtitle: '5+ Academic Showdowns',
      desc: 'Formed teams and engineered prototype web apps under strict hackathon schedules.',
      icon: <Sparkles size={16} className="text-bright-violet" />
    },
    {
      title: 'Star Performer of the Year',
      subtitle: '2023 Technical Honors',
      desc: 'Recognized for excellent technical documentation, team communication, and leadership.',
      icon: <Award size={16} className="text-mercury-blue" />
    },
    {
      title: 'Fashion & Presentation Wins',
      subtitle: '2× Winner / 1× Runner-up',
      desc: 'Won modeling competitions, displaying strong stage confidence and public presentation.',
      icon: <Award size={16} className="text-bright-violet" />
    }
  ];

  const getTechSvg = (logo) => {
    switch (logo) {
      case 'java':
        return (
          <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 22h12M10 18h4M8 14h8M9 2v4a3 3 0 0 0 6 0V2" />
          </svg>
        );
      case 'javascript':
        return (
          <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 3h18v18H3z" />
            <path d="M15 15h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1M9 15a2 2 0 0 0 2-2v-4" />
          </svg>
        );
      case 'springboot':
        return (
          <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M7.5 11.5L10 14L16.5 7.5" />
          </svg>
        );
      case 'mysql':
        return (
          <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        );
      case 'react':
        return (
          <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
          </svg>
        );
      case 'tailwindcss':
        return (
          <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 16c-1.8 0-3-.6-3.6-1.8-.8-1.6-.2-3.6 1.8-4.2 1.8-.6 3.6.2 4.2 1.8.4.8.2 1.8-.4 2.4-.6.6-1.2.8-2 .8z" />
          </svg>
        );
      case 'html5':
        return (
          <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 5l1.5 14 8.5 3 8.5-3L22 5zM12 5v14" />
          </svg>
        );
      case 'figma':
        return (
          <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3h4v5h-4zM5 12.5A2.5 2.5 0 0 1 7.5 10h4v5h-4zM11.5 3h5a2.5 2.5 0 0 1 0 5h-5z" />
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5 text-[#f3f4f6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1" />
          </svg>
        );
      case 'aws':
        return (
          <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 19c2-1 3-3 3-5v-4M4 14s4 4 8 4 8-4 8-4" />
          </svg>
        );
      case 'mongodb':
        return (
          <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2c0 0-5 7-5 13 0 3.5 2 6.5 5 8 3-1.5 5-4.5 5-8 0-6-5-13-5-13z" />
          </svg>
        );
      default:
        return <HelpCircle size={20} />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-deep-space relative border-b border-lead/15">
      <div className="absolute inset-0 aurora-subtle pointer-events-none" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Skills */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <span className="font-body text-caption-custom tracking-[0.2em] uppercase text-mercury-blue mb-3 block">Expertise</span>
              <h2 className="font-display text-[32px] md:text-heading-custom font-[300] tracking-wide text-starlight leading-none">
                Technical <span className="text-silver/70 font-[300]">Stack</span>
              </h2>
              <div className="w-12 h-[1px] bg-lead mt-6" />
            </div>

            <div className="space-y-6">
              {skillCategories.map((cat, idx) => (
                <div key={idx} className="bg-midnight-slate/40 border border-lead/15 p-6 hover:border-lead/30 transition-colors duration-300" style={{ borderRadius: '0px' }}>
                  <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-lead/10">
                    {cat.icon}
                    <h3 className="font-display text-[12px] font-semibold text-starlight tracking-wide uppercase">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {cat.items.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="flex items-center space-x-3 p-3 bg-graphite/30 hover:bg-graphite/80 border border-lead/10 hover:border-lead/30 transition-all duration-200 group interactive-item"
                        style={{ borderRadius: '0px' }}
                      >
                        <div className="group-hover:scale-110 transition-transform duration-200 shrink-0">
                          {getTechSvg(skill.logo)}
                        </div>
                        <span className="font-body text-[13px] text-silver group-hover:text-starlight transition-colors duration-200 font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <span className="font-body text-caption-custom tracking-[0.2em] uppercase text-bright-violet mb-3 block">Milestones</span>
              <h2 className="font-display text-[32px] md:text-heading-custom font-[300] tracking-wide text-starlight leading-none">
                Notable <span className="text-silver/70 font-[300]">Achievements</span>
              </h2>
              <div className="w-12 h-[1px] bg-lead mt-6" />
            </div>

            <div className="grid grid-cols-1 gap-6">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-midnight-slate/30 border border-lead/15 hover:border-bright-violet/40 p-6 flex items-start space-x-5 transition-all duration-300 relative group overflow-hidden interactive-item"
                  style={{ borderRadius: '0px' }}
                >
                  {/* Icon */}
                  <div className="p-3 bg-graphite border border-lead/10 shrink-0 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  
                  {/* Text */}
                  <div>
                    <span className="font-body text-[10px] text-bright-violet font-semibold tracking-wider uppercase block mb-1">
                      {item.subtitle}
                    </span>
                    <h4 className="font-display text-body-custom font-semibold text-starlight mb-1.5 group-hover:text-ghost-blue transition-colors">
                      {item.title}
                    </h4>
                    <p className="font-body text-[13px] text-silver leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* Gradient Light up Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-bright-violet/0 to-bright-violet/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
