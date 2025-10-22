import { motion } from 'framer-motion';
import { Terminal, Candy, Cpu, ArrowRight, Sparkles, Zap, Shield, Code, CheckCircle } from 'lucide-react';
import { GlassCard, Button } from '../components/ui';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'blonde',
    name: 'Blonde-CLI',
    tagline: 'Command Your AI Universe',
    description: 'A powerful, open-source command-line interface for interacting with local and custom AI models. Built for developers who demand control, speed, and flexibility.',
    icon: Terminal,
    color: '#7B61FF',
    gradient: 'from-blonde-primary via-cremeos-primary to-blonde-primary',
    path: '/blonde',
    status: 'Available Now',
    features: [
      { icon: Zap, text: 'Lightning Fast Performance' },
      { icon: Shield, text: '100% Private & Local' },
      { icon: Terminal, text: 'Native CLI Experience' },
      { icon: Code, text: 'Developer Friendly API' },
    ],
    stats: { downloads: '10K+', stars: '500+', users: '5K+' },
    highlights: ['Multi-model support', 'Auto-completion', 'Plugin system', 'Cross-platform'],
  },
  {
    id: 'caramel',
    name: 'Caramel',
    tagline: 'Your Intelligent Local Assistant',
    description: 'An AI assistant that runs entirely on your machine. Available in Lite and Full versions, Caramel brings powerful AI capabilities without compromising your privacy.',
    icon: Candy,
    color: '#FFB869',
    gradient: 'from-caramel-primary via-blonde-primary to-caramel-primary',
    path: '/caramel',
    status: 'Beta',
    features: [
      { icon: Sparkles, text: 'Smart Context Awareness' },
      { icon: Shield, text: 'Offline First Design' },
      { icon: Zap, text: 'Multi-Model Support' },
      { icon: Code, text: 'API Integration' },
    ],
    stats: { downloads: '5K+', stars: '200+', users: '3K+' },
    highlights: ['Voice commands', 'Task automation', 'File management', 'Customizable'],
  },
  {
    id: 'cremeos',
    name: 'CremeOS',
    tagline: 'AI-Optimized Operating System',
    description: 'A performance-tuned operating system designed specifically for AI research and development on low-end hardware. Make the most of every resource.',
    icon: Cpu,
    color: '#00C2FF',
    gradient: 'from-cremeos-primary via-caramel-primary to-cremeos-primary',
    path: '/cremeos',
    status: 'Coming Soon',
    features: [
      { icon: Cpu, text: 'Hardware Optimized' },
      { icon: Zap, text: 'Low Resource Usage' },
      { icon: Shield, text: 'Security Focused' },
      { icon: Code, text: 'Developer Tools' },
    ],
    stats: { downloads: '2K+', stars: '100+', users: '1K+' },
    highlights: ['Custom kernel', 'AI accelerators', 'Package manager', 'Live USB ready'],
  },
];

const comparisonFeatures = [
  { name: 'Open Source', blonde: true, caramel: true, cremeos: true },
  { name: '100% Private', blonde: true, caramel: true, cremeos: true },
  { name: 'Cross-Platform', blonde: true, caramel: true, cremeos: false },
  { name: 'CLI Interface', blonde: true, caramel: false, cremeos: true },
  { name: 'GUI Interface', blonde: false, caramel: true, cremeos: true },
  { name: 'Plugin System', blonde: true, caramel: true, cremeos: true },
  { name: 'Multi-Model', blonde: true, caramel: true, cremeos: true },
  { name: 'Cloud Free', blonde: true, caramel: true, cremeos: true },
];

export default function EnhancedProducts() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cerekin-bg text-cerekin-text"
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blonde-primary/10 via-cerekin-bg to-cremeos-primary/10" />
        
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blonde-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cremeos-primary/20 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-caramel-primary" />
            <span className="text-sm">Complete AI Ecosystem</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="gradient-text">Cerekin Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-cerekin-text-secondary max-w-3xl mx-auto mb-8"
          >
            Three powerful tools working together to give you complete control over your AI workflow.
            Open source, private, and built for developers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button variant="neon" size="lg">Compare Features</Button>
            <Button variant="glass" size="lg">View Documentation</Button>
          </motion.div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="section-container">
        <div className="max-w-7xl mx-auto space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard hover glow className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Left: Content */}
                  <div className="flex flex-col justify-center">
                    {/* Status Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cerekin-surface border border-cerekin-border w-fit mb-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-sm">{product.status}</span>
                    </motion.div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: `${product.color}20` }}
                      >
                        <product.icon className="w-8 h-8" style={{ color: product.color }} />
                      </div>
                      <div>
                        <h2 className="text-3xl font-display font-bold">{product.name}</h2>
                        <p className="text-sm font-semibold" style={{ color: product.color }}>
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-cerekin-text-secondary mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {product.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <feature.icon className="w-4 h-4" style={{ color: product.color }} />
                          <span className="text-sm">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 mb-6 pb-6 border-b border-cerekin-border">
                      <div>
                        <div className="text-2xl font-bold" style={{ color: product.color }}>
                          {product.stats.downloads}
                        </div>
                        <div className="text-xs text-cerekin-text-secondary">Downloads</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold" style={{ color: product.color }}>
                          {product.stats.stars}
                        </div>
                        <div className="text-xs text-cerekin-text-secondary">Stars</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold" style={{ color: product.color }}>
                          {product.stats.users}
                        </div>
                        <div className="text-xs text-cerekin-text-secondary">Users</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex gap-3">
                      <Link to={product.path}>
                        <Button variant="neon" icon={<ArrowRight className="w-4 h-4" />}>
                          Learn More
                        </Button>
                      </Link>
                      <Button variant="glass" icon={<CheckCircle className="w-4 h-4" />}>
                        Quick Start
                      </Button>
                    </div>
                  </div>

                  {/* Right: Highlights */}
                  <div className="flex items-center">
                    <div className="glass p-8 rounded-2xl w-full">
                      <h3 className="text-lg font-display font-bold mb-4">Key Highlights</h3>
                      <div className="space-y-3">
                        {product.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-cerekin-surface hover:bg-cerekin-border/30 transition-colors"
                          >
                            <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: product.color }} />
                            <span>{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-container bg-gradient-to-b from-cerekin-bg via-cerekin-surface/30 to-cerekin-bg">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Feature Comparison</span>
            </h2>
            <p className="text-cerekin-text-secondary">
              See how our products stack up at a glance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden"
          >
            <table className="w-full">
              <thead className="bg-cerekin-surface border-b border-cerekin-border">
                <tr>
                  <th className="text-left p-4 font-display">Feature</th>
                  <th className="text-center p-4 font-display text-blonde-primary">Blonde</th>
                  <th className="text-center p-4 font-display text-caramel-primary">Caramel</th>
                  <th className="text-center p-4 font-display text-cremeos-primary">CremeOS</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-cerekin-border/50 hover:bg-cerekin-surface/30 transition-colors"
                  >
                    <td className="p-4">{feature.name}</td>
                    <td className="p-4 text-center">
                      {feature.blonde ? (
                        <CheckCircle className="w-5 h-5 text-blonde-primary mx-auto" />
                      ) : (
                        <span className="text-cerekin-text-secondary">—</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.caramel ? (
                        <CheckCircle className="w-5 h-5 text-caramel-primary mx-auto" />
                      ) : (
                        <span className="text-cerekin-text-secondary">—</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {feature.cremeos ? (
                        <CheckCircle className="w-5 h-5 text-cremeos-primary mx-auto" />
                      ) : (
                        <span className="text-cerekin-text-secondary">—</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
