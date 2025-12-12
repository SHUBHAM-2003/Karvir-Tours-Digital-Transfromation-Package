import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-slate-950 text-center px-4 border-t border-slate-800 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Transform?</h2>
        <p className="text-slate-300 mb-8 text-xl leading-relaxed max-w-2xl">
          Once approved, we begin Phase 1 immediately to start the journey towards a digitally advanced Karvir Tours.
        </p>

        {/* Partnership Logo Section */}
        <div className="w-full my-12 flex flex-col items-center">
            <p className="text-slate-500 text-xs font-bold tracking-[0.2em] uppercase mb-10">
              Strategic Digital Partnership
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
              {/* Karvir Tours Logo */}
              <div className="flex flex-col items-center gap-4">
                <div className="group relative p-4 bg-white rounded-xl border border-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500">
                   <img 
                     src="https://drive.google.com/thumbnail?id=1RRtCM_PeHkcwL3Ku7CZuOk-uJJDTpw1O&sz=w1000" 
                     alt="Karvir Tours" 
                     className="h-16 w-auto object-contain"
                     referrerPolicy="no-referrer"
                   />
                </div>
                <span className="text-slate-400 font-bold tracking-wider text-xs md:text-sm">KARVIR TOURS & TRAVELS</span>
              </div>

              {/* Connector */}
              <div className="flex flex-col items-center gap-2 text-slate-700">
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>
                <span className="text-xs font-mono text-slate-500">X</span>
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-slate-700 to-transparent"></div>
              </div>

              {/* Infinity Innovations Logo */}
              <div className="flex flex-col items-center gap-4">
                <div className="group relative p-4 bg-black rounded-xl border border-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500">
                   <img 
                      src="https://drive.google.com/thumbnail?id=1hYIBk_7L7kHO43xAHYKcyw52irvzLvGr&sz=w1000" 
                      alt="Infinity Innovations" 
                      className="h-16 w-auto object-contain"
                      referrerPolicy="no-referrer"
                   />
                </div>
                <span className="text-slate-400 font-bold tracking-wider text-xs md:text-sm">INFINITY INNOVATIONS</span>
              </div>
            </div>
        </div>

        <button className="px-12 py-5 bg-gradient-to-r from-brand-500 to-blue-600 hover:from-brand-400 hover:to-blue-500 text-white rounded-2xl font-bold text-xl shadow-[0_0_30px_-5px_rgba(14,165,233,0.5)] hover:shadow-[0_0_50px_-10px_rgba(14,165,233,0.8)] transition-all hover:scale-105 hover:-translate-y-1 mb-16">
          Approve Proposal
        </button>

        <p className="text-slate-600 text-sm font-medium">
          © {new Date().getFullYear()} Digital Transformation Proposal for Karvir Tours.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;