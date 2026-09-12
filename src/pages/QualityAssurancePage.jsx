import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Eye, 
  Award, 
  Layers, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function QualityAssurancePage({ setActivePage }) {
  const [selectedStage, setSelectedStage] = useState('materials');

  const qaStages = {
    materials: {
      title: '1. Material Checks & Lab Testing',
      desc: 'Before any material is used on site, samples are sent for independent laboratory verification.',
      items: ['53-Grade OPC Cement Strength Testing', 'Fe-550 TMT Steel Tensile & Bend Audit', 'Plumbing Pressure & Chemical Inertness Audit', 'CPVC & Electrical Wire Fire Resistance']
    },
    foundation: {
      title: '2. Foundation & Substructure Stage',
      desc: 'Structural engineering verification before and during concrete pouring.',
      items: ['Soil Load Bearing Capacity Test', 'Piling & RCC Footing Reinforcement Audit', 'Anti-Termite Sub-soil Barrier Injection', 'Plinth Level Waterproofing Membrane Inspection']
    },
    superstructure: {
      title: '3. Superstructure & RCC Framing',
      desc: 'Column beam casting, slab curing monitoring, and masonry wall checks.',
      items: ['Concrete Cube Compression Tests at 7, 14 & 28 Days', 'Rebar Cover Block & Alignment Verification', 'AAC Blockwork Mortar Bond Strength Audit', 'Lintel & Chajja Structural Integrity Inspection']
    },
    waterproofing: {
      title: '4. Waterproofing & MEP Infrastructure',
      desc: 'Comprehensive multi-layer waterproofing and electrical/plumbing pressure tests.',
      items: ['Terrace 72-Hour Water Ponding Test', 'Bathroom Sunken Slab Polyurethane Coating Audit', 'Plumbing Hydrostatic Pressure Test at 10 Bar', 'Electrical Insulation & Earth Resistance Testing']
    },
    finishes: {
      title: '5. Pre-Handover & Snagging Inspection',
      desc: 'Over 150+ quality checkpoints before issuing the final key handover certificate.',
      items: ['Tile & Marble Hollow Sound Inspection', 'Window & Door Water Seepage Storm Test', 'Smart Lock & Automation Diagnostics', 'Final Deep Cleaning & Snag Sign-off']
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 border-b border-emerald-950/60">
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          QUALITY ASSURANCE
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
          Quality You Can See. <br />
          <span className="text-gold-gradient">Verified at Every Stage.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          For applicable KENNIX-managed developments, important construction stages and quality checks are documented to give you total visibility.
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-amber-500/10">
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Object.keys(qaStages).map(key => (
            <button
              key={key}
              onClick={() => setSelectedStage(key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedStage === key
                  ? 'bg-amber-400 text-slate-950 shadow-[0_0_20px_rgba(212,175,55,0.6)]'
                  : 'glass-card text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              {qaStages[key].title.split('.')[1]}
            </button>
          ))}
        </div>

        <div className="p-8 rounded-3xl glass-emerald border border-emerald-500/40 space-y-6">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0" />
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">{qaStages[selectedStage].title}</h3>
              <p className="text-xs text-slate-300 mt-0.5">{qaStages[selectedStage].desc}</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">Stage Checkpoints:</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {qaStages[selectedStage].items.map((it, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-black/40 border border-emerald-800/50 flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-200 font-medium">{it}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-serif font-bold text-white">Quality Shouldn't Only Be Promised. It Should Be Visible.</h2>
        <button
          onClick={() => setActivePage('projects')}
          className="px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all inline-flex items-center space-x-2"
        >
          <span>EXPLORE KENNIX DEVELOPMENTS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}
