import { motion, useScroll, useTransform } from 'framer-motion';
import { Candy, Download, Github, ArrowRight } from 'lucide-react';
import { Button } from '../ui';
import { useRef } from 'react';

export const CaramelHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-caramel-primary/10 via-cerekin-bg to-blonde-primary/10"
        style={{ y, opacity }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-caramel-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8"
        >
          <Candy className="w-4 h-4 text-caramel-primary" />
          <span className="text-sm font-medium">Your Personal AI Assistant</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[1.1]"
        >
          <span className="gradient-text">Caramel</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl text-cerekin-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Intelligent AI assistant that runs entirely on your machine.
          <br />
          <span className="text-caramel-primary font-semibold">Context-aware, private, and lightning fast.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <Button variant="neon" size="lg" icon={<Download className="w-5 h-5" />}>
            Download Beta
          </Button>
          <Button variant="glass" size="lg" icon={<Github className="w-5 h-5" />}>
            View on GitHub
          </Button>
          <Button variant="outline" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Quick Start
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto glass p-8 rounded-2xl"
        >
          {[
            { value: '5K+', label: 'Beta Users', color: 'text-caramel-primary' },
            { value: '200+', label: 'GitHub Stars', color: 'text-blonde-primary' },
            { value: '100%', label: 'Private', color: 'text-cremeos-primary' },
            { value: '2', label: 'Versions', color: 'text-caramel-primary' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-cerekin-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-cerekin-text-secondary">
          <span className="text-sm">Explore features</span>
          <div className="w-6 h-10 border-2 border-caramel-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-caramel-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
