import { useState } from 'react';
import { motion } from 'framer-motion';
import {  Download, Terminal, Package } from 'lucide-react';
import { CodeBlock, GlassCard } from '../ui';

export const CaramelInstallation = () => {
  const [activeTab, setActiveTab] = useState<'npm' | 'binary' | 'source'>('npm');

  const installMethods = {
    npm: `# Install Caramel globally
npm install -g caramel-ai

# Or use with npx
npx caramel-ai chat "Hello!"`,
    binary: `# Download the latest release
curl -fsSL https://caramel.sh/install.sh | sh

# Or download manually from GitHub releases
# https://github.com/cerekin/caramel/releases`,
    source: `# Clone the repository
git clone https://github.com/cerekin/caramel.git
cd caramel

# Install dependencies and build
npm install
npm run build

# Run Caramel
npm start`,
  };

  return (
    <section className="section-container bg-gradient-to-b from-cerekin-bg via-cerekin-surface/30 to-cerekin-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Get <span className="text-caramel-primary">Started</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            Choose your preferred installation method and start using Caramel in minutes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Installation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Installation</h3>

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {[
                  { id: 'npm', icon: Package, label: 'NPM' },
                  { id: 'binary', icon: Download, label: 'Binary' },
                  { id: 'source', icon: Terminal, label: 'Source' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-caramel-primary text-white'
                        : 'glass text-cerekin-text-secondary hover:text-cerekin-text'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>

              <CodeBlock
                code={installMethods[activeTab]}
                title={`Install via ${activeTab.toUpperCase()}`}
                showLineNumbers={false}
              />
            </GlassCard>
          </motion.div>

          {/* Quick Start */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Quick Start</h3>

              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Install Caramel',
                    desc: 'Choose your preferred method above',
                  },
                  {
                    step: '2',
                    title: 'Download a Model',
                    desc: 'Caramel will guide you through model selection',
                  },
                  {
                    step: '3',
                    title: 'Start Chatting',
                    desc: 'Use natural language to interact with your AI',
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-caramel-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-caramel-primary">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-cerekin-text-secondary">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-cerekin-border">
                <h4 className="font-semibold mb-3">System Requirements</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="glass p-3 rounded-lg">
                    <div className="text-cerekin-text-secondary">RAM</div>
                    <div className="font-semibold">4GB+ (8GB recommended)</div>
                  </div>
                  <div className="glass p-3 rounded-lg">
                    <div className="text-cerekin-text-secondary">Storage</div>
                    <div className="font-semibold">5GB+ free space</div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
