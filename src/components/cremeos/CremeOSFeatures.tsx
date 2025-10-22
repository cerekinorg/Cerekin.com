import { motion } from 'framer-motion';
import { Gauge, HardDrive, Zap, Terminal, Shield, Sparkles, Cpu, Package } from 'lucide-react';
import { GlassCard } from '../ui';

const features = [
  { icon: Gauge, title: 'Optimized Kernel', description: 'Custom-tuned Linux kernel specifically for AI workloads and model inference.', color: '#00C2FF' },
  { icon: HardDrive, title: 'Low Footprint', description: 'Runs smoothly on 2GB RAM minimum. Perfect for older hardware.', color: '#7B61FF' },
  { icon: Zap, title: 'Hardware Accelerated', description: 'Native support for GPU, NPU, and specialized AI accelerators.', color: '#FFB869' },
  { icon: Terminal, title: 'Developer Tools', description: 'Pre-installed AI stack including PyTorch, TensorFlow, and llama.cpp.', color: '#00C2FF' },
  { icon: Shield, title: 'Security First', description: 'Hardened by default with minimal attack surface and secure boot support.', color: '#7B61FF' },
  { icon: Sparkles, title: 'Live USB Ready', description: 'Boot from USB without installation. Try before you commit.', color: '#FFB869' },
  { icon: Cpu, title: 'Multi-Architecture', description: 'Works on x86_64 and ARM64. From laptops to single-board computers.', color: '#00C2FF' },
  { icon: Package, title: 'Package Manager', description: 'Custom package manager optimized for AI libraries and models.', color: '#7B61FF' },
];

export const CremeOSFeatures = () => {
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
            Engineered for <span className="text-cremeos-primary">Performance</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-3xl mx-auto">
            Every component optimized for AI research, development, and deployment
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
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${feature.color}20` }}>
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-cerekin-text-secondary leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
