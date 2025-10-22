import { motion } from 'framer-motion';
import { Cpu, Download, Github } from 'lucide-react';
import { GlassCard, Button } from '../components/ui';
import {
  CremeOSHero,
  CremeOSFeatures,
  CremeOSDemo,
  CremeOSInstallation,
  CremeOSCommunity,
} from '../components/cremeos';

export default function CremeOS() {
  return (
    <div className="min-h-screen bg-cerekin-bg text-cerekin-text relative overflow-hidden">
      {/* Background Content (Blurred) */}
      <div className="filter  pointer-events-none select-none">
        <CremeOSHero />
        <CremeOSFeatures />
        <CremeOSDemo />
        <CremeOSInstallation />
        <CremeOSCommunity />
      </div>

      {/* Coming Soon Overlay (only partial area) */}
      
    </div>
  );
}
