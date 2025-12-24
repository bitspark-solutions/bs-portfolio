'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Layout, Figma, Smartphone, Palette } from 'lucide-react';

export default function FrontendSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="frontend" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f2fe]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Frontend <span className="gradient-text">Excellence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The Interface where design meets functionality
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              {
                icon: Figma,
                title: 'Design to Code',
                description: 'Pixel-perfect conversion from Figma and PSD to responsive layouts',
                color: 'from-purple-500 to-pink-500',
              },
              {
                icon: Layout,
                title: 'React & Next.js',
                description: 'Modern frameworks with TypeScript for type-safe development',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description: 'Mobile-first approach ensuring seamless cross-device experience',
                color: 'from-green-500 to-emerald-500',
              },
              {
                icon: Palette,
                title: 'UI/UX Focus',
                description: 'Accessible, performant interfaces with attention to detail',
                color: 'from-orange-500 to-yellow-500',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="flex items-start space-x-4 glassmorphism rounded-xl p-6 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glassmorphism rounded-2xl p-8 neon-glow">
              <div className="space-y-6">
                <div className="bg-[#1a2332] rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Technology Stack</span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    >
                      <Layout className="w-5 h-5 text-[#00f2fe]" />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Framer'].map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="px-3 py-2 bg-[#0a0e27] rounded-lg text-center text-xs font-medium gradient-text"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: 'Performance Score', value: '95+', icon: '⚡' },
                    { label: 'Accessibility', value: 'WCAG 2.1', icon: '♿' },
                    { label: 'Browser Support', value: '99%', icon: '🌐' },
                  ].map((metric, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 + i * 0.1 }}
                      className="flex items-center justify-between p-4 bg-[#1a2332] rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{metric.icon}</span>
                        <span className="text-gray-400">{metric.label}</span>
                      </div>
                      <span className="text-xl font-bold gradient-text">{metric.value}</span>
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
