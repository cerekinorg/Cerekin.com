import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'error';
  text: string;
  delay?: number;
}

interface TerminalProps {
  lines: TerminalLine[];
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
}

export const Terminal = ({ lines, autoPlay = true, loop = false, className = '' }: TerminalProps) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isPlaying || currentLineIndex >= lines.length) {
      if (loop && currentLineIndex >= lines.length) {
        setTimeout(() => setCurrentLineIndex(0), 2000);
      }
      return;
    }

    const currentLine = lines[currentLineIndex];
    const delay = currentLine.delay || 1000;

    const timer = setTimeout(() => {
      setCurrentLineIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentLineIndex, isPlaying, lines, loop]);

  const getLineColor = (type: string) => {
    switch (type) {
      case 'command':
        return 'text-blonde-primary';
      case 'success':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      default:
        return 'text-cerekin-text-secondary';
    }
  };

  const getPrompt = (type: string) => {
    switch (type) {
      case 'command':
        return '$ ';
      case 'success':
        return '✓ ';
      case 'error':
        return '✗ ';
      default:
        return '  ';
    }
  };

  return (
    <div className={`terminal-window ${className}`}>
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        <span className="text-cerekin-text-secondary text-sm ml-2">blonde-cli</span>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body min-h-[300px]">
        <AnimatePresence>
          {lines.slice(0, currentLineIndex + 1).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={`mb-2 ${getLineColor(line.type)}`}
            >
              <span className="text-cerekin-text-secondary">{getPrompt(line.type)}</span>
              {line.text}
              {index === currentLineIndex && line.type === 'command' && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-blonde-primary ml-1"
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
