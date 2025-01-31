import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  icon: LucideIcon;
  text: string;
  onClick: () => void;
}

export const ActionButton = ({ icon: Icon, text, onClick }: ActionButtonProps) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors relative overflow-hidden group"
  >
    <motion.div
      className="absolute inset-0 bg-black/5"
      initial={{ x: '-100%' }}
      whileHover={{ x: '100%' }}
      transition={{ duration: 0.3 }}
    />
    <Icon size={20} />
    <span className="font-medium">{text}</span>
  </motion.button>
);