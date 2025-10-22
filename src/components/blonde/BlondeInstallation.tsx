import { motion } from 'framer-motion';
import { Package, Terminal, CheckCircle, ArrowRight } from 'lucide-react';
import { CodeBlock } from '../ui';
import { useState } from 'react';

const installMethods = [
  {
    id: 'npm',
    name: 'NPM',
    icon: Package,
    code: 'npm install -g blonde-cli',
    description: 'Recommended for Node.js users',
  },
  {
    id: 'curl',
    name: 'cURL',
    icon: Terminal,
    code: 'curl -fsSL https://blonde.cerekin.dev/install.sh | bash',
    description: 'One-line installation script',
  },
  {
    id: 'manual',
    name: 'Manual',
    icon: CheckCircle,
    code: 'wget https://github.com/cerekin/blonde-cli/releases/latest\ntar -xzf blonde-cli-*.tar.gz\nsudo mv blonde /usr/local/bin/',
    description: 'Build from source',
  },
];

const quickStartSteps = [
  {
    step: 1,
    title: 'Initialize Blonde',
    code: 'blonde init',
    description: 'Set up your configuration and download your first model',
  },
  {
    step: 2,
    title: 'Start Chatting',
    code: 'blonde chat "Hello, how are you?"',
    description: 'Interact with AI models directly from your terminal',
  },
  {
    step: 3,
    title: 'Explore Features',
    code: 'blonde --help',
    description: 'Discover all available commands and options',
  },
];

export const BlondeInstallation = () => {
  const [selectedMethod, setSelectedMethod] = useState('npm');

  return (
    <section className="section-container relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cerekin-bg via-cerekin-surface/50 to-cerekin-bg -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-display font-bold mb-6">
            Get Started in <span className="gradient-text">Seconds</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            Choose your preferred installation method and start building with Blonde CLI
          </p>
        </motion.div>

        {/* Installation Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {installMethods.map((method) => (
              <motion.button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`glass glass-hover p-6 rounded-2xl text-left transition-all ${
                  selectedMethod === method.id
                    ? 'ring-2 ring-blonde-primary bg-blonde-primary/5'
                    : ''
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    selectedMethod === method.id
                      ? 'bg-blonde-primary/20'
                      : 'bg-white/5'
                  }`}>
                    <method.icon className={`w-6 h-6 ${
                      selectedMethod === method.id
                        ? 'text-blonde-primary'
                        : 'text-cerekin-text-secondary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-display font-bold mb-1">
                      {method.name}
                    </h3>
                    <p className="text-sm text-cerekin-text-secondary">
                      {method.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Selected Installation Code */}
          <motion.div
            key={selectedMethod}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CodeBlock
              code={installMethods.find((m) => m.id === selectedMethod)?.code || ''}
              title={`Install via ${installMethods.find((m) => m.id === selectedMethod)?.name}`}
            />
          </motion.div>
        </motion.div>

        {/* Quick Start Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-display font-bold mb-8 text-center">
            Quick Start Guide
          </h3>

          <div className="space-y-6">
            {quickStartSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blonde-primary/10 flex items-center justify-center border-2 border-blonde-primary">
                    <span className="text-blonde-primary font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h4 className="text-xl font-display font-bold mb-2">
                    {step.title}
                  </h4>
                  <p className="text-cerekin-text-secondary mb-4">
                    {step.description}
                  </p>
                  <CodeBlock code={step.code} showLineNumbers={false} />
                </div>

                {/* Arrow Connector */}
                {index < quickStartSteps.length - 1 && (
                  <div className="absolute left-6 mt-16 h-12">
                    <ArrowRight className="w-6 h-6 text-blonde-primary/30 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-display font-bold mb-6">System Requirements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blonde-primary">Minimum</h4>
              <ul className="space-y-2 text-cerekin-text-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  4GB RAM
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  2 CPU cores
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  5GB disk space
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Linux, macOS, or Windows 10+
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-cremeos-primary">Recommended</h4>
              <ul className="space-y-2 text-cerekin-text-secondary">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  16GB+ RAM
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  8+ CPU cores or GPU
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  20GB+ disk space
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  CUDA or Metal support
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
