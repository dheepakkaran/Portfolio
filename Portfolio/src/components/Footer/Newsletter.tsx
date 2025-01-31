import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter signup logic here
    console.log('Newsletter signup:', email);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Stay Updated</h3>
      <p className="text-sm text-white/60">Subscribe to my newsletter for the latest updates.</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 bg-white/5 rounded-lg border border-white/10 
                   focus:outline-none focus:ring-2 focus:ring-white/20"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 
                   transition-colors flex items-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Subscribe</span>
        </motion.button>
      </form>
    </div>
  );
};