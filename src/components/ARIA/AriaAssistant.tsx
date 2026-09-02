'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVoice } from '@/hooks/useVoice';
import { getAriaResponse } from '@/lib/ariaEngine';

interface Message {
  role: 'user' | 'aria';
  text: string;
}

const WELCOME: Message = {
  role: 'aria',
  text: "Welcome to my page! I'm ARIA. Ask me anything about Keshav — his research, projects, experience, or how to reach him.",
};

export default function AriaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [speakEnabled, setSpeakEnabled] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { startListening, stopListening, isListening, isSupported } = useVoice();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isOpen]);

  const speak = (text: string) => {
    if (!speakEnabled || typeof window === 'undefined' || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.15;
	utterance.pitch = 0.95;
	utterance.volume = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleAsk = (raw: string) => {
    const question = raw.trim();
    if (!question) return;

    const { text, scrollTo } = getAriaResponse(question);
    setMessages((prev) => [...prev, { role: 'user', text: question }, { role: 'aria', text }]);
    setInput('');
    speak(text);

    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
      return;
    }
    startListening((transcript) => handleAsk(transcript));
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 left-8 z-40 flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/60 bg-primary text-2xl text-accent shadow-[0_0_25px_rgba(0,217,255,0.4)] hover:border-accent hover:bg-accent/10"
        aria-label="Open ARIA assistant"
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 left-8 z-40 flex h-[28rem] w-[22rem] flex-col overflow-hidden rounded-2xl border border-accent/30 bg-dark/95 shadow-2xl backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-accent/20 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="text-accent">🤖</span>
                <span className="font-semibold text-neutral">ARIA</span>
              </div>
              <button
                onClick={() => setSpeakEnabled((v) => !v)}
                title={speakEnabled ? 'Voice output on' : 'Voice output off'}
                className="text-sm text-accent/70 hover:text-accent"
              >
                {speakEnabled ? '🔊' : '🔇'}
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`whitespace-pre-line rounded-lg px-3 py-2 ${
                    m.role === 'aria'
                      ? 'bg-accent/10 text-neutral'
                      : 'ml-auto max-w-[85%] bg-secondary/20 text-neutral'
                  } ${m.role === 'user' ? 'w-fit' : ''}`}
                >
                  {m.text}
                </div>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAsk(input);
              }}
              className="flex items-center gap-2 border-t border-accent/20 px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask ARIA a question..."
                className="flex-1 rounded-full border border-accent/30 bg-transparent px-3 py-2 text-sm text-neutral placeholder:text-neutral/40 focus:border-accent focus:outline-none"
              />
              {isSupported && (
                <button
                  type="button"
                  onClick={handleMicClick}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border ${
                    isListening ? 'border-tertiary text-tertiary animate-pulse' : 'border-accent/40 text-accent'
                  }`}
                  aria-label="Voice input"
                >
                  🎙️
                </button>
              )}
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 text-accent hover:bg-accent/10"
                aria-label="Send"
              >
                ➤
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
