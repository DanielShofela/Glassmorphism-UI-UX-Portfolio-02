
import React from 'react';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
    const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div ref={ref} className={animationClasses}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
