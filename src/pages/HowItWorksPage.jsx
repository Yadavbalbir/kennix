import React from 'react';
import { 
  Compass, 
  Users, 
  Search, 
  FileCheck, 
  Building2, 
  ShieldCheck, 
  Home, 
  ArrowRight
} from 'lucide-react';

export default function HowItWorksPage({ openCircleModal, setActivePage }) {
  const steps = [
    { num: '01', title: 'Tell Us What You Need', desc: 'Specify preferred locations, total budget, property type, and custom living requirements.' },
    { num: '02', title: 'Tell Us Who You\'re Buying With', desc: 'Choose whether you are buying individually, for family, close friends, or a community circle.' },
    { num: '03', title: 'KENNIX Identifies Opportunities', desc: 'We source suitable existing properties, raw land, or applicable community development projects.' },
    { num: '04', title: 'Evaluate & Review', desc: 'Thorough review of property legal documentation, site feasibility, engineering, and itemized cost breakdown.' },
    { num: '05', title: 'Buy or Build', desc: 'Choose between existing completed inventory or a KENNIX-supported custom community development.' },
    { num: '06', title: 'Quality & Progress Visibility', desc: 'For KENNIX-managed developments, track construction stage audits, photo logs, and material reports.' },
    { num: '07', title: 'Move In & Stay Connected', desc: 'Take key handover and enjoy independent home privacy alongside your community.' }
  ];

  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 border-b border-emerald-950/60">
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          HOW KENNIX WORKS
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
          From an Idea to a Place <br />
          <span className="text-gold-gradient">You Can Call Home.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Our step-by-step framework eliminates guesswork and ensures clarity from day one.
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-amber-500/10">
        <div className="space-y-6">
          {steps.map((st, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-card border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-400 font-serif font-bold text-2xl flex items-center justify-center shrink-0">
                {st.num}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif font-bold text-white">{st.title}</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-serif font-bold text-white">Ready to Begin Your Journey?</h2>
        <button
          onClick={openCircleModal}
          className="px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all inline-flex items-center space-x-2"
        >
          <Users className="w-4 h-4" />
          <span>CREATE YOUR KENNIX CIRCLE</span>
        </button>
      </section>
    </div>
  );
}
