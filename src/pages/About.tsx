import { motion } from 'framer-motion';
import { Sparkles, Users, Code, Heart, Building } from 'lucide-react';
import { GlassCard, Button } from '../components/ui';

const About = () => {
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
            <Sparkles className="w-4 h-4 text-blonde-primary" />
            <span className="text-sm">Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            About <span className="gradient-text">Cerekin</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-cerekin-text-secondary max-w-3xl mx-auto mb-8"
          >
            We build open, local, developer-first AI systems that prioritize autonomy, privacy,
            and performance. This site is the hub for our products and community.
          </motion.p>
        </div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard glow className="text-center p-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blonde-primary to-cremeos-primary flex items-center justify-center pulse-glow">
              <Building className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-3xl font-display font-bold mb-4">
              Full Story Coming Soon
            </h2>

            <p className="text-cerekin-text-secondary mb-8 max-w-2xl mx-auto">
              We're crafting a detailed story about our mission, team, and vision for the future of AI.
              In the meantime, explore our products and join our community!
            </p>

            {/* Quick Facts */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Code, label: 'Open Source', value: '100%' },
                { icon: Users, label: 'Community', value: '50K+' },
                { icon: Heart, label: 'Products', value: '3' },
                { icon: Sparkles, label: 'Years', value: '2024' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="glass p-4 rounded-xl"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-blonde-primary" />
                  <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-cerekin-text-secondary">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="neon" size="lg">Explore Products</Button>
              <Button variant="glass" size="lg">Join Community</Button>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
