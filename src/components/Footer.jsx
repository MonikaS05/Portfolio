import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight-slate border-t border-lead/20 py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-2.5">
          <Terminal size={16} className="text-mercury-blue" />
          <p className="font-body text-caption-custom text-silver">
            © {currentYear} Mohammed Fardeen Khan. All rights reserved.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <a 
            href="#journey" 
            className="font-body text-caption-custom text-silver hover:text-starlight transition-colors duration-300"
          >
            Journey
          </a>
          <a 
            href="#skills" 
            className="font-body text-caption-custom text-silver hover:text-starlight transition-colors duration-300"
          >
            Skills
          </a>
          <a 
            href="#projects" 
            className="font-body text-caption-custom text-silver hover:text-starlight transition-colors duration-300"
          >
            Projects
          </a>
          <a 
            href="mailto:fardeenkhann2003@gmail.com" 
            className="font-body text-caption-custom text-silver hover:text-starlight transition-colors duration-300"
          >
            Support
          </a>
        </div>
      </div>
    </footer>

  );
}
