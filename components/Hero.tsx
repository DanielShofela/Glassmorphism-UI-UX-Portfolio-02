import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center" ref={ref}>
      <div className={animationClasses}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
            Concevoir des Expériences
          </span>
          <span className="block">Numériques</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-8">
          Designer UI/UX passionnée, je crée des interfaces intuitives, esthétiques et centrées sur l'utilisateur qui résolvent des problèmes et ravissent les utilisateurs.
        </p>
        <a
          href="#projects"
          onClick={(e) => handleLinkClick(e, '#projects')}
          className="inline-block bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full px-8 py-3 font-semibold
                     hover:bg-cyan-500/40 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300"
        >
          Voir Mes Réalisations
        </a>
      </div>
    </section>
  );
};

export default Hero;