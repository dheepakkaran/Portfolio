import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
];

export const SocialLinks = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Connect</h3>
    <div className="flex gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
          aria-label={label}
        >
          <Icon className="w-5 h-5 group-hover:text-white transition-colors" />
        </motion.a>
      ))}
    </div>
  </div>
);