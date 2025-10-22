import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '../ui';

interface Message {
  type: 'user' | 'system' | 'ai';
  text: string;
  timestamp: Date;
}

const sampleCommands = [
  'blonde chat "Explain machine learning"',
  'blonde generate --prompt "Write a Python function"',
  'blonde list-models',
  'blonde config --model llama3',
];

const responses: { [key: string]: string } = {
  'blonde chat "Explain machine learning"': 'Machine learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed. It focuses on developing algorithms that can analyze data, identify patterns, and make decisions with minimal human intervention.',
  'blonde generate --prompt "Write a Python function"': 'def fibonacci(n):\n    if n <= 1:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\n# Example usage\nprint(fibonacci(10))  # Output: 55',
  'blonde list-models': 'Available Models:\n• llama-3-8b (active)\n• mistral-7b\n• codellama-13b\n• gpt4all-j\n• custom-model-1',
  'blonde config --model llama3': '✓ Configuration updated\n✓ Model set to: llama-3-8b\n✓ Loading model weights...\n✓ Model ready!',
};

export const CLISimulator = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'system', text: 'Blonde CLI v1.0.0 - Interactive Demo', timestamp: new Date() },
    { type: 'system', text: 'Type a command or click a suggestion below. Try it out!', timestamp: new Date() },
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (command?: string) => {
    const commandToRun = command || input;
    if (!commandToRun.trim() || isProcessing) return;

    // Add user message
    setMessages((prev) => [
      ...prev,
      { type: 'user', text: commandToRun, timestamp: new Date() },
    ]);
    setInput('');
    setIsProcessing(true);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Get response
    const response = responses[commandToRun] || 
      `Command not recognized. Try one of the suggested commands below.`;

    setMessages((prev) => [
      ...prev,
      { type: 'ai', text: response, timestamp: new Date() },
    ]);
    setIsProcessing(false);
  };

  const handleReset = () => {
    setMessages([
      { type: 'system', text: 'Blonde CLI v1.0.0 - Interactive Demo', timestamp: new Date() },
      { type: 'system', text: 'Type a command or click a suggestion below. Try it out!', timestamp: new Date() },
    ]);
    setInput('');
  };

  const handleSuggestionClick = (command: string) => {
    setInput(command);
    handleSubmit(command);
  };

  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blonde-primary" />
            <span className="text-sm text-cerekin-text-secondary">Try It Live</span>
          </motion.div>

          <h2 className="text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Interactive CLI</span> Playground
          </h2>

          <p className="text-xl text-cerekin-text-secondary max-w-2xl mx-auto">
            Experience Blonde CLI in action. Run commands, interact with AI models,
            and see the power of local AI processing.
          </p>
        </div>

        {/* Terminal Simulator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="terminal-window shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="flex items-center gap-2">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="text-cerekin-text-secondary text-sm ml-2">
                blonde-cli ~ interactive demo
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              icon={<RotateCcw className="w-4 h-4" />}
              onClick={handleReset}
              className="ml-auto"
            >
              Reset
            </Button>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="terminal-body max-h-[400px] overflow-y-auto"
          >
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-3"
                >
                  {message.type === 'user' && (
                    <div className="flex items-start gap-2">
                      <span className="text-blonde-primary">$</span>
                      <span className="text-cerekin-text">{message.text}</span>
                    </div>
                  )}
                  {message.type === 'system' && (
                    <div className="text-cerekin-text-secondary italic">
                      {message.text}
                    </div>
                  )}
                  {message.type === 'ai' && (
                    <div className="text-cremeos-primary whitespace-pre-wrap pl-4 border-l-2 border-cremeos-primary/30">
                      {message.text}
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Processing Indicator */}
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center gap-2 text-cerekin-text-secondary"
              >
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Processing...
                </motion.span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-blonde-primary/30 border-t-blonde-primary rounded-full"
                />
              </motion.div>
            )}

            {/* Input Line */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-blonde-primary">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Type a command..."
                disabled={isProcessing}
                className="flex-1 bg-transparent text-cerekin-text outline-none font-mono"
              />
              <Button
                variant="ghost"
                size="sm"
                icon={<Send className="w-4 h-4" />}
                onClick={() => handleSubmit()}
                disabled={!input.trim() || isProcessing}
              />
            </div>
          </div>
        </motion.div>

        {/* Command Suggestions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6"
        >
          <p className="text-sm text-cerekin-text-secondary mb-3">Try these commands:</p>
          <div className="flex flex-wrap gap-2">
            {sampleCommands.map((command, index) => (
              <motion.button
                key={index}
                onClick={() => handleSuggestionClick(command)}
                disabled={isProcessing}
                className="glass glass-hover px-4 py-2 rounded-lg text-sm font-mono text-cerekin-text-secondary hover:text-blonde-primary transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {command}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
