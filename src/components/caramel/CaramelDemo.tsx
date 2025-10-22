import { motion } from 'framer-motion';
import { Terminal } from '../ui';

export const CaramelDemo = () => {
  const demoLines = [
    { type: 'output', text: '🍬 Caramel AI Assistant v1.0.0', delay: 500 },
    { type: 'output', text: 'Running locally on your machine', delay: 600 },
    { type: 'command', text: 'caramel chat "Explain quantum computing"', delay: 1000 },
    { type: 'output', text: '💭 Thinking...', delay: 800 },
    { type: 'success', text: 'Quantum computing uses quantum mechanics principles...', delay: 1000 },
    { type: 'command', text: 'caramel analyze document.pdf', delay: 1000 },
    { type: 'success', text: '✓ Analyzed 15 pages in 2.3 seconds', delay: 800 },
    { type: 'command', text: 'caramel code "Create a React component"', delay: 1000 },
    { type: 'success', text: '✓ Generated React component with TypeScript', delay: 900 },
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
            See It In <span className="text-caramel-primary">Action</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            Watch Caramel handle various tasks with natural language commands
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
            ✨ All processing happens locally • No internet required • Your data stays private
          </p>
        </motion.div>
      </div>
    </section>
  );
};
