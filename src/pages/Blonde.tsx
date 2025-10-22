import { motion } from 'framer-motion';
import {
  BlondeHero,
  BlondeFeatures,
  CLISimulator,
  BlondeInstallation,
  BlondeCommunity,
} from '../components/blonde';

export default function Blonde() {
  return (
    <div className="min-h-screen bg-cerekin-bg text-cerekin-text">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BlondeHero />
        <BlondeFeatures />
        <CLISimulator />
        <BlondeInstallation />
        <BlondeCommunity />
      </motion.div>
    </div>
  );
}
