import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          {title && <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-100 to-brand-500 mb-4">{title}</h2>}
          {subtitle && <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;