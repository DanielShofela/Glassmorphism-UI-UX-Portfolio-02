import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

  const skills = [
    'UI/UX Design',
    'Figma & Sketch',
    'Prototypage Interactif',
    'Recherche Utilisateur',
    'Systèmes de Design',
    'HTML, CSS & React',
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div ref={ref} className={`container mx-auto px-6 md:px-12 ${animationClasses}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">À propos de moi</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/profile/500/500" 
              alt="Jane Doe"
              className="rounded-lg shadow-2xl shadow-cyan-500/20 w-full max-w-md mx-auto"
            />
          </div>
          <div className="space-y-6 text-slate-300 text-lg">
            <p>
              Salut ! Je suis Jane Doe, une designer UI/UX basée à Paris, passionnée par la création d'expériences numériques qui sont non seulement belles, mais aussi intuitives et efficaces. Mon approche est centrée sur l'humain, cherchant à comprendre les besoins profonds des utilisateurs pour concevoir des solutions qui ont un réel impact.
            </p>
            <p>
              Avec plusieurs années d'expérience, j'ai eu la chance de travailler sur une variété de projets, des applications mobiles aux plateformes SaaS complexes. Mon objectif est toujours le même : transformer des idées complexes en interfaces simples et élégantes.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {skills.map((skill) => (
                <span key={skill} className="bg-slate-800 border border-slate-700 rounded-full px-4 py-1 text-sm font-medium text-cyan-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
