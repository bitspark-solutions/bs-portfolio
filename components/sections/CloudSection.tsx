'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Container, Activity, GitBranch, Lock, Gauge } from 'lucide-react';

const tools = [
  {
    icon: Cloud,
    title: 'AWS Infrastructure',
    description: 'EC2, S3, Lambda, RDS, CloudFront',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: Container,
    title: 'Docker & Kubernetes',
    description: 'Container orchestration at scale',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Activity,
    title: 'Datadog Monitoring',
    description: 'Real-time performance tracking',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Pipelines',
    description: 'Automated deployment workflows',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Lock,
    title: 'Security & Compliance',
    description: 'SOC 2, GDPR, PCI DSS standards',
    color: 'from-red-500 to-rose-500',
  },
  {
    icon: Gauge,
    title: 'Amplitude Analytics',
    description: 'Product analytics and insights',
    color: 'from-indigo-500 to-blue-500',
  },
];

export default function CloudSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cloud" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Cloud & <span className="gradient-text">Infrastructure</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The Foundation of reliable, scalable, and secure systems
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${tool.color} rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300`} />

              <div className="relative glassmorphism rounded-xl p-6 h-full space-y-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center`}
                >
                  <tool.icon className="w-7 h-7 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
                  <p className="text-gray-400 text-sm">{tool.description}</p>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-[#00f2fe]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="glassmorphism rounded-2xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                DevOps <span className="gradient-text">Excellence</span>
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Implementing industry-leading DevOps practices with automated CI/CD pipelines, infrastructure as code,
                and comprehensive monitoring solutions.
              </p>

              <div className="space-y-4">
                {[
                  { label: 'Deployment Time', value: '< 10 min' },
                  { label: 'System Uptime', value: '99.9%' },
                  { label: 'Response Time', value: '< 100ms' },
                ].map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-[#1a2332] rounded-lg"
                  >
                    <span className="text-gray-400">{metric.label}</span>
                    <span className="text-xl font-bold gradient-text">{metric.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="w-64 h-64 mx-auto relative"
              >
                {tools.map((tool, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-12 h-12"
                    style={{
                      transform: `rotate(${i * 60}deg) translateY(-100px)`,
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [-360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center`}
                    >
                      <tool.icon className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                ))}

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center">
                  <Cloud className="w-16 h-16 text-[#0a0e27]" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
