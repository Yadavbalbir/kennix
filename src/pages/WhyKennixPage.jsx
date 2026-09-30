import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';

export default function WhyKennixPage({ openCircleModal }) {
  const points = [
    { num: '01', title: 'A People-First Approach', text: 'Traditional development starts with land and speculative units. KENNIX begins with people, understanding their relationships and requirements before planning.' },
    { num: '02', title: 'The KENNIX Circle', text: 'Families, friends, and community groups can bring their collective requirements together. "Together when you want. Independent when you need."' },
    { num: '03', title: 'Built Around Real Requirements', text: 'Not one generic plan for everyone. We design configurations, amenities, and spaces around what your group actually needs.' },
    { num: '04', title: 'One Connected Development Journey', text: 'No need to separately manage architects, structural engineers, contractors, and interior designers. KENNIX brings everything into one ecosystem.' },
    { num: '05', title: 'Quality You Can See', text: 'Quality shouldn\'t only be promised. It should be visible through stage-wise material tests, engineer verifications, and photo feeds.' },
    { num: '06', title: 'Transparency Through the Journey', text: 'Know what\'s happening with construction progress, milestone approvals, site updates, and document verification.' },
    { num: '07', title: 'Design + Engineering + Execution', text: 'Connecting architectural vision directly with structural safety and MEP execution long before breaking ground.' },
    { num: '08', title: 'Homes Beyond Four Walls', text: 'Balancing private independent living with lush shared open spaces, children\'s areas, and senior wellness amenities.' },
    { num: '09', title: 'Technology Supported Journey', text: 'From client dashboard updates to smart-home device integration, technology makes living convenient.' },
    { num: '10', title: 'Community & Belonging', text: 'We are creating places people belong to—where parents live minutes away and friends become neighbours.' }
  ];

  return (
    <div className="relative min-h-screen pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 border-b border-emerald-950/60">
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          WHY KENNIX?
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-theme-heading leading-tight">
          Because Better Places <br />
          <span className="text-gold-gradient">Start With People.</span>
        </h1>
        <p className="text-base sm:text-lg text-theme-body max-w-3xl mx-auto leading-relaxed">
          Most developments begin with land, buildings and inventory. <strong className="text-theme-heading">KENNIX begins with people.</strong> We understand who wants to live there, how they want to live and what they need.
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((pt, i) => (
            <div key={i} className="p-6 rounded-2xl glass-card border border-emerald-500/20 glass-card-hover space-y-3">
              <div className="text-2xl font-serif font-bold text-amber-400">{pt.num}</div>
              <h3 className="text-xl font-serif font-bold text-theme-heading">{pt.title}</h3>
              <p className="text-sm text-theme-body leading-relaxed">{pt.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 border-b border-amber-500/10">
        <ShieldCheck className="w-10 h-10 text-amber-500 mx-auto" />
        <p className="text-xs font-bold text-amber-500 tracking-widest uppercase">Quality Assurance</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-theme-heading">
          Quality You Can See. <span className="text-gold-gradient">Verified at Every Stage.</span>
        </h2>
        <p className="text-base text-theme-body max-w-3xl mx-auto">
          For applicable KENNIX-managed developments, important construction stages and quality checks are documented to give you total visibility.
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-serif font-bold text-theme-heading">Connecting People, Creating Places Together.</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={openCircleModal}
            className="px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all flex items-center space-x-2"
          >
            <Users className="w-4 h-4" />
            <span>CREATE YOUR CIRCLE</span>
          </button>
        </div>
      </section>
    </div>
  );
}
