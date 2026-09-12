import React from 'react';
import { 
  Compass, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Box, 
  ShieldCheck, 
  PhoneCall,
  Sparkles
} from 'lucide-react';

export default function ArchitectureDesignPage({ setActivePage }) {
  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 border-b border-emerald-950/60">
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          ARCHITECTURE & STRUCTURAL DESIGN
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
          Designed with Purpose. <br />
          <span className="text-gold-gradient">Engineered to Perform.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          From the first concept to construction-ready drawings, KENNIX brings architecture and structural engineering together to create spaces that are functional, thoughtful and buildable.
        </p>

        <button
          onClick={() => setActivePage('how-it-works')}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg hover:brightness-110 transition-all inline-flex items-center space-x-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>START YOUR DESIGN JOURNEY</span>
        </button>
      </section>

      {/* What We Offer (6 Offerings) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
          Comprehensive Architectural & Engineering Scope
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: '1. Architectural Planning & Design',
              desc: 'Site planning, floor plans, building orientation, elevation concepts, façade design, parking circulation, common-area planning, and landscape coordination.'
            },
            {
              title: '2. Structural Design & Engineering',
              desc: 'Foundation design, column & beam layouts, slab calculations, RCC/steel designs developed in accordance with applicable engineering standards.'
            },
            {
              title: '3. MEP Design & Coordination',
              desc: 'Mechanical (HVAC & ventilation), Electrical (power layouts & lighting points), Plumbing (water supply & drainage), plus Fire Safety.'
            },
            {
              title: '4. 3D Visualisation & Renders',
              desc: 'High-definition 3D exterior visualisations, elevation concepts, material boards, and common-area visual tours for Circle approval before building.'
            },
            {
              title: '5. Construction Drawings',
              desc: 'Execution-ready architectural, structural, and MEP detailed construction drawings ensuring zero ambiguity on site.'
            },
            {
              title: '6. Approval & Compliance Coordination',
              desc: 'Coordination of approval drawings, building regulations compliance, local authority documentation, and statutory design alignment.'
            }
          ].map((of, i) => (
            <div key={i} className="p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-3 glass-card-hover">
              <h3 className="text-lg font-serif font-bold text-amber-300">{of.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{of.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Horizontal Design Journey */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-emerald-950/60">
        <h2 className="text-2xl font-serif font-bold text-white text-center mb-8">
          Our Design Journey
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-amber-300">
          {['Understand', 'Imagine', 'Plan', 'Design', 'Engineer', 'Coordinate', 'Document', 'Build'].map((st, i) => (
            <React.Fragment key={i}>
              <span className="p-3 rounded-xl bg-emerald-950 border border-amber-400/30 text-white font-bold">{st}</span>
              {i < 7 && <span className="text-amber-400">→</span>}
            </React.Fragment>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-4 italic font-serif">
          “Good construction starts long before construction begins.”
        </p>
      </section>

      {/* Coordinated Advantage */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <div className="p-8 rounded-3xl glass-gold border border-amber-400/40 space-y-3">
          <h3 className="text-2xl font-serif font-bold text-white">One Coordinated Development Journey</h3>
          <p className="text-xs text-slate-300">
            Architecture ↔ Structure ↔ MEP ↔ Construction ↔ Quality all working inside one integrated KENNIX system.
          </p>
        </div>

        <button
          onClick={() => setActivePage('how-it-works')}
          className="px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all inline-flex items-center space-x-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>START YOUR DESIGN JOURNEY</span>
        </button>
      </section>

    </div>
  );
}
