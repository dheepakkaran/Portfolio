import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, GitBranch } from 'lucide-react';

export const Footer = () => (
  <footer className="py-6 bg-black border-t border-white/10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <div className="text-sm text-white/60">
            This portfolio was built along with AI assistance, driving innovation.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/dheepakkaran', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/dheepak-karan-es/', label: 'LinkedIn' },
            { icon: GitBranch, href: 'https://leetcode.com/u/___ka__ran___/', label: 'LeetCode' } // LeetCode added
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
