import { motion } from 'framer-motion';
import { Shield, Zap, Heart, Code, Unlock, Users } from 'lucide-react';
import { GlassCard } from '../ui';

const reasons = [
  {
    icon: Shield,
    title: '100% Privacy',
    description: 'Your data never leaves your machine. No cloud dependencies, no tracking, no compromises.',
    color: '#7B61FF',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance. Native execution, hardware acceleration, and efficient resource usage.',
    color: '#00C2FF',
  },
  {
    icon: Unlock,
    title: 'Fully Open Source',
    description: 'Every line of code is open. Fork it, modify it, audit it. True transparency and freedom.',
    color: '#FFB869',
  },
  {
    icon: Code,
    title: 'Developer First',
    description: 'Built by developers, for developers. Powerful APIs, extensive docs, and active community.',
    color: '#7B61FF',
  },
  {
    icon: Heart,
    title: 'Free Forever',
    description: 'No subscriptions, no paywalls, no hidden costs. Open source means free for everyone, always.',
    color: '#00C2FF',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Shaped by user feedback. Join thousands of developers building the future of AI together.',
    color: '#FFB869',
  },
];

export const WhyCerekin = () => {
  return (
    <section className="section-container relative bg-gradient-to-b from-cerekin-bg via-cerekin-surface/30 to-cerekin-bg">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(#7B61FF 1px, transparent 1px), linear-gradient(90deg, #7B61FF 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Why <span className="gradient-text">Cerekin?</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-3xl mx-auto">
            We believe AI tools should empower creators, not corporations.
            That's why we build everything in the open, for everyone.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hover className="h-full">
                {/* Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${reason.color}20` }}
                  >
                    <reason.icon className="w-7 h-7" style={{ color: reason.color }} />
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3">{reason.title}</h3>
                <p className="text-cerekin-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="glass p-8 rounded-2xl max-w-3xl mx-auto border border-blonde-primary/20">
            <p className="text-2xl font-display font-semibold mb-4 text-balance">
              "AI should be <span className="text-blonde-primary">accessible</span>,{' '}
              <span className="text-cremeos-primary">transparent</span>, and{' '}
              <span className="text-caramel-primary">yours</span> to control."
            </p>
            <p className="text-cerekin-text-secondary">— The Cerekin Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
