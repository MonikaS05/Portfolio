import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-void border-t border-bone/10 py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-2.5">
          <Terminal size={14} className="text-plum-voltage" />
          <p className="font-acronym text-[12px] tracking-eyebrow-custom text-smoke uppercase">
            © {currentYear} Mohammed Fardeen Khan. All rights reserved.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a 
            href="#journey" 
            className="font-acronym text-[12px] tracking-eyebrow-custom text-smoke hover:text-bone transition-colors"
          >
            JOURNEY
          </a>
          <a 
            href="#skills" 
            className="font-acronym text-[12px] tracking-eyebrow-custom text-smoke hover:text-bone transition-colors"
          >
            SKILLS
          </a>
          <a 
            href="#projects" 
            className="font-acronym text-[12px] tracking-eyebrow-custom text-smoke hover:text-bone transition-colors"
          >
            PROJECTS
          </a>
          <a 
            href="mailto:fardeenkhann2003@gmail.com" 
            className="font-acronym text-[12px] tracking-eyebrow-custom text-smoke hover:text-bone transition-colors"
          >
            SUPPORT
          </a>
        </div>
      </div>
    </footer>


  );
}
