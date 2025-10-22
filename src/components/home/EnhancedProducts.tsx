import { motion } from 'framer-motion';
import { Terminal, Candy, Cpu, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { GlassCard, Button } from '../ui';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Blonde-CLI',
    tagline: 'Command Your AI Universe',
    description: 'Powerful open-source CLI for interacting with local and custom AI models. Lightning fast, 100% private.',
    icon: Terminal,
    color: '#7B61FF',
    gradient: 'from-blonde-primary to-cremeos-primary',
    features: [
      { icon: Zap, text: 'Lightning Fast' },
      { icon: Shield, text: '100% Private' },
      { icon: Terminal, text: 'Native CLI' },
    ],
    path: '/blonde',
    stats: { downloads: '10K+', stars: '500+' },
  },
  {
    name: 'Caramel',
    tagline: 'Your Local AI Assistant',
    description: 'Intelligent AI assistant that runs entirely on your machine. Lite and Full versions for every need.',
    icon: Candy,
    color: '#FFB869',
    gradient: 'from-caramel-primary to-blonde-primary',
    features: [
      { icon: Sparkles, text: 'Smart Context' },
      { icon: Shield, text: 'Offline First' },
      { icon: Zap, text: 'Multi-Model' },
    ],
    path: '/caramel',
    stats: { downloads: '5K+', stars: '200+' },
  },
  {
    name: 'CremeOS',
    tagline: 'AI-Optimized Operating System',
    description: 'Performance-tuned OS for AI research and development on low-end hardware. Built for researchers.',
    icon: Cpu,
    color: '#00C2FF',
    gradient: 'from-cremeos-primary to-caramel-primary',
    features: [
      { icon: Cpu, text: 'Optimized' },
      { icon: Zap, text: 'Low Resource' },
      { icon: Shield, text: 'Secure' },
    ],
    path: '/cremeos',
    stats: { downloads: '2K+', stars: '100+' },
  },
];

export const EnhancedProducts = () => {
  return (
    <section className="section-container relative">
      {/* Background Effects */}
      <motion.div
        className="absolute top-1/4 left-0 w-72 h-72 bg-blonde-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-caramel-primary" />
            <span className="text-sm text-cerekin-text-secondary">Our Ecosystem</span>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Three Products,
            <br />
            <span className="gradient-text">One Vision</span>
          </h2>

          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            A complete suite of open-source AI tools designed to give you full control
            over your AI workflows. No subscriptions, no data mining.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link to={product.path}>
                <GlassCard hover glow className="h-full group cursor-pointer relative overflow-hidden">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon with Glow */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
                        style={{ backgroundColor: `${product.color}20` }}
                      >
                        <product.icon
                          className="w-8 h-8"
                          style={{ color: product.color }}
                        />
                        {/* Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                          style={{ backgroundColor: product.color }}
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-blonde-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm font-semibold mb-3" style={{ color: product.color }}>
                      {product.tagline}
                    </p>
                    <p className="text-cerekin-text-secondary mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {product.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${product.color}15` }}
                          >
                            <feature.icon className="w-4 h-4" style={{ color: product.color }} />
                          </div>
                          <span className="text-sm text-cerekin-text-secondary">
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-cerekin-border">
                      <div>
                        <div className="text-lg font-bold" style={{ color: product.color }}>
                          {product.stats.downloads}
                        </div>
                        <div className="text-xs text-cerekin-text-secondary">Downloads</div>
                      </div>
                      <div className="w-px h-8 bg-cerekin-border" />
                      <div>
                        <div className="text-lg font-bold" style={{ color: product.color }}>
                          {product.stats.stars}
                        </div>
                        <div className="text-xs text-cerekin-text-secondary">GitHub Stars</div>
                      </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-semibold" style={{ color: product.color }}>
                        Learn More
                      </span>
                      <ArrowRight className="w-5 h-5" style={{ color: product.color }} />
                    </motion.div>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-cerekin-text-secondary mb-6">
            All products are open source and free to use forever
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
            <Button variant="ghost" size="lg">
              Compare Features
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
