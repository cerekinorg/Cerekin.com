import { motion } from 'framer-motion';
import { Terminal, Palette, Laptop, ArrowRight } from 'lucide-react';
import { Button1 as Button } from '../shared/Button';

const products = [
  {
    name: 'BlondE-CLI',
    tagline: 'Command line, reimagined',
    description: 'AI-powered CLI that understands natural language and automates your workflow.',
    icon: Terminal,
    gradient: 'from-brand-purple to-brand-pink',
    features: ['Natural Language', 'Smart Autocomplete', 'Cross-platform'],
  },
  {
    name: 'Caramel',
    tagline: 'Design meets intelligence',
    description: 'AI design assistant that generates production-ready components instantly.',
    icon: Palette,
    gradient: 'from-brand-cyan to-brand-gold',
    features: ['Component Generation', 'Design Systems', 'Figma Integration'],
  },
  {
    name: 'CremeOS',
    tagline: 'Your personal AI workspace',
    description: 'Unified platform that brings all your AI tools together in one place.',
    icon: Laptop,
    gradient: 'from-brand-pink to-brand-purple',
    features: ['Multi-Model', 'Local & Cloud', 'Privacy First'],
  },
];

export const ProductShowcase = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three powerful tools, one vision: democratize AI for everyone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glow-card glass-morphism p-8 group hover:scale-105 transition-transform duration-500"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <product.icon size={32} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-brand-cyan text-sm mb-4">{product.tagline}</p>
              <p className="text-gray-400 mb-6">{product.description}</p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {product.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="ghost" size="sm" className="w-full group-hover:bg-white/10" icon={<ArrowRight size={16} />}>
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
