import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

export const TypewriterText = ({ text, delay = 0 }: TypewriterTextProps) => {
  const controls = useAnimationControls();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        transition: { duration: 0.01, delay }
      });
      await controls.start({
        width: "100%",
        transition: { duration: 1, delay: delay + 0.5, ease: "easeOut" }
      });
    };
    sequence();
  }, [controls, delay]);

  return (
    <div className="relative inline-flex overflow-hidden">
      <motion.span
        initial={{ opacity: 0 }}
        animate={controls}
      >
        {text}
      </motion.span>
      <motion.div
        initial={{ width: "100%" }}
        animate={controls}
        className="absolute top-0 right-0 bottom-0 bg-black"
      />
    </div>
  );
};