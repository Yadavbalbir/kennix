import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  PhoneCall, 
  Home,
  Lightbulb,
  Lock,
  Smartphone,
  Sliders,
  Tv
} from 'lucide-react';

export default function InteriorsSmartHomesPage({ setActivePage }) {
  const [selectedTier, setSelectedTier] = useState('premium');

  const tiers = {
    essential: {
      title: 'Essential Specification',
      desc: 'Clean, functional interiors with carefully selected standard materials, modular kitchen, and smart security baseline.',
      features: ['Standard Modular Kitchen', 'Modular Wardrobes in Bedrooms', 'Ambient LED Ceiling Lighting', 'Smart Video Doorbell & Digital Lock']
    },
    premium: {
      title: 'Premium Specification',
      desc: 'Upgraded finishes, acrylic kitchen solutions, false ceiling designs, and expanded multi-room smart lighting automation.',
      features: ['Premium Soft-close Modular Kitchen', 'Walk-in Wardrobe options', 'Designer Lighting & Accent Walls', 'Smart Climate & Lighting Controls', 'Motorized Curtain Provisions']
    },
    signature: {
      title: 'Signature Luxury Specification',
      desc: 'Fully personalized bespoke interiors, Italian marble / solid hardwood finishes, integrated voice & scene smart automation.',
      features: ['Custom Italian Modular Kitchen', 'Bespoke Veneer & Marble Finishes', 'Whole-Home Voice & App Automation', 'Automated Curtains & Security Sensors', 'Integrated Multi-Room Audio & Cinema']
    }
  };

  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6 border-b border-emerald-950/60">
        <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          INTERIORS & SMART HOMES
        </span>
        
        <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
          Designed for Living. <br />
          <span className="text-gold-gradient">Made Smarter for You.</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          KENNIX brings together interior design, execution and smart-home technology to create spaces that are beautiful, functional and designed around everyday life.
        </p>

        <button
          onClick={() => setActivePage('how-it-works')}
          className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg hover:brightness-110 transition-all inline-flex items-center space-x-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>DESIGN MY SPACE</span>
        </button>
      </section>

      {/* Smart Home Pillars */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <h2 className="text-3xl font-serif font-bold text-white text-center mb-12">
          Intelligent Home Automation & Safety
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Smart Lighting & Scenes',
              desc: 'Control selected lights, brightness, mood scenes, and automated schedules from phone or keypads.',
              icon: Lightbulb
            },
            {
              title: 'Smart Security & Locks',
              desc: 'Video doorbells, keyless smart door locks, motion sensors, and live remote smartphone monitoring.',
              icon: Lock
            },
            {
              title: 'Climate & Energy',
              desc: 'Smart thermostats and AC control that optimize temperature and reduce energy usage.',
              icon: Sliders
            },
            {
              title: 'Motorized Curtains & Blinds',
              desc: 'Automated curtain and shade control linked with morning wake-up or evening privacy scenes.',
              icon: Tv
            },
            {
              title: 'Safety & Leak Detection',
              desc: 'Gas leak detectors, smoke alarms, and automated water leak shutoff valves for total family safety.',
              icon: ShieldCheck
            },
            {
              title: 'Voice & App Integration',
              desc: 'Compatible devices integrated seamlessly with Apple Home, Alexa, or Google Assistant platforms.',
              icon: Smartphone
            }
          ].map((sm, i) => {
            const Icon = sm.icon;
            return (
              <div key={i} className="p-6 rounded-2xl glass-card border border-emerald-500/20 glass-card-hover space-y-3">
                <div className="p-3 rounded-xl bg-amber-400/20 text-amber-400 inline-block">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-white">{sm.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{sm.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Specification Tiers Selector */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-emerald-950/60">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-serif font-bold text-white">KENNIX Interior Specification Tiers</h2>
          <p className="text-xs text-slate-400 mt-1">Select a tier to explore curated finish packages for KENNIX developments.</p>
        </div>

        <div className="flex justify-center space-x-3 mb-8">
          {['essential', 'premium', 'signature'].map(t => (
            <button
              key={t}
              onClick={() => setSelectedTier(t)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedTier === t 
                  ? 'bg-amber-400 text-slate-950 shadow-[0_0_20px_rgba(212,175,55,0.6)]' 
                  : 'glass-card text-slate-300 hover:text-white border border-slate-700'
              }`}
            >
              {t} Tier
            </button>
          ))}
        </div>

        <div className="p-8 rounded-3xl glass-emerald border border-emerald-500/40 space-y-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white">{tiers[selectedTier].title}</h3>
            <p className="text-xs text-slate-300 mt-1">{tiers[selectedTier].desc}</p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">Included Features:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {tiers[selectedTier].features.map((f, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-black/40 border border-emerald-800/50 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-serif font-bold text-white">Your Home Should Work Around You.</h2>
        <p className="text-slate-300 text-sm">Thoughtful interiors, intelligent technology and coordinated execution—all brought together by KENNIX.</p>
        <button
          onClick={() => setActivePage('how-it-works')}
          className="px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all inline-flex items-center space-x-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>DESIGN MY SPACE</span>
        </button>
      </section>

    </div>
  );
}
