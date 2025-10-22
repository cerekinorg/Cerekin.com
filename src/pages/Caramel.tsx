// import { motion } from 'framer-motion';
// import { Candy, Download, Github } from 'lucide-react';
// import { Button, GlassCard } from '../components/ui';
// import {
//   CaramelHero,
//   CaramelFeatures,
//   CaramelDemo,
//   CaramelInstallation,
//   CaramelCommunity,
// } from '../components/caramel';

// export default function Caramel() {
//   return (
//     <div className="min-h-screen bg-cerekin-bg text-cerekin-text relative overflow-hidden">
//       {/* Background Content (Blurred) */}
//       <div className="filter  pointer-events-none select-none">
//         <CaramelHero />
//         <CaramelFeatures />
//         <CaramelDemo />
//         <CaramelInstallation />
//         <CaramelCommunity />
//       </div>

//       {/* Coming Soon Overlay */}
//       <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
       
//         <div className="absolute inset-0 glass backdrop-blur-sm bg-cerekin-bg/60" />
        
       
        
//       </div>
//     </div>
//   );
// }



import { motion } from 'framer-motion';
import { Candy, Download, Github } from 'lucide-react';
import { Button, GlassCard } from '../components/ui';
import {
  CaramelHero,
  CaramelFeatures,
  CaramelDemo,
  CaramelInstallation,
  CaramelCommunity,
} from '../components/caramel';

export default function Caramel() {
  return (
    <div className="min-h-screen bg-cerekin-bg text-cerekin-text relative overflow-hidden">
      {/* Background Content */}
      <div className="filter pointer-events-none select-none">
        <CaramelHero />
        <CaramelFeatures />
        <CaramelDemo />
        <CaramelInstallation />
        <CaramelCommunity />
      </div>

      {/* Coming Soon Overlay (only partial area) */}
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        {/* Glass frame area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="
            relative
            rounded-2xl
            bg-cerekin-bg/60
            backdrop-blur-md
            border border-white/10
            shadow-xl
            text-center
            p-35  
          "
        >
          <h1 className="text-3xl font-bold mb-4">Caramel</h1>
          <p className="text-lg flexopacity-80 mb-6">Coming Soon</p>

          <div className="flex justify-center gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Notify Me
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
