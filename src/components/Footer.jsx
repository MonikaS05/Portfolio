import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-stone/10 py-12 px-6 relative z-10">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-2.5">
          <Terminal size={14} className="text-signal-blue" />
          <p className="font-body-genie text-[12px] text-stone">
            © {currentYear} Mohammed Fardeen Khan. All rights reserved.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a 
            href="#journey" 
            className="font-button-genie text-[12px] text-stone hover:text-signal-blue transition-colors"
          >
            JOURNEY
          </a>
          <a 
            href="#skills" 
            className="font-button-genie text-[12px] text-stone hover:text-signal-blue transition-colors"
          >
            SKILLS
          </a>
          <a 
            href="#projects" 
            className="font-button-genie text-[12px] text-stone hover:text-signal-blue transition-colors"
          >
            PROJECTS
          </a>
          <a 
            href="mailto:fardeenkhann2003@gmail.com" 
            className="font-button-genie text-[12px] text-stone hover:text-signal-blue transition-colors"
          >
            SUPPORT
          </a>
        </div>
      </div>
    </footer>



  );
}
