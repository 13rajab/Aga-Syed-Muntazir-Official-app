
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Hello! I am Aga Syed Muntazir\'s digital assistant. How can I help you learn more about his vision and work today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-chat" className="py-20 bg-emerald-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ask the AI Assistant</h2>
          <p className="text-emerald-100/70">Get instant answers about his contributions, philosophy, and history.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[500px]">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user' 
                    ? 'bg-emerald-500 text-white rounded-br-none' 
                    : 'bg-white/10 text-emerald-50 rounded-bl-none border border-white/5'
                }`}>
                  <p className="text-sm md:text-base leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl px-4 py-3 animate-pulse text-emerald-100 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-delay-200"></span>
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-delay-400"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-black/20 border-t border-white/10 flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-white placeholder-white/30"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-white w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg shadow-emerald-500/20"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
        <p className="mt-4 text-center text-xs text-emerald-200/40">
          Powered by Gemini 3. Information provided for educational purposes.
        </p>
      </div>
    </section>
  );
};

export default AIChat;
