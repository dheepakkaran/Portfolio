import { motion } from 'framer-motion';
import { TypewriterText } from './TypewriterText';
import { HeroButtons } from './HeroButtons';

export const HeroContent = () => (
  <div className="relative z-10 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="text-white/80 text-xl">
        <TypewriterText text="Hello, I'm" delay={0} />
      </h2>
      
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-white to-white/80 text-transparent bg-clip-text">
        <TypewriterText text="John Developer" delay={0.5} />
      </h1>
      
      <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <p className="text-xl text-white/60 max-w-2xl mx-auto">
        <TypewriterText 
          text="Crafting digital experiences through creative development and innovative solutions" 
          delay={1}
        />
      </p>

      <HeroButtons />
    </motion.div>
  </div>
);