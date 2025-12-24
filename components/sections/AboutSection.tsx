'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, TrendingUp, Globe2 } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f2fe]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold"
              >
                The Founder's <span className="gradient-text">DNA</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="h-1 w-24 bg-gradient-to-r from-[#00f2fe] to-[#4facfe]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              From high-stakes freelancing to architecting enterprise-grade systems for leading US-based marketplaces,
              our journey has been defined by solving complex technical challenges at scale.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              With expertise spanning backend development, fintech integrations, and cloud infrastructure, we build
              systems that power global operations and handle millions of transactions with precision.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                { icon: Briefcase, label: 'Enterprise', value: 'Ready' },
                { icon: TrendingUp, label: 'Performance', value: 'Optimized' },
                { icon: Globe2, label: 'Global', value: 'Scale' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glassmorphism rounded-lg p-4 text-center"
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-[#00f2fe]" />
                  <div className="text-sm text-gray-400">{item.label}</div>
                  <div className="text-lg font-bold gradient-text">{item.value}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glassmorphism rounded-2xl p-8 neon-glow">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-2xl blur opacity-20" />

              <div className="relative space-y-6">
                {!imgError ? (
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-[#00f2fe]/20">
                    <Image
                      src="/logo.png"
                      alt="Bitspark Solutions Logo"
                      fill
                      className="object-cover"
                      onError={() => setImgError(true)}
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center text-6xl font-bold text-[#0a0e27]">
                    BS
                  </div>
                )}

                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold gradient-text">Bitspark Solutions</h3>
                  <p className="text-gray-400">Enterprise Software Engineering</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { label: 'Projects', value: '50+' },
                    { label: 'Years', value: '7+' },
                    { label: 'Technologies', value: '20+' },
                    { label: 'Clients', value: 'Global' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="text-center p-4 bg-[#1a2332] rounded-lg"
                    >
                      <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
