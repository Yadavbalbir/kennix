import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  HeartHandshake, 
  Home, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Calculator,
  Compass,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function CommunityDevelopmentPage({ openCircleModal, setActivePage }) {
  const circleTypes = [
    {
      title: 'Family Circle',
      desc: 'Parents, siblings and extended family who want independent homes while living closer.',
      icon: HeartHandshake,
      tag: 'Family Connection'
    },
    {
      title: 'Friends Circle',
      desc: 'Friends who want their own homes within the same development.',
      icon: Users,
      tag: 'Friends as Neighbors'
    },
    {
      title: 'Community Circle',
      desc: 'People connected through a cultural, social or community network who want to create a place together.',
      icon: Home,
      tag: 'Cultural Network'
    },
    {
      title: 'Shared-Interest Circle',
      desc: 'People brought together by a common lifestyle, profession, interest or vision for how they want to live.',
      icon: Sparkles,
      tag: 'Shared Lifestyle'
    }
  ];

  const journeySteps = [
    { num: '01', title: 'CREATE YOUR CIRCLE', desc: 'Bring your people together.' },
    { num: '02', title: 'SHARE YOUR REQUIREMENTS', desc: 'Tell us where, what and how you want to live.' },
    { num: '03', title: 'FEASIBILITY & LAND', desc: 'KENNIX evaluates location, land, regulations, cost & feasibility.' },
    { num: '04', title: 'DESIGN TOGETHER', desc: 'Homes, common spaces, and amenities planned around agreed needs.' },
    { num: '05', title: 'KENNIX BUILDS', desc: 'We manage the entire development and construction journey.' },
    { num: '06', title: 'QUALITY ASSURANCE', desc: 'Quality is checked and documented through key construction stages.' },
    { num: '07', title: 'HANDOVER', desc: 'Your individual homes are handed over.' },
    { num: '08', title: 'LIVE TOGETHER', desc: 'Your own home. Your own space. Your people nearby.' },
  ];

  return (
    <div className="relative min-h-screen text-slate-100 pt-20 overflow-hidden">
      
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(214,175,55,0.11),transparent_56%)]" />

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-gold text-amber-300 border border-amber-400/40 text-xs font-semibold tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Users className="w-3.5 h-3.5 text-amber-400" />
            <span>SIGNATURE KENNIX SERVICE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Build Your Home. <br />
            <span className="text-gold-gradient">Stay Close to Your People.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            KENNIX creates residential communities around people who already share a connection — families, friends, communities or people with shared interests. <br />
            <strong className="text-white">Instead of building first and finding people later, we start with the people.</strong>
          </p>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(212,175,55,0.8)" }}
              whileTap={{ scale: 0.95 }}
              onClick={openCircleModal}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all inline-flex items-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>CREATE YOUR CIRCLE</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Visual Comparison: Traditional vs KENNIX */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-emerald-950/60">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            THE KENNIX DIFFERENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-3">
            Why Community Development Starts With People
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Traditional */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl glass-card border border-red-500/20 space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-xl font-serif font-bold text-slate-300">Traditional Development</h3>
              <span className="text-xs text-red-400 font-mono">Conventional Model</span>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-400">
              <div className="p-3 rounded-xl bg-black/40 border border-slate-800">1. Acquire Land Speculatively</div>
              <div className="text-center text-slate-600">↓</div>
              <div className="p-3 rounded-xl bg-black/40 border border-slate-800">2. Fixed Architectural Plan</div>
              <div className="text-center text-slate-600">↓</div>
              <div className="p-3 rounded-xl bg-black/40 border border-slate-800">3. Build Standard Inventory</div>
              <div className="text-center text-slate-600">↓</div>
              <div className="p-3 rounded-xl bg-black/40 border border-slate-800">4. Market & Advertise</div>
              <div className="text-center text-slate-600">↓</div>
              <div className="p-3 rounded-xl bg-black/40 border border-slate-800">5. Find Random Buyers</div>
            </div>
          </motion.div>

          {/* KENNIX Way */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl glass-gold border-2 border-amber-400 space-y-6 shadow-[0_0_40px_rgba(212,175,55,0.25)]">
            <div className="flex justify-between items-center border-b border-amber-500/30 pb-3">
              <h3 className="text-xl font-serif font-bold text-white">The KENNIX Way</h3>
              <span className="text-xs text-amber-300 font-bold font-mono">People-First Model</span>
            </div>

            <div className="space-y-3 font-mono text-xs text-amber-200">
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-amber-400/40 font-bold">1. People & Connections First</div>
              <div className="text-center text-amber-400">↓</div>
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-amber-400/40 font-bold">2. Understand Collective Requirements</div>
              <div className="text-center text-amber-400">↓</div>
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-amber-400/40 font-bold">3. Feasibility & Land Selection</div>
              <div className="text-center text-amber-400">↓</div>
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-amber-400/40 font-bold">4. Custom Design Together</div>
              <div className="text-center text-amber-400">↓</div>
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-amber-400/40 font-bold">5. Build & Thriving Community</div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Who Can Create a Circle */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.055),transparent_62%)]" />

        <div className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Who Can Create a KENNIX Circle?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {circleTypes.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-2xl glass-card border border-emerald-500/20 glass-card-hover space-y-3">
                  <div className="p-3 rounded-xl bg-amber-400/20 text-amber-400 inline-block">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white">{c.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{c.desc}</p>
                  <span className="inline-block text-[10px] text-emerald-400 font-mono uppercase bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    {c.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center p-4 rounded-xl glass-gold max-w-xl mx-auto font-serif text-lg italic text-amber-300">
            “Together when you want. Independent when you need.”
          </div>
        </div>
      </section>

      {/* Real-Life Scenario Example */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-emerald-950/60">
        <div className="p-8 rounded-3xl glass-emerald border border-emerald-500/40 space-y-6">
          <div className="flex items-center space-x-3">
            <Calculator className="w-8 h-8 text-amber-400" />
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">Real-Life Example Scenario</h3>
              <p className="text-xs text-amber-300/80">How KENNIX brings diverse individual requirements into one cohesive development.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-black/40 border border-emerald-800/40 space-y-4">
            <h4 className="text-sm font-bold text-white">Imagine: 12 Families Want to Live Together</h4>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-emerald-950 text-slate-200 border border-emerald-800/60">Family 1 → 2 BHK</div>
              <div className="p-2.5 rounded-lg bg-emerald-950 text-slate-200 border border-emerald-800/60">Family 2 → 3 BHK</div>
              <div className="p-2.5 rounded-lg bg-emerald-950 text-slate-200 border border-emerald-800/60">Family 3 → 4 BHK</div>
              <div className="p-2.5 rounded-lg bg-emerald-950 text-slate-200 border border-emerald-800/60">Family 4 → Villa</div>
              <div className="p-2.5 rounded-lg bg-emerald-950 text-slate-200 border border-emerald-800/60">Family 5 → Large 3 BHK</div>
            </div>

            <div className="pt-2 border-t border-emerald-900/60">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">They Collectively Desire:</span>
              <div className="flex flex-wrap gap-2 text-xs">
                {['Clubhouse', 'Children\'s Area', 'Senior-Friendly Spaces', 'Central Lawn', '24/7 Security', 'Community Hall'].map((am, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30">
                    ✓ {am}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-300 pt-2 leading-relaxed">
              KENNIX brings these individual home choices and shared amenities together, evaluating site feasibility, architectural engineering, and cost optimization so everyone gets their ideal private home inside one vibrant development.
            </p>
          </div>
        </div>
      </section>

      {/* From Circle to Community 8-Step Journey */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            From Your Circle to Your Community
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {journeySteps.map((st, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="p-5 rounded-2xl glass-card border border-emerald-500/20 space-y-2 group hover:border-amber-400 transition-all">
              <span className="text-2xl font-serif font-bold text-amber-400">{st.num}</span>
              <h3 className="text-sm font-bold text-white">{st.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(214,175,55,0.1),transparent_58%)]" />

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Who Would You Like to Live Closer To?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Start with your people. We'll help you explore what can be created together.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openCircleModal}
            className="px-9 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all inline-flex items-center space-x-2"
          >
            <Users className="w-4 h-4" />
            <span>CREATE YOUR KENNIX CIRCLE</span>
          </motion.button>
        </div>
      </section>

    </div>
  );
}
