import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DELIVERABLES } from '../constants';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Zap,
  Target, CalendarDays, TrainFront, Hotel, Utensils,
  CircleDollarSign, AlertTriangle, Backpack, PlusCircle
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import ShaderBackground from '../components/ui/shader-background';

const ItineraryStructurePreview = () => {
    const items = [
      { icon: Target, title: "Executive Summary", desc: "Trip overview with key highlights", color: "text-rose-500", bg: "bg-rose-50" },
      { icon: CalendarDays, title: "Day-Wise Planning", desc: "Detailed schedule with timings & tips", color: "text-blue-500", bg: "bg-blue-50" },
      { icon: TrainFront, title: "Transport Details", desc: "Best routes, timings & bookings", color: "text-cyan-600", bg: "bg-cyan-50" },
      { icon: Hotel, title: "Hotel Recommendations", desc: "Accommodation with amenities", color: "text-orange-500", bg: "bg-orange-50" },
      { icon: Utensils, title: "Meal Planning", desc: "Breakfast, lunch & dinner suggestions", color: "text-purple-500", bg: "bg-purple-50" },
      { icon: CircleDollarSign, title: "Cost Breakdown", desc: "Detailed budget estimation", color: "text-yellow-500", bg: "bg-yellow-50" },
      { icon: AlertTriangle, title: "Safety Guidelines", desc: "Emergency contacts & local rules", color: "text-amber-500", bg: "bg-amber-50" },
      { icon: Backpack, title: "Packing Checklist", desc: "Complete list of essentials", color: "text-red-500", bg: "bg-red-50" },
      { icon: PlusCircle, title: "Add-On Activities", desc: "Optional experiences & adventures", color: "text-indigo-500", bg: "bg-indigo-50" },
    ];
  
    return (
      <div className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
        <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">Complete Itinerary Structure</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
               <div className={`mb-4 w-12 h-12 rounded-xl flex items-center justify-center ${item.bg}`}>
                  <item.icon size={24} className={item.color} />
               </div>
               <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
               <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

const DeliverableDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const item = DELIVERABLES.find(d => d.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Item Not Found</h1>
          <Link to="/" className="text-brand-400 hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const hasReferenceContent = (item.referenceImages && item.referenceImages.length > 0) || item.id === 'ai-automation-agents';

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen bg-slate-900 pt-20"
    >
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <ShaderBackground />
      </div>

      {/* Header Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={16} /> Back to Proposal
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-6 border border-brand-500/20">
                <item.icon size={32} />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {item.title}
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                {item.fullDescription || item.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {item.demoLink && item.demoLink !== "#" && (
                  <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-brand-500 to-blue-600 hover:from-brand-400 hover:to-blue-500 text-white rounded-xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                    <Zap size={18} /> View Live Demo
                  </a>
                )}
                <div className="px-6 py-3 bg-slate-800 border border-slate-700 text-slate-300 rounded-xl font-medium">
                  Estimated Timeline: 1-2 Weeks
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl shadow-black/50 aspect-video group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60 z-10" />
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="inline-block px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-xs text-white border border-white/10">
                  Concept Visualization
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <SectionWrapper className="relative z-10 bg-slate-900/50 backdrop-blur-sm mt-10">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span className="w-8 h-1 bg-brand-500 rounded-full" />
          Key Capabilities
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {item.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800 hover:border-brand-500/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{feature}</h3>
                  <p className="text-sm text-slate-400">Advanced implementation included.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Reference Visuals Section */}
      {hasReferenceContent && (
        <SectionWrapper className="relative z-10 mt-10">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-brand-500 rounded-full" />
            Reference Visuals
          </h2>
          
          {/* Custom Component for AI Agents */}
          {item.id === 'ai-automation-agents' && (
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
             >
                <ItineraryStructurePreview />
             </motion.div>
          )}

          {/* Regular Image Grid */}
          {item.referenceImages && item.referenceImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {item.referenceImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group relative"
                    >
                        <img 
                            src={img} 
                            alt={`Reference ${idx + 1}`} 
                            className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-white">System Preview</span>
                        </div>
                    </motion.div>
                ))}
            </div>
          )}
        </SectionWrapper>
      )}

      {/* Bottom CTA */}
      <div className="py-20 text-center relative z-10">
        <Link to="/" className="text-slate-500 hover:text-white transition-colors flex flex-col items-center gap-2">
           <span>Explore other deliverables</span>
           <div className="w-1 h-8 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-full h-full bg-slate-600 animate-pulse" />
           </div>
        </Link>
      </div>

    </motion.div>
  );
};

export default DeliverableDetail;