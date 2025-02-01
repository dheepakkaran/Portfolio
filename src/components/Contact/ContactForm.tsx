import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export const ContactForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to open the email client
  const handlePingMeClick = () => {
    const mailtoLink = `mailto:dheepakkaranes@gmail.com?subject=Hello&body=Hi, I wanted to reach out...`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-md mx-auto">
      <AnimatePresence>
        {!isExpanded ? (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handlePingMeClick}
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
            className="space-y-6 bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
          >
            <p className="text-center text-white font-medium">
              The contact form is currently hidden. Please use the "Ping me?" button to open your email client.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};
