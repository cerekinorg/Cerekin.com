import { motion } from 'framer-motion';
import { Terminal, Zap, Lock, Code, Cloud, Cpu, Sparkles, Globe } from 'lucide-react';
import { GlassCard } from '../ui';

const features = [
  {
    icon: Terminal,
    title: 'Native CLI Experience',
    description: 'Seamless terminal integration with auto-completion, syntax highlighting, and command history.',
    color: 'blonde-primary',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with async processing and efficient model loading. Get responses in milliseconds.',
    color: 'cremeos-primary',
  },
  {
    icon: Lock,
    title: '100% Private',
    description: 'All processing happens locally. Your data never leaves your machine. Complete privacy guaranteed.',
    color: 'caramel-primary',
  },
  {
    icon: Code,
    title: 'Developer Friendly',
    description: 'Extensive API, plugins system, and custom model support. Built by developers, for developers.',
    color: 'blonde-primary',
  },
  {
    icon: Cloud,
    title: 'Multi-Model Support',
    description: 'Works with Llama, GPT4All, Mistral, and custom GGUF models. Switch models on the fly.',
    color: 'cremeos-primary',
  },
  {
    icon: Cpu,
    title: 'Hardware Optimized',
    description: 'Runs efficiently on CPU and GPU. Automatic optimization for your system configuration.',
    color: 'caramel-primary',
  },
  {
    icon: Sparkles,
    title: 'Smart Context',
    description: 'Persistent conversation history with intelligent context management and session tracking.',
    color: 'blonde-primary',
  },
  {
    icon: Globe,
    title: 'Cross-Platform',
    description: 'Works seamlessly on Linux, macOS, and Windows. Single binary, zero dependencies.',
    color: 'cremeos-primary',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const BlondeFeatures = () => {
  return (
    <section className="section-container relative">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-blonde-primary" />
          <span className="text-sm text-cerekin-text-secondary">Powerful Features</span>
        </motion.div>

        <h2 className="text-5xl font-display font-bold mb-6">
          Everything You Need to
          <br />
          <span className="gradient-text">Master AI Development</span>
        </h2>

        <p className="text-xl text-cerekin-text-secondary">
          Built with cutting-edge technology and designed for maximum productivity.
          Experience the future of AI interaction.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <GlassCard hover glow className="h-full">
              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}`} style={{ color: `var(--${feature.color})` }} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-cerekin-text-secondary text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Hover Effect Indicator */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-sm text-blonde-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ x: 5 }}
                >
                  Learn more →
                </motion.div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/2 left-0 w-64 h-64 bg-blonde-primary/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-64 h-64 bg-cremeos-primary/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </section>
  );
};
