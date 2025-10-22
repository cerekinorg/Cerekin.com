import { motion } from 'framer-motion';
import { Brain, Shield, Zap, MessageSquare, FileText, Sparkles, Code, Lock } from 'lucide-react';
import { GlassCard } from '../ui';

const features = [
  {
    icon: Brain,
    title: 'Context Aware',
    description: 'Understands your workflow and remembers past conversations for intelligent assistance.',
    color: '#FFB869',
  },
  {
    icon: Shield,
    title: '100% Private',
    description: 'Runs entirely offline on your machine. No data leaves your computer, ever.',
    color: '#7B61FF',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for performance with support for multiple AI models and hardware acceleration.',
    color: '#00C2FF',
  },
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: 'Chat naturally with advanced language understanding and context retention.',
    color: '#FFB869',
  },
  {
    icon: FileText,
    title: 'Document Analysis',
    description: 'Analyze, summarize, and query your documents with AI-powered insights.',
    color: '#7B61FF',
  },
  {
    icon: Code,
    title: 'Code Assistant',
    description: 'Get help with coding, debugging, and learning new programming concepts.',
    color: '#00C2FF',
  },
  {
    icon: Sparkles,
    title: 'Multi-Model Support',
    description: 'Choose from various AI models or bring your own custom models.',
    color: '#FFB869',
  },
  {
    icon: Lock,
    title: 'No Data Mining',
    description: 'Your conversations and data stay private. We never collect or sell user data.',
    color: '#7B61FF',
  },
];

export const CaramelFeatures = () => {
  return (
    <section className="section-container bg-gradient-to-b from-cerekin-bg via-cerekin-surface/30 to-cerekin-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Powerful <span className="text-caramel-primary">Features</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-3xl mx-auto">
            Everything you need in a personal AI assistant, designed for privacy and performance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hover className="h-full p-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-cerekin-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
