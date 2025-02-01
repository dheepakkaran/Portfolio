import { motion } from 'framer-motion';
import { ProjectGrid } from './ProjectGrid';
import { SectionTitle } from '../common/SectionTitle';

export const Work = () => {
  return (
    <section id="work" className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <SectionTitle>Featured Projects</SectionTitle>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ProjectGrid />
        </motion.div>
      </div>
    </section>
  );
};