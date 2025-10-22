import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Globe, Terminal, Box } from 'lucide-react';

const technologies = [
  {
    category: 'Languages',
    icon: Code2,
    items: ['Python', 'TypeScript', 'Rust', 'C++'],
    color: '#7B61FF',
  },
  {
    category: 'Frameworks',
    icon: Box,
    items: ['React', 'FastAPI', 'Tauri', 'PyTorch'],
    color: '#FFB869',
  },
  {
    category: 'AI/ML',
    icon: Cpu,
    items: ['llama.cpp', 'GGUF', 'Transformers', 'ONNX'],
    color: '#00C2FF',
  },
  {
    category: 'Infrastructure',
    icon: Database,
    items: ['Docker', 'SQLite', 'Redis', 'Nginx'],
    color: '#7B61FF',
  },
  {
    category: 'Platforms',
    icon: Globe,
    items: ['Linux', 'macOS', 'Windows', 'ARM'],
    color: '#FFB869',
  },
  {
    category: 'Tools',
    icon: Terminal,
    items: ['Git', 'GitHub Actions', 'Vite', 'ESBuild'],
    color: '#00C2FF',
  },
];

export const TechStack = () => {
  return (
    <section className="section-container relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-blonde-primary/5 via-transparent to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Built with <span className="gradient-text">Modern Tech</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            We use cutting-edge technologies to deliver fast, reliable, and scalable AI tools
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass glass-hover p-6 rounded-2xl group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                </div>
                <h3 className="text-lg font-display font-bold">{tech.category}</h3>
              </div>

              {/* Tech List */}
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-lg bg-cerekin-surface text-sm text-cerekin-text-secondary hover:text-cerekin-text transition-colors cursor-default border border-cerekin-border"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 glass p-8 rounded-2xl max-w-3xl mx-auto"
        >
          {[
            { value: '99.9%', label: 'Uptime', color: 'text-blonde-primary' },
            { value: '<50ms', label: 'Response Time', color: 'text-cremeos-primary' },
            { value: '24/7', label: 'Local First', color: 'text-caramel-primary' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="text-center"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm text-cerekin-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
