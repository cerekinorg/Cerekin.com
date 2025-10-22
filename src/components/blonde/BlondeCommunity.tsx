import { motion } from 'framer-motion';
import { Github, MessageCircle, BookOpen, Star, Users, Rocket, Mail } from 'lucide-react';
import { Button, GlassCard } from '../ui';

const communityLinks = [
  {
    icon: Github,
    title: 'GitHub',
    description: 'Star the repo, contribute code, and report issues',
    link: 'https://github.com/cerekin/blonde-cli',
    stats: '500+ stars',
    color: 'blonde-primary',
  },
  {
    icon: MessageCircle,
    title: 'Discord',
    description: 'Join our active community for support and discussions',
    link: '#',
    stats: '2,000+ members',
    color: 'cremeos-primary',
  },
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides, tutorials, and API references',
    link: '#',
    stats: '100+ pages',
    color: 'caramel-primary',
  },
];

const contributors = [
  { name: 'Alex Chen', commits: 234, avatar: '👨‍💻' },
  { name: 'Sarah Kim', commits: 189, avatar: '👩‍💻' },
  { name: 'Mike Johnson', commits: 156, avatar: '👨‍🔬' },
  { name: 'Emma Wilson', commits: 142, avatar: '👩‍🔧' },
];

export const BlondeCommunity = () => {
  return (
    <section className="section-container relative overflow-hidden">
      {/* Background Gradients */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-blonde-primary/20 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Community Header */}
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
            <Users className="w-4 h-4 text-blonde-primary" />
            <span className="text-sm text-cerekin-text-secondary">Open Source Community</span>
          </motion.div>

          <h2 className="text-5xl font-display font-bold mb-6">
            Join the <span className="gradient-text">Blonde Community</span>
          </h2>

          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            Connect with developers, contribute to the project, and help shape the future of local AI
          </p>
        </motion.div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {communityLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hover glow className="h-full cursor-pointer group">
                <div className="flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-xl bg-${link.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <link.icon className={`w-7 h-7 text-${link.color}`} style={{ color: `var(--${link.color})` }} />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-2">
                    {link.title}
                  </h3>
                  
                  <p className="text-cerekin-text-secondary mb-4 flex-grow">
                    {link.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blonde-primary font-semibold">
                      {link.stats}
                    </span>
                    <motion.span
                      className="text-blonde-primary"
                      whileHover={{ x: 5 }}
                    >
                      →
                    </motion.span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Top Contributors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-2xl mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-display font-bold">Top Contributors</h3>
            <Button variant="outline" size="sm" icon={<Star className="w-4 h-4" />}>
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {contributors.map((contributor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass glass-hover p-4 rounded-xl text-center"
              >
                <div className="text-4xl mb-2">{contributor.avatar}</div>
                <div className="font-semibold text-cerekin-text mb-1">
                  {contributor.name}
                </div>
                <div className="text-sm text-cerekin-text-secondary">
                  {contributor.commits} commits
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass p-12 rounded-3xl text-center relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blonde-primary/10 via-cremeos-primary/10 to-caramel-primary/10"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blonde-primary to-cremeos-primary flex items-center justify-center pulse-glow"
              >
                <Rocket className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-4xl font-display font-bold mb-4">
                Ready to Build Something Amazing?
              </h2>

              <p className="text-xl text-cerekin-text-secondary mb-8 max-w-2xl mx-auto">
                Join thousands of developers using Blonde CLI to power their AI applications.
                Get started today and experience the future of local AI.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="neon" size="lg" icon={<Rocket className="w-5 h-5" />}>
                  Get Started Now
                </Button>
                <Button variant="glass" size="lg" icon={<Github className="w-5 h-5" />}>
                  View on GitHub
                </Button>
                <Button variant="outline" size="lg" icon={<Mail className="w-5 h-5" />}>
                  Subscribe to Updates
                </Button>
              </div>

              {/* Stats Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
              >
                <div>
                  <div className="text-3xl font-bold text-blonde-primary mb-1">10K+</div>
                  <div className="text-sm text-cerekin-text-secondary">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cremeos-primary mb-1">50+</div>
                  <div className="text-sm text-cerekin-text-secondary">Contributors</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-caramel-primary mb-1">100%</div>
                  <div className="text-sm text-cerekin-text-secondary">Open Source</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
