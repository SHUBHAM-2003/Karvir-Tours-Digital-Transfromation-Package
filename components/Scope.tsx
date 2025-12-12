import React from 'react';
import SectionWrapper from './SectionWrapper';
import { DELIVERABLES } from '../constants';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CardSpotlight } from './ui/card-spotlight';

const Scope: React.FC = () => {
  return (
    <SectionWrapper id="scope" title="Project Scope & Deliverables" subtitle="A comprehensive suite of digital tools designed to work together seamlessly.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {DELIVERABLES.map((item, index) => {
          const isHighlight = item.title.includes("Office Management System");
          
          return (
            <Link to={`/deliverable/${item.id}`} key={index} className={`block h-full ${isHighlight ? 'md:col-span-2' : ''}`}>
              <CardSpotlight 
                className={`h-full flex flex-col p-8 rounded-3xl border border-slate-800/60 bg-slate-900/50 hover:bg-slate-900/80 transition-all ${isHighlight ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800' : ''}`}
                color={isHighlight ? "#0ea5e9" : "#262626"}
              >
                {isHighlight && (
                  <div className="absolute top-0 right-0 px-4 py-1 bg-brand-600 text-white text-xs font-bold rounded-bl-xl rounded-tr-md z-10">
                    CORE SYSTEM
                  </div>
                )}
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-xl ${isHighlight ? 'bg-brand-500 text-white' : 'bg-slate-800 text-brand-400 border border-slate-700'}`}>
                      <item.icon size={isHighlight ? 32 : 24} />
                    </div>
                    
                    <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center opacity-0 group-hover/spotlight:opacity-100 transition-opacity">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>

                  <h3 className={`font-bold mb-3 ${isHighlight ? 'text-3xl text-white' : 'text-xl text-slate-100'} group-hover/spotlight:text-brand-400 transition-colors`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {item.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 size={16} className="text-accent-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                    {item.features.length > 3 && (
                       <li className="text-xs text-brand-400 font-medium pl-7">
                         + {item.features.length - 3} more features
                       </li>
                    )}
                  </ul>
                </div>
              </CardSpotlight>
            </Link>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Scope;