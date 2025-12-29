
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1015/1920/1080" 
          alt="Kashmir Landscape" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-transparent to-slate-900/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Integrity. Vision. <span className="text-emerald-400">Leadership.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
          Aga Syed Muntazir Mehdi: Advocating for social justice, fostering dialogue, and building a brighter future for the valley.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#bio" 
            className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-emerald-500/25"
          >
            Explore Biography
          </a>
          <a 
            href="#ai-chat" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm rounded-full font-semibold transition-all"
          >
            Ask AI About Him
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#bio" className="text-white/50 hover:text-white transition-colors">
          <i className="fas fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Hero;
