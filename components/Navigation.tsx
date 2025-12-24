'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Code2, Wallet, Cloud, Layout, FolderKanban, Boxes, BookOpen, Award, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'hero', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'backend', label: 'Backend', icon: Code2 },
  { id: 'fintech', label: 'Fintech', icon: Wallet },
  { id: 'cloud', label: 'Cloud', icon: Cloud },
  { id: 'frontend', label: 'Frontend', icon: Layout },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'tech-stack', label: 'Tech Stack', icon: Boxes },
  { id: 'methodology', label: 'Process', icon: BookOpen },
  // { id: 'certifications', label: 'Certs', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-1 left-0 right-0 z-40 px-4 md:px-8 py-4"
      >
        <div className="max-w-7xl mx-auto glassmorphism rounded-full px-6 py-3 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] flex items-center justify-center">
              <span className="text-[#0a0e27] font-bold text-xl">BS</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden md:block">Bitspark</span>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0e27]'
                    : 'text-gray-300 hover:text-[#00f2fe]'
                }`}
              >
                <item.icon className="w-4 h-4 inline-block mr-2" />
                {item.label}
              </motion.button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#00f2fe]"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </motion.nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-20 right-4 z-30 glassmorphism rounded-2xl p-6 lg:hidden w-64"
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0e27]'
                    : 'text-gray-300 hover:bg-[#1a2332]'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}
