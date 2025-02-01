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
              Dheepak is a driven and visionary professional, blending technical mastery with an unyielding passion for innovation. His journey through web services development, cloud integration, and microservices is marked by the pursuit of excellence, optimizing performance and crafting scalable solutions. 
            </p>
            <p className="text-gray-300 leading-relaxed">
              With a deep-rooted love for learning, he embraces the realms of AI and machine learning, weaving the fabric of future technologies. His expertise in Python, Java, and AWS echoes his commitment to growth, while his experience in DevOps and embedded systems speaks to his versatility. A relentless seeker of knowledge, Dheepak is on a path to leave an indelible mark in the world of AI and beyond.
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