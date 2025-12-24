'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, ExternalLink, GraduationCap, Code } from 'lucide-react';

const certifications = [
  {
    title: 'B.Sc. Software Engineering',
    issuer: 'Daffodil International University',
    year: '2018',
    type: 'Academic',
    icon: GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    link: '#',
  },
  {
    title: 'HackerRank Certification',
    issuer: 'HackerRank',
    year: '2020',
    type: 'Professional',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
    link: '#',
  },
  {
    title: 'BongoDev Certification',
    issuer: 'BongoDev',
    year: '2019',
    type: 'Professional',
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    link: '#',
  },
  {
    title: 'Advanced PHP Development',
    issuer: 'Certification Body',
    year: '2019',
    type: 'Professional',
    icon: Code,
    color: 'from-orange-500 to-yellow-500',
    link: '#',
  },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f2fe]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Certifications & <span className="gradient-text">Education</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Academic background and professional certifications
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const isFlipped = flippedCards.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                className="h-64 cursor-pointer perspective-1000"
                onClick={() => toggleFlip(index)}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="relative w-full h-full preserve-3d"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className="absolute inset-0 glassmorphism rounded-2xl p-6 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}
                        >
                          <cert.icon className="w-7 h-7 text-white" />
                        </motion.div>

                        <h3 className="text-lg font-bold mb-2 gradient-text">{cert.title}</h3>
                        <p className="text-sm text-gray-400">{cert.issuer}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs px-3 py-1 bg-[#1a2332] rounded-full text-[#00f2fe]">
                          {cert.type}
                        </span>
                        <span className="text-sm text-gray-400">{cert.year}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 glassmorphism rounded-2xl p-6 backface-hidden"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        <div className={`w-full h-20 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4`}>
                          <Award className="w-12 h-12 text-white" />
                        </div>

                        <h4 className="text-lg font-bold mb-2">Verification</h4>
                        <p className="text-sm text-gray-400 mb-4">
                          Click the link below to verify this certification
                        </p>
                      </div>

                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={cert.link}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-lg text-[#0a0e27] font-medium"
                      >
                        <span>Verify</span>
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 glassmorphism rounded-2xl p-8 text-center"
        >
          <GraduationCap className="w-16 h-16 mx-auto mb-4 text-[#00f2fe]" />
          <h3 className="text-2xl font-bold mb-2 gradient-text">
            Daffodil International University
          </h3>
          <p className="text-gray-400 mb-4">
            Bachelor of Science in Software Engineering
          </p>
          <p className="text-sm text-gray-500">
            Dhaka, Bangladesh • 2014 - 2018
          </p>
        </motion.div>
      </div>
    </section>
  );
}
