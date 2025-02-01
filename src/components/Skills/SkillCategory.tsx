import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';
import type { Skill } from './types';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  delay: number;
}

export const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => (
  <div className="mb-6 last:mb-0">
    <motion.h3
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-lg font-semibold mb-4"
    >
      {title}
    </motion.h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillCard
          key={skill.name}
          {...skill}
          delay={delay + index * 0.1}
        />
      ))}
    </div>
  </div>
);