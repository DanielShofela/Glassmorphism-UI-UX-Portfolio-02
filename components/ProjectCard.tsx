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
      className={`bg-slate-800/50 border border-slate-700/50 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300 ${animationClasses}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 text-sm flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-cyan-900/50 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-4 mt-auto pt-4 border-t border-slate-700/50">
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Code Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;