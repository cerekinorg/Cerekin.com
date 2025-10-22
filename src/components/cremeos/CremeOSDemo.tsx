import { motion } from 'framer-motion';
import { Terminal } from '../ui';

export const CremeOSDemo = () => {
  const demoLines = [
    { type: 'output', text: '🖥️  CremeOS v1.0.0-alpha', delay: 500 },
    { type: 'output', text: 'Linux kernel 6.8-cremeos optimized for AI', delay: 600 },
    { type: 'command', text: 'cremeos-ai list-models', delay: 1000 },
    { type: 'success', text: '✓ Found 3 models: llama3-8b, mistral-7b, phi-3', delay: 800 },
    { type: 'command', text: 'cremeos-ai benchmark --model llama3-8b', delay: 1000 },
    { type: 'output', text: '⚡ Running benchmark...', delay: 600 },
    { type: 'success', text: '✓ 45 tokens/sec (GPU accelerated)', delay: 1000 },
    { type: 'command', text: 'cremeos-monitor resources', delay: 1000 },
    { type: 'success', text: 'RAM: 1.8GB / 2GB | CPU: 45% | GPU: 67%', delay: 900 },
  ];

  return (
    <section className="section-container">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Experience <span className="text-cremeos-primary">CremeOS</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            See how CremeOS handles AI workloads with minimal resources
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Terminal lines={demoLines} autoPlay loop />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-cerekin-text-secondary">
            ✨ Optimized for low-end hardware • Hardware acceleration • Minimal resource usage
          </p>
        </motion.div>
      </div>
    </section>
  );
};
