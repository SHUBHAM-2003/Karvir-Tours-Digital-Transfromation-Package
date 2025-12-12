import React, { useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FlipCard } from './ui/flip-card';
import { PRICING_SUMMARY } from '../constants';
import { Check, Sparkles, Lock, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900 z-0" />

      <SectionWrapper className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 text-brand-400 text-sm font-semibold mb-4 border border-brand-500/30">
            Limited Time Partnership
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Everything You Need.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">
              One Unbeatable Price.
            </span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Hover over the card to reveal the complete breakdown of your digital evolution package.
          </p>
        </motion.div>

        <motion.div 
            className="w-full max-w-md md:max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
           <FlipCard
             front={
               <div className="h-full w-full bg-gradient-to-br from-brand-600 to-blue-900 p-8 flex flex-col justify-between relative border border-white/10 group-hover:border-brand-400/50 transition-colors">
                 {/* Decorative background pattern */}
                 <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Sparkles size={120} />
                 </div>
                 
                 <div className="relative z-10">
                    <div className="flex justify-between items-start">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1 rounded-full text-white font-bold text-xs tracking-wider uppercase">
                            Premium Bundle
                        </div>
                        <Sparkles className="text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]" size={32} />
                    </div>
                    <div className="mt-16 text-center">
                        <p className="text-blue-200 text-xl font-medium mb-1 line-through opacity-70">Total: ₹1,55,000</p>
                        <h3 className="text-6xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-2xl">
                            ₹1Lakh
                        </h3>
                        <div className="inline-block mt-4 bg-accent-500 text-slate-900 font-extrabold px-6 py-2 rounded-xl text-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transform -rotate-2">
                            35% OFF
                        </div>
                    </div>
                 </div>

                 <div className="relative z-10 text-center mt-auto">
                    <p className="text-blue-100/80 mb-6 font-light">Includes all 10 Core Deliverables</p>
                    <div className="flex items-center justify-center gap-2 text-white/60 text-sm animate-pulse">
                        Hover to view inclusions <ArrowRight size={14} />
                    </div>
                 </div>
               </div>
             }
             back={
               <div className="h-full w-full bg-slate-900 p-8 flex flex-col relative border border-slate-700">
                 <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-900/20 to-transparent pointer-events-none" />
                 
                 <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 relative z-10">
                    <div className="p-2 bg-brand-500/20 rounded-lg text-brand-400">
                        <Lock size={20} />
                    </div>
                    What's Included
                 </h3>
                 
                 <div className="flex-grow overflow-y-auto pr-2 relative z-10 space-y-4">
                    {PRICING_SUMMARY.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                            <div className="mt-1 w-5 h-5 rounded-full bg-accent-500/20 flex items-center justify-center shrink-0 group-hover/item:bg-accent-500 transition-colors">
                                <Check className="text-accent-500 w-3 h-3 group-hover/item:text-white" />
                            </div>
                            <span className="text-slate-300 text-sm font-medium group-hover/item:text-white transition-colors">{item.service}</span>
                        </div>
                    ))}
                 </div>

                 <div className="mt-6 pt-6 border-t border-slate-700 relative z-10">
                    <button className="w-full py-4 bg-gradient-to-r from-brand-500 to-blue-600 hover:from-brand-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-brand-500/25 flex items-center justify-center gap-2 group/btn">
                        Lock This Deal
                        <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={18} />
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-3">Valid for immediate project start</p>
                 </div>
               </div>
             }
           />
        </motion.div>

      </SectionWrapper>
    </section>
  );
};

export default FinalCTA;