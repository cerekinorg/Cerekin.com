import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  hover?: boolean;
  glow?: boolean;
  className?: string;
}

export const GlassCard = ({ children, hover = true, glow = false, className = '', ...props }: GlassCardProps) => {
  const baseStyles = 'glass rounded-2xl p-6';
  const hoverStyles = hover ? 'glass-hover hover-card' : '';
  const glowStyles = glow ? 'glow-card' : '';
  const classes = `${baseStyles} ${hoverStyles} ${glowStyles} ${className}`;

  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
