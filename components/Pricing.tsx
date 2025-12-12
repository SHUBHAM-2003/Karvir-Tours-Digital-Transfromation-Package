import React from 'react';
import SectionWrapper from './SectionWrapper';
import { PRICING_SUMMARY } from '../constants';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

const Pricing: React.FC = () => {
  const total = PRICING_SUMMARY.reduce((sum, item) => sum + item.price, 0);

  return (
    <SectionWrapper id="pricing" title="Investment Breakdown" subtitle="Transparent, mid-range pricing positioned for professional quality.">
      
      {/* Pricing Table */}
      <div className="bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden backdrop-blur-sm max-w-4xl mx-auto shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-700 bg-slate-800">
                <th className="p-6 text-slate-300 font-medium">Service Component</th>
                <th className="p-6 text-slate-300 font-medium text-right">Investment (INR)</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_SUMMARY.map((row, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                >
                  <td className="p-5 text-slate-200">{row.service}</td>
                  <td className="p-5 text-right font-mono text-brand-300">₹{row.price.toLocaleString()}</td>
                </motion.tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-brand-900/20">
                <td className="p-6 text-xl font-bold text-white">Total Package Value</td>
                <td className="p-6 text-right text-3xl font-bold text-accent-500">₹{total.toLocaleString()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        
        <div className="p-6 bg-slate-800/80 border-t border-slate-700 text-sm text-slate-400 flex items-start gap-3">
          <Info className="shrink-0 mt-0.5 text-brand-500" size={18} />
          <p>
            This pricing is positioned in the <strong>mid-range</strong> of India's digital service market. 
            It represents a balance between affordability and serious, professional-grade quality for a growing business like Karvir Tours.
          </p>
        </div>
      </div>

    </SectionWrapper>
  );
};

export default Pricing;