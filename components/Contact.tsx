
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="py-20 lg:py-32">
       <div ref={ref} className={`glass-card text-center p-8 md:p-12 ${animationClasses}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Together</h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-lg mb-8">
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
        <a
          href="mailto:hello@janedoe.com"
          className="inline-block bg-pink-500/20 text-pink-300 border border-pink-500/30 rounded-full px-8 py-3 font-semibold
                     hover:bg-pink-500/40 hover:text-white hover:shadow-lg hover:shadow-pink-500/20 transform hover:-translate-y-1 transition-all duration-300"
        >
          Get in Touch
        </a>
       </div>
       <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;
