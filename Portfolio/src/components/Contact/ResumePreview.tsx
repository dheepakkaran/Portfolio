import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export const ResumePreview = () => (
  <motion.div
    whileHover={{ x: 4 }}
    className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
        <FileText className="w-6 h-6" />
      </div>
      <div>
        <p className="font-medium mb-1">Resume</p>
        <p className="text-sm text-white/60">Quick overview of my experience</p>
      </div>
    </div>

    <div className="bg-black/50 rounded-lg p-4 mb-4">
      <div className="space-y-3">
        <div className="h-2 w-3/4 bg-white/10 rounded"></div>
        <div className="h-2 w-1/2 bg-white/10 rounded"></div>
        <div className="h-2 w-2/3 bg-white/10 rounded"></div>
      </div>
    </div>

    <motion.a
      href="/path-to-your-resume.pdf" // Replace with your resume file path
      download="YourName-Resume.pdf"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg 
                 hover:bg-gray-100 transition-colors text-sm font-medium"
    >
      <Download className="w-4 h-4" />
      Download Resume
    </motion.a>
  </motion.div>
);