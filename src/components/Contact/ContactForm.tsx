import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';
import { FloatingInput } from './FloatingInput';

export const ContactForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <div className="max-w-md mx-auto">
      <AnimatePresence>
        {!isExpanded ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(true)}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white 
                     text-black rounded-xl font-medium hover:bg-gray-100 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Ping me?
          </motion.button>
        ) : (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
          >
            <FloatingInput
              id="name"
              type="text"
              label="Name"
              value={formState.name}
              onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
            />
            
            <FloatingInput
              id="email"
              type="email"
              label="Email"
              value={formState.email}
              onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
            />
            
            <FloatingInput
              id="message"
              type="textarea"
              label="Message"
              value={formState.message}
              onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
            />

            <div className="flex gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-6 py-4 bg-white text-black rounded-xl font-medium 
                         hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
              
              <motion.button
                type="button"
                onClick={() => setIsExpanded(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-4 bg-white/10 rounded-xl font-medium 
                         hover:bg-white/20 transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};