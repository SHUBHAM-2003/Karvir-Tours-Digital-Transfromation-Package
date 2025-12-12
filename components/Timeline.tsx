import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TIMELINE } from '../constants';
import { motion } from 'framer-motion';
import HolographicCard from './ui/holographic-card';

const Timeline: React.FC = () => {
  return (
    <SectionWrapper id="timeline" title="Project Timeline" subtitle="A realistic development schedule ensuring quality testing and smooth deployment.">
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 -translate-x-1/2 hidden md:block" />
        <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-slate-700 md:hidden" />

        <div className="space-y-12">
          {TIMELINE.map((phase, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
              >
                {/* Center Node */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-brand-500 border-4 border-slate-900 -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(14,165,233,0.5)]" />

                {/* Content Card */}
                <div className="ml-12 md:ml-0 w-full md:w-[45%]">
                  <HolographicCard className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-brand-400 font-bold text-sm tracking-wider uppercase">Phase {phase.phase}</span>
                      <span className="text-xs font-mono px-2 py-1 rounded bg-slate-700/50 border border-slate-600/30 text-slate-300">{phase.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{phase.title}</h3>
                    <ul className="space-y-1">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-sm text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </HolographicCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;