import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBlob from './components/AnimatedBlob';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans relative overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedBlob className="top-0 left-0 w-96 h-96 bg-cyan-500/20" />
        <AnimatedBlob className="top-1/4 right-0 w-96 h-96 bg-purple-500/20" />
        <AnimatedBlob className="bottom-0 left-1/4 w-96 h-96 bg-pink-500/20" />
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
