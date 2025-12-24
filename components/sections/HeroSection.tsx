'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const headline = "Empowering Global Enterprises with Scalable Software Excellence";
  const subheadline = "Specializing in backend engineering, fintech integrations, and microservices architecture";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00f2fe] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/10 via-transparent to-[#4facfe]/10 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="inline-flex items-center space-x-2 px-4 py-2 glassmorphism rounded-full"
        >
          <Sparkles className="w-5 h-5 text-[#00f2fe]" />
          <span className="text-sm text-gray-300">Welcome to Bitspark Solutions</span>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            {headline.split(' ').map((word, wordIndex, wordsArray) => {
              // Calculate the character offset for animation delay
              const charOffset = wordsArray
                .slice(0, wordIndex)
                .reduce((acc, w) => acc + w.length + 1, 0);
              
              return (
                <span key={wordIndex} className="inline-block whitespace-nowrap">
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: (charOffset + charIndex) * 0.03,
                        duration: 0.5,
                      }}
                      className="inline-block gradient-text"
                    >
                      {char}
                    </motion.span>
                  ))}
                  {/* Add space after word except for the last word */}
                  {wordIndex < wordsArray.length - 1 && (
                    <span className="inline-block w-[0.3em]">&nbsp;</span>
                  )}
                </span>
              );
            })}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {subheadline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0e27] hover:shadow-lg hover:shadow-[#00f2fe]/50 text-lg px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-[#00f2fe] text-[#00f2fe] hover:bg-[#00f2fe]/10 text-lg px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-[#00f2fe]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
