import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  delay: number;
}

export const SkillCard = ({ icon: Icon, name, level, delay }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group relative w-24 h-28"
  >
    <div className="absolute inset-0 transform -skew-x-12 bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
    <div className="relative h-full flex flex-col items-center justify-center p-2">
      <Icon className="w-6 h-6 mb-1 text-white/80 group-hover:text-white transition-colors" />
      <h3 className="text-xs font-medium text-center mb-1">{name}</h3>
      <div className="w-12 h-1 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: delay + 0.3 }}
          className="h-full bg-white rounded-full"
        />
      </div>
    </div>
  </motion.div>
);