'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Waves, MessageSquare, Package, HandPlatter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Earthquake Alert System',
    description: 'Real-time earthquake monitoring with instant alerts via RabbitMQ message queuing',
    icon: Waves,
    stack: ['Nestjs', 'RabbitMQ', 'PostgreSQL', 'Next.js', 'Redis'],
    features: ['Real-time Processing', 'Geographic Filtering', 'Multi-channel Alerts', 'Historical Data'],
    github: 'https://hquakenow.ovh',
    size: 'large',
  },
  {
    id: 2,
    title: 'Chat Hive',
    description: 'Scalable real-time messaging platform with Socket.io and monorepo architecture',
    icon: MessageSquare,
    stack: ['Node.js', 'Socket.io', 'MongoDB', 'React', 'Turborepo'],
    features: ['Real-time Messaging', 'File Sharing', 'Group Chats', 'End-to-End Encryption'],
    github: 'https://github.com',
    size: 'medium',
  },
  {
    id: 3,
    title: 'Garments Management',
    description: 'Comprehensive inventory and RBAC system for textile manufacturing',
    icon: Package,
    stack: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Redis'],
    features: ['Role-Based Access', 'Inventory Tracking', 'Supply Chain', 'Analytics Dashboard'],
    github: 'https://github.com',
    size: 'medium',
  },
  {
    id: 4,
    title: 'Service Ops',
    description: 'Enterprise marketplace connecting businesses with on-demand technical services',
    icon: HandPlatter,
    stack: ['.Net Core', 'PostgreSQL', 'AWS', 'React', 'Adyen'],
    features: ['Payment Processing', 'Scheduling', 'Real-time Tracking', 'Reporting'],
    size: 'large',
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" ref={ref} className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto"
            >
              The Portfolio of production-ready systems serving thousands of users
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedProject(project)}
                className={`glassmorphism rounded-2xl p-6 cursor-pointer group relative overflow-hidden ${
                  project.size === 'large' ? 'md:col-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/0 to-[#4facfe]/0 group-hover:from-[#00f2fe]/10 group-hover:to-[#4facfe]/10 transition-all duration-300" />

                <div className="relative z-10 h-full flex flex-col">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center mb-4"
                  >
                    <project.icon className="w-7 h-7 text-[#0a0e27]" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-[#1a2332] rounded-full text-xs text-[#00f2fe] border border-[#00f2fe]/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="px-3 py-1 bg-[#1a2332] rounded-full text-xs text-gray-400">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-[#00f2fe]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glassmorphism border-[#00f2fe]/20 max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center">
                    <selectedProject.icon className="w-8 h-8 text-[#0a0e27]" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl gradient-text">{selectedProject.title}</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      {selectedProject.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-4 py-2 bg-[#1a2332] rounded-lg text-sm font-medium gradient-text"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center space-x-2 text-sm text-gray-400"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#00f2fe]" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {selectedProject.github && (
                  <div className="flex gap-3 pt-4">
                    <Button
                      className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0e27] hover:shadow-lg"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
