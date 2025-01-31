import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillItemProps {
  icon: LucideIcon;
  name: string;
  delay: number;
}

export const SkillItem = ({ icon: Icon, name, delay }: SkillItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
  >
    <Icon className="w-8 h-8 mb-2 text-white/80" />
    <span className="text-sm font-medium text-center">{name}</span>
  </motion.div>
);