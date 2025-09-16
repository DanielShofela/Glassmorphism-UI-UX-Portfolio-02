import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="py-20 lg:py-32 text-center">
      <div ref={ref} className={animationClasses}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Entrons en contact</h2>
        <p className="max-w-2xl mx-auto text-lg text-slate-300 mb-8">
          Je suis toujours ouverte à de nouvelles opportunités et collaborations. N'hésitez pas à m'envoyer un message !
        </p>
        <a
          href="mailto:jane.doe@example.com"
          className="inline-block bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-full px-8 py-3 font-semibold
                     hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300"
        >
          Dites Bonjour
        </a>
        <footer className="mt-20 pt-10 border-t border-slate-800">
          <p className="text-slate-500">
            © {new Date().getFullYear()} Jane Doe. Tous droits réservés.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
             <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
             <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
             <a href="#" className="text-slate-400 hover:text-white transition-colors">Dribbble</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
