
import React from 'react';
import type { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  const { ref, animationClasses } = useScrollAnimation<HTMLDivElement>();

  return (
    <div 
      ref={ref} 
      className={`glass-card-project group relative overflow-hidden rounded-2xl ${animationClasses}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          {project.title}
        </h3>
        <p className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-100">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out delay-200">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-slate-700/50 text-cyan-300 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-cyan-400/50 transition-all duration-300 pointer-events-none transform scale-95 group-hover:scale-100"></div>
       <style>{`
        .glass-card-project {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
