import { motion, useScroll, useTransform } from 'framer-motion';
import { Terminal as TerminalIcon, Zap, Github, Download } from 'lucide-react';
import { Button } from '../ui';
import { Terminal } from '../ui/Terminal';
import { useRef } from 'react';

const heroLines = [
  { type: 'command' as const, text: 'blonde init --model llama3', delay: 800 },
  { type: 'output' as const, text: 'Initializing Blonde CLI...', delay: 600 },
  { type: 'success' as const, text: 'Model loaded successfully!', delay: 800 },
  { type: 'command' as const, text: 'blonde chat "Explain quantum computing"', delay: 1000 },
  { type: 'output' as const, text: 'Quantum computing uses quantum bits...', delay: 1200 },
];

export const BlondeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 hero-gradient"
        style={{ y, opacity }}
      />

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blonde-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cremeos-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full"
            >
              <Zap className="w-4 h-4 text-blonde-primary" />
              <span className="text-sm text-cerekin-text-secondary">
                Open Source • Developer First • Lightning Fast
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl lg:text-7xl font-display font-bold text-balance"
            >
              Command Your
              <br />
              <span className="gradient-text">AI Universe</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-cerekin-text-secondary text-balance max-w-xl"
            >
              Blonde-CLI is a powerful, open-source command-line interface for interacting with local and custom AI models. 
              Built for developers who demand control, speed, and flexibility.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="neon"
                size="lg"
                icon={<Download className="w-5 h-5" />}
              >
                Install Now
              </Button>
              <Button
                variant="glass"
                size="lg"
                icon={<Github className="w-5 h-5" />}
              >
                View on GitHub
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<TerminalIcon className="w-5 h-5" />}
              >
                Try Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 pt-4"
            >
              <div>
                <div className="text-3xl font-bold text-blonde-primary">10K+</div>
                <div className="text-sm text-cerekin-text-secondary">Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blonde-primary">500+</div>
                <div className="text-sm text-cerekin-text-secondary">GitHub Stars</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blonde-primary">50+</div>
                <div className="text-sm text-cerekin-text-secondary">Contributors</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-blonde-primary/30 rounded-full blur-2xl"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative floating">
              <Terminal lines={heroLines} autoPlay loop className="shadow-2xl pulse-glow" />
            </div>

            {/* Decorative Code Snippets */}
            <motion.div
              className="absolute -bottom-8 -left-8 glass p-4 rounded-lg hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 }}
            >
              <code className="text-sm text-blonde-primary font-mono">
                $ npm install -g blonde-cli
              </code>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-cerekin-text-secondary">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-blonde-primary/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-blonde-primary rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
