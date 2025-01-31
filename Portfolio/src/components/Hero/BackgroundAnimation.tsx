import { motion } from 'framer-motion';

export const BackgroundAnimation = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20"
    />
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5" />
    <div className="absolute inset-0 bg-black/80" />
  </div>
);