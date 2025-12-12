import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import DeliverableDetail from './pages/DeliverableDetail';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/deliverable/:id" element={<DeliverableDetail />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-slate-900 text-slate-200 min-h-screen selection:bg-brand-500 selection:text-white">
        <ScrollToTop />
        <Navigation />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;