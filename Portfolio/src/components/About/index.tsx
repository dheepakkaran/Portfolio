import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionTitle } from '../common/SectionTitle';
import { SkillGrid } from '../Skills/SkillGrid';

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>About Me</SectionTitle>
        
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Passionate About Creating</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              With over 5 years of experience in web development and design, 
              I specialize in creating modern digital experiences that combine 
              beautiful design with clean, efficient code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach focuses on user-centered design principles and 
              performance optimization, ensuring that every project delivers 
              both aesthetic appeal and functional excellence.
            </p>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            <SkillGrid />
          </div>
        </motion.div>
      </div>
    </section>
  );
};