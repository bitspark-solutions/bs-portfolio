'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-[#00f2fe]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] flex items-center justify-center">
                <span className="text-[#0a0e27] font-bold text-xl">BS</span>
              </div>
              <span className="text-xl font-bold gradient-text">Bitspark</span>
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering enterprises with scalable software solutions and cutting-edge technology.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Backend', 'Fintech', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-[#00f2fe] transition-colors text-sm"
                  >
                    {link}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text">Services</h4>
            <ul className="space-y-2">
              {['Backend Development', 'Fintech Integration', 'Cloud Infrastructure', 'Frontend Development', 'DevOps'].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-[#00f2fe] flex-shrink-0 mt-0.5" />
                <a href="mailto:support@bitsparksolutions.com" className="text-gray-400 hover:text-[#00f2fe] text-sm">
                  support@bitsparksolutions.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#00f2fe] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#00f2fe]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Bitspark Solutions. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            {[
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:support@bitsparksolutions.com', label: 'Email' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center text-[#00f2fe] hover:bg-[#00f2fe]/10 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              onClick={scrollToTop}
              size="icon"
              className="rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0e27] hover:shadow-lg hover:shadow-[#00f2fe]/50"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            Built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#00f2fe]" />
    </footer>
  );
}
