'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CreditCard, Shield, DollarSign, TrendingUp } from 'lucide-react';

const paymentProviders = [
  'Stripe', 'Adyen', 'Unit.co', 'Zelle', 'Bank of America',
  'PayPal', 'Square', 'Braintree', 'Authorize.Net', 'Plaid'
];

const features = [
  {
    icon: CreditCard,
    title: 'Payment Integration',
    description: 'Seamless integration with major payment gateways and processors',
    highlight: 'Stripe • Adyen • Unit.co',
  },
  {
    icon: Shield,
    title: 'Immutable Balance Snapshot',
    description: 'Financial accuracy with real-time balance reconciliation',
    highlight: 'PCI Compliant',
  },
  {
    icon: DollarSign,
    title: 'Multi-Currency Support',
    description: 'Global transactions with automatic currency conversion',
    highlight: '150+ Currencies',
  },
  {
    icon: TrendingUp,
    title: 'Transaction Analytics',
    description: 'Real-time monitoring and reporting for financial insights',
    highlight: 'Real-time Data',
  },
];

export default function FintechSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="fintech" ref={ref} className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4facfe]/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Fintech & <span className="gradient-text">Payment Systems</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            The Core of secure, scalable payment processing
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16 overflow-hidden glassmorphism rounded-2xl p-8"
        >
          <div className="relative flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex space-x-12 whitespace-nowrap"
            >
              {[...paymentProviders, ...paymentProviders].map((provider, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 px-8 py-4 glassmorphism rounded-xl"
                >
                  <span className="text-2xl font-bold gradient-text">{provider}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-xl p-6 space-y-4 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/0 to-[#4facfe]/0 group-hover:from-[#00f2fe]/10 group-hover:to-[#4facfe]/10 transition-all duration-300" />

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00f2fe] to-[#4facfe] flex items-center justify-center mb-4"
                >
                  <feature.icon className="w-7 h-7 text-[#0a0e27]" />
                </motion.div>

                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{feature.description}</p>

                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-[#00f2fe]" />
                  <span className="text-sm gradient-text font-semibold">{feature.highlight}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 glassmorphism rounded-2xl p-8 neon-glow"
        >
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold gradient-text">Immutable Balance Snapshot</h3>
              <p className="text-gray-400">
                Ensuring financial accuracy with real-time balance reconciliation and audit trails
              </p>
            </div>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full"
            >
              <Shield className="w-6 h-6 text-[#0a0e27]" />
              <span className="text-[#0a0e27] font-bold">99.99% Accuracy</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
