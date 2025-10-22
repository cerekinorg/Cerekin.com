import { motion } from 'framer-motion';
import { Rocket, Github, MessageCircle, BookOpen, Mail } from 'lucide-react';
import { Button } from '../ui';

export const FinalCTA = () => {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blonde-primary/10 via-cremeos-primary/10 to-caramel-primary/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundSize: '200% 200%' }}
        />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-blonde-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-cremeos-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-12 rounded-3xl text-center relative overflow-hidden"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blonde-primary/5 via-transparent to-cremeos-primary/5" />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blonde-primary to-cremeos-primary flex items-center justify-center pulse-glow"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl lg:text-5xl font-display font-bold mb-6"
            >
              Ready to Take Control of Your{' '}
              <span className="gradient-text">AI Workflow?</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-cerekin-text-secondary mb-10 max-w-2xl mx-auto"
            >
              Join thousands of developers building powerful AI applications
              with complete privacy and control. Get started in minutes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center mb-12"
            >
              <Button variant="neon" size="lg" icon={<Rocket className="w-5 h-5" />}>
                Get Started Now
              </Button>
              <Button variant="glass" size="lg" icon={<Github className="w-5 h-5" />}>
                Star on GitHub
              </Button>
              <Button variant="outline" size="lg" icon={<BookOpen className="w-5 h-5" />}>
                Read Documentation
              </Button>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-6 pt-8 border-t border-cerekin-border"
            >
              {[
                { icon: MessageCircle, text: 'Join Discord', link: '#' },
                { icon: Github, text: 'GitHub', link: '#' },
                { icon: BookOpen, text: 'Docs', link: '#' },
                { icon: Mail, text: 'Newsletter', link: '#' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sm text-cerekin-text-secondary hover:text-blonde-primary transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.text}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 mt-8"
        >
          {[
            { value: '50K+', label: 'Active Users', color: 'text-blonde-primary' },
            { value: '100%', label: 'Open Source', color: 'text-cremeos-primary' },
            { value: '15K+', label: 'GitHub Stars', color: 'text-caramel-primary' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center glass p-6 rounded-xl"
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
