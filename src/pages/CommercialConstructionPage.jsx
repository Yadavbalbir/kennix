import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  PhoneCall, 
  Briefcase,
  Store,
  Building,
  Sparkles
} from 'lucide-react';

export default function CommercialConstructionPage({ setActivePage }) {
  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 border-b border-emerald-950/60">
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          COMMERCIAL CONSTRUCTION
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
          Spaces Designed for Business. <br />
          <span className="text-gold-gradient">Built for Performance.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          KENNIX provides end-to-end commercial construction solutions, bringing together planning, architecture, engineering, execution and quality management to create functional, efficient and future-ready commercial spaces.
        </p>

        <button
          onClick={() => setActivePage('how-it-works')}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg hover:brightness-110 transition-all inline-flex items-center space-x-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>DISCUSS YOUR PROJECT</span>
        </button>
      </section>

      {/* What We Build */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
          Commercial Property Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Office & Corporate Spaces',
              desc: 'Office buildings, corporate workplaces and business facilities designed around functionality and productivity.',
              icon: Building2
            },
            {
              title: 'Retail & Commercial',
              desc: 'Retail outlets, showrooms, shopping centers and customer-facing commercial environments.',
              icon: Store
            },
            {
              title: 'Mixed-Use Developments',
              desc: 'Projects thoughtfully combining commercial and compatible uses within one development.',
              icon: Building
            },
            {
              title: 'Hospitality & Institutional',
              desc: 'Selected hospitality, educational, or healthcare projects based on specialized requirements.',
              icon: Briefcase
            }
          ].map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className="p-6 rounded-2xl glass-card border border-emerald-500/20 glass-card-hover space-y-3">
                <div className="p-3 rounded-xl bg-amber-400/20 text-amber-400 inline-block">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white">{cat.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{cat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Business Requirement Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-emerald-950/60">
        <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
          Built Around Business Requirements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass-emerald border border-emerald-500/30 space-y-2">
            <h3 className="text-lg font-bold text-amber-300">Functionality & Operational Workflow</h3>
            <p className="text-xs text-slate-300">Spaces planned around actual business operations, foot traffic, customer movement, and utility access.</p>
          </div>
          <div className="p-6 rounded-2xl glass-emerald border border-emerald-500/30 space-y-2">
            <h3 className="text-lg font-bold text-emerald-300">Efficiency & Usable Area Optimization</h3>
            <p className="text-xs text-slate-300">Thoughtful planning of circulation, service cores, HVAC shaft routing, and maximum usable floor plate ratio.</p>
          </div>
          <div className="p-6 rounded-2xl glass-emerald border border-emerald-500/30 space-y-2">
            <h3 className="text-lg font-bold text-amber-300">Safety, Fire & Regulatory Compliance</h3>
            <p className="text-xs text-slate-300">Relevant structural standards, fire suppression systems, electrical codes, and statutory requirements integrated upfront.</p>
          </div>
          <div className="p-6 rounded-2xl glass-emerald border border-emerald-500/30 space-y-2">
            <h3 className="text-lg font-bold text-emerald-300">Future Readiness & Technology</h3>
            <p className="text-xs text-slate-300">Infrastructure planned for evolving tech, high-bandwidth fiber, smart energy management, and modular scaling.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-serif font-bold text-white">Planning a Commercial Project?</h2>
        <p className="text-slate-300 text-sm">Tell us what you're creating. KENNIX will bring the planning, engineering and construction journey together.</p>
        <button
          onClick={() => setActivePage('how-it-works')}
          className="px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all inline-flex items-center space-x-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>DISCUSS YOUR PROJECT</span>
        </button>
      </section>

    </div>
  );
}
