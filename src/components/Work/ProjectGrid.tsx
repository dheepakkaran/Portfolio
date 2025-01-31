import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { projects } from './projectsData';

export const ProjectGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project, index) => (
      <ProjectCard key={project.title} project={project} index={index} />
    ))}
  </div>
);