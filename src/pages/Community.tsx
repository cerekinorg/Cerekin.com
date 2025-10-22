import { motion } from 'framer-motion';
import { Users, MessageCircle, Github, Twitter, Mail, Heart, Code, Star } from 'lucide-react';
import { GlassCard, Button } from '../components/ui';

const Community = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      color: '#7B61FF',
      description: 'Star our repos, contribute code, report issues',
      link: '#',
      stats: '15K+ Stars',
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      color: '#FFB869',
      description: 'Join discussions, get help, share projects',
      link: '#',
      stats: '5K+ Members',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: '#00C2FF',
      description: 'Follow for updates, news, and announcements',
      link: '#',
      stats: '10K+ Followers',
    },
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
            <Users className="w-4 h-4 text-caramel-primary" />
            <span className="text-sm">Join the Movement</span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="gradient-text">Community</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-cerekin-text-secondary max-w-3xl mx-auto mb-8"
          >
            Join thousands of developers building the future of AI together.
            Open source, collaborative, and welcoming to all skill levels.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {[
            { icon: Users, value: '50K+', label: 'Community Members' },
            { icon: Star, value: '15K+', label: 'GitHub Stars' },
            { icon: Code, value: '200+', label: 'Contributors' },
            { icon: Heart, value: '100%', label: 'Open Source' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <GlassCard className="text-center p-6">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-blonde-primary" />
                <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-cerekin-text-secondary">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <div className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Connect With Us
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((social, i) => (
              <motion.div
                key={social.name}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <GlassCard hover glow className="p-8 group cursor-pointer h-full">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${social.color}20` }}
                    >
                      <social.icon className="w-8 h-8" style={{ color: social.color }} />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-2 text-center group-hover:text-blonde-primary transition-colors">
                      {social.name}
                    </h4>
                    <p className="text-sm text-cerekin-text-secondary text-center mb-4">
                      {social.description}
                    </p>
                    <div className="text-center">
                      <span className="text-xs font-semibold" style={{ color: social.color }}>
                        {social.stats}
                      </span>
                    </div>
                  </GlassCard>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard className="text-center p-12">
            <Mail className="w-16 h-16 mx-auto mb-6 text-caramel-primary" />
            <h3 className="text-2xl font-display font-bold mb-4">
              Stay Updated
            </h3>
            <p className="text-cerekin-text-secondary mb-6">
              Get the latest news, updates, and announcements delivered to your inbox.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="neon" size="lg">Subscribe to Newsletter</Button>
              <Button variant="glass" size="lg">Join Discord</Button>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Community;
