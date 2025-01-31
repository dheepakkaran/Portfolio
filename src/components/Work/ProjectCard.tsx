import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ProjectLinks } from './ProjectLinks';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-lg bg-white/5"
    >
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <ProjectLinks 
          demoUrl={project.demoUrl}
          githubUrl={project.githubUrl}
        />
      </div>
    </motion.div>
  );
};