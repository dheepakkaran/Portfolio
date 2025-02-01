import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 2 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="flex flex-col items-center gap-2"
    >
      <span className="text-sm text-white/60">Scroll to explore</span>
      <ChevronDown className="w-5 h-5" />
    </motion.div>
  </motion.div>
);