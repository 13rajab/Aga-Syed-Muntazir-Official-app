
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tighter">AGA SYED MUNTAZIR</h3>
            <p className="text-slate-400 leading-relaxed">
              Advocating for the rights and prosperity of Jammu and Kashmir. Join the movement for a better future.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#bio" className="text-slate-400 hover:text-emerald-400 transition-colors">Biography</a></li>
              <li><a href="#vision" className="text-slate-400 hover:text-emerald-400 transition-colors">Vision</a></li>
              <li><a href="#ai-chat" className="text-slate-400 hover:text-emerald-400 transition-colors">AI Assistant</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <p className="mt-6 text-slate-400">Budgam, Jammu & Kashmir</p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:row items-center justify-between text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aga Syed Muntazir. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
