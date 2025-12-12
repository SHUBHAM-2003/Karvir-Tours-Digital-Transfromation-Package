import React from 'react';
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <div className="w-full relative z-10 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col text-center">
          <div>
            <Button variant="secondary" size="sm" className="gap-2 pointer-events-none rounded-full bg-slate-800/80 border border-slate-700 text-brand-200">
              <Sparkles className="w-4 h-4 text-yellow-400" /> Digital Transformation Proposal
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-8xl max-w-5xl tracking-tighter text-center font-extrabold text-white">
              Karvir Tours
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-400 max-w-2xl text-center mx-auto">
              A complete transformation package designed to automate operations, 
              enhance customer experience, and build a future-ready 
              digital asset for Karvir Tours.
            </p>
          </div>
          <div className="flex flex-row gap-3 mt-4">
            <a href="#summary">
                <Button size="lg" className="gap-2 text-base font-semibold">
                View Proposal <ArrowRight className="w-4 h-4" />
                </Button>
            </a>
            <a href="#pricing">
                <Button size="lg" variant="outline" className="gap-2 text-base font-semibold">
                See Investment
                </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;