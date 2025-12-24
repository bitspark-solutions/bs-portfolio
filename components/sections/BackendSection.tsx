'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Database, Zap, GitBranch } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: '.Net & NestJS Microservices',
    description: 'Scalable backend architecture with modular design patterns',
    tech: ['C#', 'TypeScript', 'REST API', 'GraphQL'],
  },
  {
    icon: Database,
    title: 'PHP Enterprise',
    description: 'Legacy system modernization and high-performance APIs',
    tech: ['Laravel', 'Symfony', 'MySQL'],
  },
  {
    icon: Zap,
    title: 'Event-Driven Architecture',
    description: 'Real-time data processing with message queues',
    tech: ['RabbitMQ', 'Kafka', 'Redis'],
  },
  {
    icon: GitBranch,
    title: 'Distributed Systems',
    description: 'Microservices communication and service mesh',
    tech: ['gRPC', 'API Gateway', 'Load Balancing'],
  },
];

export default function BackendSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="backend" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Backend & <span className="gradient-text">Microservices</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The Engine that powers enterprise applications with robust, scalable architecture
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glassmorphism rounded-xl p-6 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/10 to-[#4facfe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center"
                >
                  <service.icon className="w-7 h-7 text-[#0a0e27]" />
                </motion.div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-[#1a2332] rounded-full text-xs text-[#00f2fe] border border-[#00f2fe]/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 relative"
        >
          <div className="glassmorphism rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Service Connectivity Map</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="relative"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-[#0a0e27]" />
                  </div>
                  {index < services.length - 1 && (
                    <motion.div
                      animate={{ scaleX: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] origin-left"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
