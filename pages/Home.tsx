import React from 'react';
import Hero from '../components/Hero';
import ExecutiveSummary from '../components/ExecutiveSummary';
import Scope from '../components/Scope';
import Timeline from '../components/Timeline';
import Pricing from '../components/Pricing';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import ShaderBackground from '../components/ui/shader-background';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100, transition: { duration: 0.3 } }}
      className="bg-slate-900 relative min-h-screen"
    >
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShaderBackground />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Hero />
        <ExecutiveSummary />
        <Scope />
        <Timeline />
        <Pricing />
        <FinalCTA />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;