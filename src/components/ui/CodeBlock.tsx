import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeBlock = ({ 
  code, 
  language = 'bash', 
  title, 
  showLineNumbers = false,
  className = '' 
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <motion.div
      className={`terminal-window overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500" />
        <div className="terminal-dot bg-yellow-500" />
        <div className="terminal-dot bg-green-500" />
        {title && (
          <span className="text-cerekin-text-secondary text-sm ml-2">{title}</span>
        )}
        <button
          onClick={handleCopy}
          className="ml-auto p-2 hover:bg-white/5 rounded transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-cerekin-text-secondary" />
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        <pre className="text-cerekin-text">
          {showLineNumbers ? (
            <code>
              {lines.map((line, index) => (
                <div key={index} className="flex">
                  <span className="text-cerekin-text-secondary mr-4 select-none">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  <span>{line}</span>
                </div>
              ))}
            </code>
          ) : (
            <code>{code}</code>
          )}
        </pre>
      </div>
    </motion.div>
  );
};
