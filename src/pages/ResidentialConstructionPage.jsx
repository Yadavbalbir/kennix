import React from 'react';
import { 
  Home, 
  CheckCircle2, 
  ShieldCheck, 
  Compass, 
  Layers, 
  ArrowRight, 
  FileText, 
  Sparkles,
  PhoneCall,
  UserCheck
} from 'lucide-react';

export default function ResidentialConstructionPage({ setActivePage }) {
  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 border-b border-emerald-950/60">
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          RESIDENTIAL CONSTRUCTION
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
          From Plan to Home, <br />
          <span className="text-gold-gradient">Built with Care.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          KENNIX provides end-to-end residential construction services, bringing planning, engineering, execution and quality management together through one coordinated journey.
        </p>

        <button
          onClick={() => setActivePage('how-it-works')}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg hover:brightness-110 transition-all inline-flex items-center space-x-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>DISCUSS YOUR PROJECT</span>
        </button>
      </section>

      {/* 1. Focus: Quality, Transparency, Execution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-2">
            <h3 className="text-xl font-serif font-bold text-amber-400">Quality</h3>
            <p className="text-xs text-slate-300">Stage-by-stage material testing and engineering verification.</p>
          </div>
          <div className="p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-2">
            <h3 className="text-xl font-serif font-bold text-emerald-400">Transparency</h3>
            <p className="text-xs text-slate-300">Milestone updates, site photo logs, and itemized documentation.</p>
          </div>
          <div className="p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-2">
            <h3 className="text-xl font-serif font-bold text-amber-400">Execution</h3>
            <p className="text-xs text-slate-300">Single coordinated entity managing contractors, schedules & budgets.</p>
          </div>
        </div>
      </section>

      {/* 2. What's Included Scope Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-emerald-950/60">
        <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
          End-to-End Construction Scope
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Planning & Pre-Construction',
              items: ['Requirement assessment', 'Site evaluation', 'Budget planning', 'Project scheduling', 'Construction planning']
            },
            {
              title: 'Architecture & Engineering',
              items: ['Architectural coordination', 'Structural engineering', 'MEP coordination', 'Construction drawings']
            },
            {
              title: 'Construction & Execution',
              items: ['Site prep & foundation', 'RCC / structural works', 'Masonry & plastering', 'Electrical & plumbing', 'Waterproofing & flooring']
            },
            {
              title: 'Project Management',
              items: ['Contractor & vendor coordination', 'Material procurement planning', 'Progress monitoring', 'Cost & milestone tracking']
            },
            {
              title: 'Quality Assurance',
              items: ['Material lab checks', 'Stage-wise site inspections', 'Technical verification', 'Snag identification']
            },
            {
              title: 'Handover & Warranties',
              items: ['Final walkthrough', 'Snag closure', 'Completion docs', 'Project handover']
            }
          ].map((sc, i) => (
            <div key={i} className="p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-3">
              <h3 className="text-lg font-serif font-bold text-amber-300">{sc.title}</h3>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {sc.items.map((it, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Follow Your Project Dashboard Teaser */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center border-b border-amber-500/10">
        <div className="p-8 rounded-3xl glass-gold border border-amber-400/40 space-y-4">
          <UserCheck className="w-10 h-10 text-amber-400 mx-auto" />
          <h3 className="text-2xl font-serif font-bold text-white">Track Your Home Construction Online</h3>
          <p className="text-xs text-slate-300 max-w-lg mx-auto">
            KENNIX clients get access to a live digital dashboard tracking site progress, stage photos, documents, and quality reports.
          </p>
          <button
            onClick={() => setActivePage('login')}
            className="px-6 py-2.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all inline-flex items-center space-x-1.5"
          >
            <span>PREVIEW CLIENT DASHBOARD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
}
