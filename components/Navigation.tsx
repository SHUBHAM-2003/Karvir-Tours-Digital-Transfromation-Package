import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Navigation: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-white tracking-tight flex items-center gap-2 group">
          {!isHome && <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform text-brand-500" />}
          Karvir<span className="text-brand-500">Tours</span>
        </Link>
        
        {isHome ? (
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('summary')} className="hover:text-white transition-colors">Summary</button>
            <button onClick={() => scrollToSection('scope')} className="hover:text-white transition-colors">Scope</button>
            <button onClick={() => scrollToSection('timeline')} className="hover:text-white transition-colors">Timeline</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Pricing</button>
          </div>
        ) : (
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
             <Link to="/" className="hover:text-white transition-colors">Back to Overview</Link>
          </div>
        )}

        {isHome && (
          <button onClick={() => scrollToSection('pricing')} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm border border-slate-700 transition-colors">
            Total: ₹1,55,000
          </button>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;