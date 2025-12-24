'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, FileCode, TestTube, Rocket, Shield } from 'lucide-react';

const methodologies = [
  {
    icon: FileCode,
    title: 'Domain-Driven Development',
    description: 'Aligning code architecture with business domains for maintainable, scalable systems',
    details: ['Bounded Contexts', 'Aggregate Roots', 'Entity Modeling', 'Value Objects'],
  },
  {
    icon: TestTube,
    title: 'End-to-End Testing',
    description: 'Comprehensive test coverage from unit to integration tests',
    details: ['Unit Tests', 'Integration Tests', 'E2E Automation', 'TDD Approach'],
  },
  {
    icon: Shield,
    title: 'Avalara AvaTax Compliance',
    description: 'Automated tax calculation and compliance workflows',
    details: ['Tax Calculation', 'Address Validation', 'Reporting', 'Multi-jurisdiction'],
  },
  {
    icon: Rocket,
    title: 'Agile & DevOps',
    description: 'Continuous delivery with automated pipelines and monitoring',
    details: ['Sprint Planning', 'CI/CD', 'Code Reviews', 'Monitoring'],
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'Rigorous QA processes ensuring production-ready code',
    details: ['Code Standards', 'Performance Testing', 'Security Audits', 'Documentation'],
  },
];

export default function MethodologySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="methodology" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Methodology & <span className="gradient-text">Compliance</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The Process ensuring quality, security, and compliance
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00f2fe] to-[#4facfe]" />

          <div className="space-y-16">
            {methodologies.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:text-right" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glassmorphism rounded-2xl p-6 inline-block"
                  >
                    <h3 className="text-2xl font-bold mb-3 gradient-text">{method.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{method.description}</p>
                    <div className="flex flex-wrap gap-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      {method.details.map((detail, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-[#1a2332] rounded-full text-xs text-[#00f2fe]"
                        >
                          {detail}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center flex-shrink-0"
                >
                  <method.icon className="w-8 h-8 text-[#0a0e27]" />
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 glassmorphism rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Industry Standards & Best Practices</h3>
          <p className="text-gray-400 mb-6">
            Following proven methodologies and compliance standards to deliver enterprise-grade solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['SOLID', 'Clean Code', 'GDPR', 'SOC 2', 'PCI DSS', 'ISO 27001'].map((standard, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.7 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-[#1a2332] rounded-xl font-bold gradient-text"
              >
                {standard}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
