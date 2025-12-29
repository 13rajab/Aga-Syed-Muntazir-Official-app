
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Vision from './components/Vision';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Bio />
        <Vision />
        
        {/* Contributions Summary Banner */}
        <div className="py-16 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
            <div className="flex space-x-20 whitespace-nowrap animate-scroll items-center opacity-40 hover:opacity-100 transition-opacity">
               <span className="text-3xl font-bold italic text-slate-900">EMPOWERMENT</span>
               <span className="text-3xl font-bold italic text-slate-900">JUSTICE</span>
               <span className="text-3xl font-bold italic text-slate-900">LEADERSHIP</span>
               <span className="text-3xl font-bold italic text-slate-900">DIALOGUE</span>
               <span className="text-3xl font-bold italic text-slate-900">PROSPERITY</span>
               <span className="text-3xl font-bold italic text-slate-900">HERITAGE</span>
               <span className="text-3xl font-bold italic text-slate-900">EMPOWERMENT</span>
               <span className="text-3xl font-bold italic text-slate-900">JUSTICE</span>
            </div>
          </div>
        </div>

        <AIChat />
      </main>
      <Footer />
    </div>
  );
};

export default App;
