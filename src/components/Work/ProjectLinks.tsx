import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectLinksProps {
  demoUrl: string;
  githubUrl: string;
}

export const ProjectLinks = ({ demoUrl, githubUrl }: ProjectLinksProps) => (
  <div className="flex gap-3">
    <motion.a
      href={demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-md text-sm font-medium transition-colors hover:bg-gray-100"
    >
      <ExternalLink size={16} />
      Demo
    </motion.a>
    <motion.a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-md text-sm font-medium transition-colors hover:bg-white/20"
    >
      <Github size={16} />
      Code
    </motion.a>
  </div>
);