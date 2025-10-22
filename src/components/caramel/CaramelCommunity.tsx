import { motion } from 'framer-motion';
import { Github, MessageCircle, BookOpen, Star, Users, Candy } from 'lucide-react';
import { Button, GlassCard } from '../ui';

export const CaramelCommunity = () => {
  const communityLinks = [
    {
      icon: Github,
      title: 'GitHub',
      description: 'Star the repo, report issues, contribute code',
      link: '#',
      color: '#7B61FF',
    },
    {
      icon: MessageCircle,
      title: 'Discord',
      description: 'Join discussions, get help, share projects',
      link: '#',
      color: '#FFB869',
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Guides, tutorials, and API references',
      link: '#',
      color: '#00C2FF',
    },
  ];

  return (
    <section className="section-container">
      <div className="max-w-6xl mx-auto">
        {/* Community Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Join the <span className="text-caramel-primary">Community</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            Connect with other users, get support, and contribute to the project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {communityLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard hover glow className="p-8 text-center h-full group cursor-pointer">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${link.color}20` }}
                >
                  <link.icon className="w-8 h-8" style={{ color: link.color }} />
                </div>
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-caramel-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-cerekin-text-secondary">{link.description}</p>
              </GlassCard>
            </motion.a>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-caramel-primary/5 via-transparent to-blonde-primary/5" />
            
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-caramel-primary to-blonde-primary flex items-center justify-center pulse-glow"
              >
                <Candy className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-4xl font-display font-bold mb-4">
                Ready to Get <span className="text-caramel-primary">Started?</span>
              </h3>

              <p className="text-xl text-cerekin-text-secondary mb-8 max-w-2xl mx-auto">
                Download Caramel today and experience the power of local AI assistance
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <Button variant="neon" size="lg">
                  Download Now
                </Button>
                <Button variant="glass" size="lg">
                  View Documentation
                </Button>
                <Button variant="outline" size="lg">
                  Star on GitHub
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 text-sm text-cerekin-text-secondary">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>5K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>200+ Stars</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>100% Open Source</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
