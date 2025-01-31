import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5 + (i * 0.1),
      duration: 0.5
    }
  })
};

export const HeroButtons = () => (
  <motion.div 
    className="flex flex-wrap justify-center gap-4 pt-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}
  >
    <motion.a
      href="#work"
      variants={buttonVariants}
      initial="initial"
      animate="animate"
      custom={0}
      className="group relative px-6 py-3 bg-white text-black rounded-full 
                 font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors"
    >
      View My Work
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </motion.a>

    {[
      { Icon: Github, href: 'https://github.com', label: 'GitHub' },
      { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
    ].map(({ Icon, href, label }, i) => (
      <motion.a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        custom={i + 1}
        className="p-3 bg-white/10 rounded-full hover:bg-white/20 
                   transition-colors flex items-center gap-2"
        aria-label={label}
      >
        <Icon className="w-5 h-5" />
      </motion.a>
    ))}
  </motion.div>
);