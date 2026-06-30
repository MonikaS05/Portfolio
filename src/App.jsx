import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ParticleConstellation from './components/ParticleConstellation';

export default function App() {
  return (
    <div className="bg-sky-wash min-h-screen text-midnight-ink antialiased font-body relative selection:bg-morning-tint selection:text-midnight-ink">
      {/* HTML5 Canvas Background Constellation */}
      <ParticleConstellation />
      
      {/* Premium custom mouse glow pointer */}
      <CustomCursor />
      
      {/* Navigation header */}
      <Navbar />
      
      {/* Sections Stack */}
      <main className="flex flex-col relative z-10 bg-transparent">
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
