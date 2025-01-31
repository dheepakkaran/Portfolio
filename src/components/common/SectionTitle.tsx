import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
}

export const SectionTitle = ({ children }: SectionTitleProps) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-4xl font-bold text-center mb-16"
  >
    {children}
  </motion.h2>
);