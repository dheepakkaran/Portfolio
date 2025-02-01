import { motion } from 'framer-motion';
import { SkillItem } from './SkillItem';
import { skills } from './skillsData';

export const SkillGrid = () => (
  <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {skills.map((skill, index) => (
      <SkillItem
        key={skill.name}
        {...skill}
        delay={index * 0.1}
      />
    ))}
  </div>
);