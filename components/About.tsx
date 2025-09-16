
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const skills = ['UI/UX Design', 'Prototyping', 'User Research', 'Interaction Design', 'Figma', 'Webflow'];

const About: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="py-20 lg:py-32" ref={ref}>
      <div className={`glass-card p-8 md:p-12 ${animationClasses}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 flex-shrink-0">
            <img src="https://picsum.photos/seed/avatar/400/400" alt="Jane Doe" className="rounded-full w-48 h-48 md:w-64 md:h-64 mx-auto border-4 border-white/20 shadow-lg"/>
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-slate-300 text-lg mb-6">
              I'm a designer who believes that great design is not just about aesthetics, but about creating seamless and meaningful interactions between people and technology. My process is rooted in empathy, driven by research, and refined through iterative prototyping. I strive to build products that are not only beautiful but also accessible and impactful.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {skills.map(skill => (
                <span key={skill} className="bg-slate-700/50 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
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

export default About;
