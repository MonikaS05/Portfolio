import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="bg-deep-space min-h-screen text-starlight antialiased font-body relative selection:bg-mercury-blue selection:text-pure-white">
      {/* Premium custom mouse glow pointer */}
      <CustomCursor />
      
      {/* Navigation header */}
      <Navbar />
      
      {/* Sections Stack */}
      <main className="flex flex-col">
        {/* Full-bleed twilight console landing */}
        <Hero />
        
        {/* Interactive Story, Experience & Education tabs */}
        <Journey />
        
        {/* Tech Arsenal & Accolades side-by-side */}
        <Skills />
        
        {/* 3D Tilt Project Cards Grid */}
        <Projects />
        
        {/* Secure Message Transmission Portal */}
        <Contact />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
