import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white text-2xl font-bold"
        >
          Portfolio
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {['Home', 'Work', 'About', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.nav
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-black"
      >
        <div className="container mx-auto px-4 py-4">
          {['Home', 'Work', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};