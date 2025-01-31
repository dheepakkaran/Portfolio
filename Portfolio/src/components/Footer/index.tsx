import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => (
  <footer className="py-6 bg-black border-t border-white/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} John Developer. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com', label: 'GitHub' },
            { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="text-white/60 hover:text-white transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);