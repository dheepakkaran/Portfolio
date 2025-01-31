import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';
import { ResumePreview } from './ResumePreview';

export const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="space-y-8"
  >
    <div>
      <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
      <p className="text-white/60">
        Schedule a meeting or check out my resume to learn more about my experience and skills.
      </p>
    </div>

    <div className="space-y-6">
      <motion.a
        href="https://calendly.com/your-username" // Replace with your Calendly link
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 4 }}
        className="flex items-start gap-4 p-6 rounded-xl bg-white/5 hover:bg-white/10 
                 transition-colors group cursor-pointer"
      >
        <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <p className="font-medium mb-1">Schedule a Meeting</p>
          <p className="text-sm text-white/60">Find a time that works best for you</p>
        </div>
      </motion.a>

      <ResumePreview />
    </div>
  </motion.div>
);