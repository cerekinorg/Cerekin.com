import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Usb, HardDrive } from 'lucide-react';
import { CodeBlock, GlassCard } from '../ui';

export const CremeOSInstallation = () => {
  const [activeTab, setActiveTab] = useState<'usb' | 'vm' | 'native'>('usb');

  const installMethods = {
    usb: `# Download the ISO
curl -L https://cremeos.dev/download/latest.iso -o cremeos.iso

# Create bootable USB (Linux/macOS)
sudo dd if=cremeos.iso of=/dev/sdX bs=4M status=progress

# Or use Balena Etcher for a GUI experience`,
    vm: `# Using QEMU/KVM
qemu-system-x86_64 \\
  -cdrom cremeos.iso \\
  -m 4G \\
  -enable-kvm \\
  -cpu host

# Or import into VirtualBox/VMware`,
    native: `# Boot from USB and run the installer
sudo cremeos-install

# Follow the interactive setup
# The installer will:
# - Partition your disk
# - Install the base system
# - Configure AI packages
# - Set up user accounts`,
  };

  return (
    <section className="section-container bg-gradient-to-b from-cerekin-bg via-cerekin-surface/30 to-cerekin-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl lg:text-6xl font-display font-bold mb-6">
            Get <span className="text-cremeos-primary">CremeOS</span>
          </h2>
          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            Choose your installation method and boot into an AI-optimized environment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Installation</h3>

              <div className="flex gap-2 mb-6">
                {[
                  { id: 'usb', icon: Usb, label: 'Live USB' },
                  { id: 'vm', icon: Download, label: 'Virtual Machine' },
                  { id: 'native', icon: HardDrive, label: 'Native Install' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-cremeos-primary text-white'
                        : 'glass text-cerekin-text-secondary hover:text-cerekin-text'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>

              <CodeBlock
                code={installMethods[activeTab]}
                title={`Install via ${activeTab.toUpperCase()}`}
                showLineNumbers={false}
              />
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6">System Requirements</h3>

              <div className="space-y-4 mb-6">
                {[
                  { label: 'Minimum RAM', value: '2GB' },
                  { label: 'Recommended RAM', value: '8GB+' },
                  { label: 'Storage', value: '10GB+' },
                  { label: 'Architecture', value: 'x86_64 / ARM64' },
                ].map((req, i) => (
                  <div key={i} className="flex justify-between items-center glass p-3 rounded-lg">
                    <span className="text-cerekin-text-secondary">{req.label}</span>
                    <span className="font-semibold">{req.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-cerekin-border">
                <h4 className="font-semibold mb-4">What's Included</h4>
                <div className="space-y-2 text-sm">
                  {[
                    'Optimized Linux kernel 6.8',
                    'PyTorch, TensorFlow, JAX',
                    'llama.cpp and GGUF support',
                    'CUDA/ROCm drivers',
                    'Development tools',
                    'Package manager for AI models',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cremeos-primary" />
                      <span className="text-cerekin-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
