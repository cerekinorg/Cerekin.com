import { motion } from 'framer-motion';
import { BookOpen, Code, FileText, Github, Terminal, Cpu, Candy } from 'lucide-react';
import { GlassCard, Button } from '../components/ui';
import { Link } from 'react-router-dom';

const Docs = () => {
  const products = [
    { name: 'Blonde-CLI', icon: Terminal, color: '#7B61FF', path: '/blonde' },
    { name: 'Caramel', icon: Candy, color: '#FFB869', path: '/caramel' },
    { name: 'CremeOS', icon: Cpu, color: '#00C2FF', path: '/cremeos' },
  ];

  return (
    <div className="min-h-screen bg-cerekin-bg text-cerekin-text pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="section-container"
      >
        {/* Hero */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <BookOpen className="w-4 h-4 text-cremeos-primary" />
            <span className="text-sm">Learn & Build</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="gradient-text">Documentation</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-cerekin-text-secondary max-w-3xl mx-auto mb-8"
          >
            Comprehensive guides, API references, and tutorials for all Cerekin products.
            Everything you need to get started and master our tools.
          </motion.p>
        </div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <GlassCard glow className="text-center p-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cremeos-primary to-blonde-primary flex items-center justify-center pulse-glow">
              <FileText className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl font-display font-bold mb-4">
              Full Documentation Coming Soon
            </h2>

            <p className="text-cerekin-text-secondary mb-8 max-w-2xl mx-auto">
              We're working on comprehensive documentation for all products.
              In the meantime, check out our GitHub repos for README files and examples!
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="neon" size="lg" icon={<Github className="w-5 h-5" />}>
                View on GitHub
              </Button>
              <Button variant="glass" size="lg" icon={<Code className="w-5 h-5" />}>
                API Reference
              </Button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Product Quick Links */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Documentation by Product
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <Link to={product.path}>
                  <GlassCard hover className="text-center p-8 group cursor-pointer">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${product.color}20` }}
                    >
                      <product.icon className="w-8 h-8" style={{ color: product.color }} />
                    </div>
                    <h4 className="text-lg font-display font-bold mb-2 group-hover:text-blonde-primary transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-sm text-cerekin-text-secondary">
                      Getting started guide
                    </p>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Docs;
