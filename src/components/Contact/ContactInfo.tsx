import { motion } from 'framer-motion'; // Importing framer-motion for animation
import { FileText } from 'lucide-react'; // Importing FileText icon from lucide-react

export const ContactInfo = () => (
  <motion.div
    initial={{ opacity: 0, x: -50 }} // Initial state (opacity: 0, x: -50)
    whileInView={{ opacity: 1, x: 0 }} // On scroll into view (opacity: 1, x: 0)
    transition={{ duration: 0.5 }} // Animation duration
    viewport={{ once: true }} // Trigger animation only once
    className="space-y-8" // Space between elements (margin bottom)
  >
    <div>
      <h3 className="text-2xl font-bold mb-2">Let's Connect</h3> {/* Heading */}
      <p className="text-white/60">
        Download my resume to learn more about my experience and skills.
      </p> {/* Description */}
    </div>

    <motion.a
      href="https://drive.google.com/file/d/1cMfDRcIBjIL8ZsA3LZgF8aUwM2ctBbOf/view?usp=drive_link" // Updated link
      target="_blank" // Open link in new tab
      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-colors" // Tailwind CSS classes for styling
    >
      <FileText className="w-5 h-5" /> {/* Icon */}
      Download Resume {/* Button text */}
    </motion.a>
  </motion.div>
);
