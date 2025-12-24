'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useState } from 'react';

export default function HeroSection() {
  const headline = "Empowering Global Enterprises with Scalable Software Excellence";
  const subheadline = "Specializing in backend engineering, fintech integrations, and microservices architecture";
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated particles background */}
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/10 via-transparent to-[#4facfe]/10 animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Centered Logo with Glow Effect */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Outer glow rings */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] opacity-30 blur-md"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Logo container */}
            {!imgError ? (
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-[#00f2fe]/50 shadow-2xl shadow-[#00f2fe]/30"
              >
                <Image
                  src="/logo.png"
                  alt="Bitspark Solutions Logo"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImgError(true)}
                />
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center shadow-2xl shadow-[#00f2fe]/30"
              >
                <span className="text-[#0a0e27] font-bold text-4xl md:text-5xl lg:text-6xl">BS</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold gradient-text"
        >
          Bitspark Solutions
        </motion.h2>

        {/* Headline */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {headline.split(' ').map((word, wordIndex, wordsArray) => {
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
                        delay: 0.5 + (charOffset + charIndex) * 0.02,
                        duration: 0.4,
                      }}
                      className="inline-block gradient-text"
                    >
                      {char}
                    </motion.span>
                  ))}
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
            transition={{ delay: 2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto"
          >
            {subheadline}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0e27] hover:shadow-lg hover:shadow-[#00f2fe]/50 text-lg px-8 font-semibold"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-[#00f2fe] text-[#00f2fe] hover:bg-[#00f2fe]/10 text-lg px-8 font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
          className="relative mt-16 flex justify-center"
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
