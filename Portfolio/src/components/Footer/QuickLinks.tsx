import { motion } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
];

export const QuickLinks = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Quick Links</h3>
    <div className="grid grid-cols-2 gap-2">
      {links.map(({ label, href }) => (
        <motion.a
          key={label}
          href={href}
          whileHover={{ x: 2 }}
          className="text-white/60 hover:text-white transition-colors"
        >
          {label}
        </motion.a>
      ))}
    </div>
  </div>
);