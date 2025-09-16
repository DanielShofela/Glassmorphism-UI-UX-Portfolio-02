
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBlob from './components/AnimatedBlob';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen font-sans overflow-x-hidden">
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <AnimatedBlob className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-cyan-400 to-emerald-400 opacity-20 animate-blob-1" />
        <AnimatedBlob className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 animate-blob-2" />
        <AnimatedBlob className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-sky-400 to-indigo-400 opacity-20 animate-blob-3" />
      </div>
      
      <Header />
      
      <main className="container mx-auto px-6 md:px-12 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="text-center py-8 text-slate-500">
        <p>&copy; 2024 Jane Doe. All rights reserved.</p>
      </footer>

      <style>{`
        @keyframes blob-1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 40px) scale(1.1); }
          66% { transform: translate(20px, -20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes blob-3 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(10px, -30px) scale(1.2); }
          66% { transform: translate(-40px, 10px) scale(0.8); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .animate-blob-1 { animation: blob-1 15s infinite ease-in-out; }
        .animate-blob-2 { animation: blob-2 12s infinite ease-in-out; }
        .animate-blob-3 { animation: blob-3 18s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default App;
