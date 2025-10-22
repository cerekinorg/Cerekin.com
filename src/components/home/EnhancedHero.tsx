import { motion, useScroll, useTransform } from 'framer-motion';
import {  Sparkles, Github, Star, Download } from 'lucide-react';
import { Button } from '../ui';
import { useRef } from 'react';

export const EnhancedHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blonde-primary/10 via-cerekin-bg to-cremeos-primary/10"
        style={{ y, opacity }}
      />

      {/* Floating Orbs - Enhanced */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blonde-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cremeos-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -80, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-caramel-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center py-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-caramel-primary" />
          <span className="text-sm font-medium">
            Open Source • Privacy First • Developer Loved
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-6 leading-[1.1] text-balance"
        >
          AI Tools for
          <br />
          <span className="gradient-text">Developers,</span>
          <br />
          <span className="text-cerekin-text">Not Corporations</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl sm:text-2xl text-cerekin-text-secondary mb-12 max-w-3xl mx-auto text-balance leading-relaxed"
        >
          Build powerful AI applications locally with our suite of open-source tools.
          <br />
          <span className="text-blonde-primary font-semibold">100% private, infinitely customizable.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="neon" size="lg" icon={<Download className="w-5 h-5" />}>
            Get Started Free
          </Button>
          <Button variant="glass" size="lg" icon={<Github className="w-5 h-5" />}>
            View on GitHub
          </Button>
          <Button variant="outline" size="lg" icon={<Star className="w-5 h-5" />}>
            Explore Products
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto glass p-8 rounded-2xl"
        >
          {[
            { value: '50K+', label: 'Active Users', color: 'text-blonde-primary' },
            { value: '15K+', label: 'GitHub Stars', color: 'text-cremeos-primary' },
            { value: '100%', label: 'Open Source', color: 'text-caramel-primary' },
            { value: '3', label: 'Products', color: 'text-blonde-primary' },
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

        {/* Floating Tech Stack Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {['React', 'TypeScript', 'Python', 'Rust', 'GGUF', 'Local AI'].map((tech, i) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.05 }}
              className="glass px-4 py-2 rounded-full text-sm text-cerekin-text-secondary hover:text-blonde-primary transition-colors cursor-default"
            >
              {tech}
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
          <span className="text-sm">Discover more</span>
          <div className="w-6 h-10 border-2 border-blonde-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-3 bg-blonde-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>

      {/* Particle Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blonde-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};
