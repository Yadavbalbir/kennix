import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function QualityAssurancePage({ setActivePage }) {
  return (
    <div className="relative min-h-screen pt-20">
      <section className="min-h-[70vh] py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center text-center space-y-6">
        <ShieldCheck className="w-12 h-12 text-amber-500" />
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          QUALITY ASSURANCE
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-theme-heading leading-tight">
          Quality You Can See. <br />
          <span className="text-gold-gradient">Verified at Every Stage.</span>
        </h1>
        <p className="text-base sm:text-lg text-theme-body max-w-3xl mx-auto leading-relaxed">
          For applicable KENNIX-managed developments, important construction stages and quality checks are documented to give you total visibility.
        </p>
        <button
          onClick={() => setActivePage('projects')}
          className="px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all inline-flex items-center space-x-2"
        >
          <span>EXPLORE KENNIX PROJECTS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
