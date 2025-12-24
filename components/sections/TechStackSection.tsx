'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Server, Globe } from 'lucide-react';

const techCategories = [
  {
    category: 'Languages',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    items: ['C#', 'Go', 'TypeScript', 'JavaScript', 'PHP', 'Python', 'Java'],
  },
  {
    category: 'Databases',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'Redis', 'RedShift', 'DynamoDB'],
  },
  {
    category: 'Frameworks',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    items: ['NestJS', 'Laravel', 'Next.js', 'React', '.NET Core', 'Express', 'FastAPI'],
  },
  {
    category: 'Cloud & DevOps',
    icon: Globe,
    color: 'from-orange-500 to-yellow-500',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitHub Actions', 'Jenkins'],
  },
];

export default function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="tech-stack" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4facfe]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Interactive <span className="gradient-text">Tech Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The Toolbox powering enterprise-grade solutions
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.8 }}
              className="glassmorphism rounded-2xl p-8 space-y-6"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold gradient-text">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      backgroundColor: 'rgba(0, 242, 254, 0.1)',
                    }}
                    className="px-4 py-2 bg-[#1a2332] rounded-lg text-sm font-medium text-gray-300 cursor-pointer transition-all"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative h-96 glassmorphism rounded-2xl p-8 overflow-hidden"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold gradient-text">Technology Ecosystem</h3>
          </div>

          <div className="relative w-full h-full flex items-center justify-center">
            {techCategories.flatMap(cat => cat.items).map((tech, index) => {
              const angle = (index / (techCategories.flatMap(cat => cat.items).length)) * Math.PI * 2;
              const radius = 150;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{
                    x,
                    y,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1 + index * 0.05,
                    duration: 1,
                    type: 'spring',
                  }}
                  whileHover={{
                    scale: 1.3,
                    zIndex: 10,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2 + (index % 3),
                      repeat: Infinity,
                      delay: index * 0.1,
                    }}
                    className="px-4 py-2 glassmorphism rounded-lg text-sm font-medium gradient-text cursor-pointer whitespace-nowrap"
                  >
                    {tech}
                  </motion.div>
                </motion.div>
              );
            })}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center"
            >
              <span className="text-2xl font-bold text-[#0a0e27]">20+</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
