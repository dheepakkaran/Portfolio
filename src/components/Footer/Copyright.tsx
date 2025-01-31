import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Copyright = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
    className="text-center text-white/60 text-sm"
  >
    <p className="flex items-center justify-center gap-1">
      Made with <Heart className="w-4 h-4 text-red-500" /> by Your Name
    </p>
    <p>© {new Date().getFullYear()} All rights reserved.</p>
  </motion.div>
);