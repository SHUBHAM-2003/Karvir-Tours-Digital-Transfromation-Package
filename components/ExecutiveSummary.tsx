import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { Rocket, Target, ShieldCheck } from 'lucide-react';

const ExecutiveSummary: React.FC = () => {
  const cards = [
    { icon: Rocket, title: "Scale Operations", desc: "Automate manual tasks and increase internal efficiency." },
    { icon: Target, title: "Brand Visibility", desc: "Enhance trust with a modern digital presence." },
    { icon: ShieldCheck, title: "Future Ready", desc: "Build long-term digital assets that grow with you." }
  ];

  return (
    <SectionWrapper id="summary" title="Executive Summary" subtitle="The goal is to make Karvir Tours a fully digital, automated, and professionally managed travel company.">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800 transition-colors"
          >
            <div className="w-12 h-12 rounded-lg bg-brand-900/50 flex items-center justify-center text-brand-500 mb-6">
              <card.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
            <p className="text-slate-400 leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExecutiveSummary;