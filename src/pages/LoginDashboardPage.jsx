import React, { useState } from 'react';
import { 
  UserCheck, 
  KeyRound, 
  Lock, 
  Building2, 
  FileText, 
  CheckCircle2, 
  Clock, 
  Camera, 
  CreditCard, 
  Bell,
  LogOut,
  Sparkles
} from 'lucide-react';

export default function LoginDashboardPage({ openCircleModal }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email, setEmail] = useState('circle_lead@kennix.com');
  const [password, setPassword] = useState('••••••••••••');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      {!isLoggedIn ? (
        /* Login Form */
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
          <div className="p-8 rounded-3xl glass-card border border-amber-500/30 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-serif font-bold text-white">KENNIX Portal Login</h1>
              <p className="text-xs text-slate-400">Access your Circle project updates, QA reports & documents.</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Email / Circle ID</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Password</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
              >
                SIGN IN TO DASHBOARD
              </button>
            </form>
          </div>
        </section>
      ) : (
        /* Client Dashboard View */
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          
          {/* Dashboard Header Bar */}
          <div className="p-6 rounded-2xl glass-card border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Circle Status: Active & On Schedule</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Welcome, Sharma Family Circle
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">
                KENNIX Woodlands Estate • Project ID: #KNX-WDL-2026-08 • 6 Homes Group
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <button 
                onClick={openCircleModal}
                className="px-4 py-2 rounded-xl glass-gold text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider"
              >
                EXPAND CIRCLE
              </button>
              <button 
                onClick={() => setIsLoggedIn(false)}
                className="p-2 rounded-xl glass-card text-slate-400 hover:text-white"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl glass-emerald border border-emerald-500/30 space-y-1">
              <span className="text-[11px] uppercase font-mono text-slate-400">Construction Stage</span>
              <div className="text-xl font-bold font-serif text-amber-300">Stage 3: RCC Frame</div>
              <span className="text-[10px] text-emerald-400 font-mono">Completed 58% Overall</span>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-emerald-500/20 space-y-1">
              <span className="text-[11px] uppercase font-mono text-slate-400">QA Audits Passed</span>
              <div className="text-xl font-bold font-serif text-white">14 / 14 Tests</div>
              <span className="text-[10px] text-emerald-400 font-mono">Concrete & Steel Certified</span>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-emerald-500/20 space-y-1">
              <span className="text-[11px] uppercase font-mono text-slate-400">Target Possession</span>
              <div className="text-xl font-bold font-serif text-white">December 2026</div>
              <span className="text-[10px] text-amber-400 font-mono">On Time Milestone</span>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-emerald-500/20 space-y-1">
              <span className="text-[11px] uppercase font-mono text-slate-400">Circle Members</span>
              <div className="text-xl font-bold font-serif text-amber-300">6 Families</div>
              <span className="text-[10px] text-slate-400 font-mono">All Units Reserved</span>
            </div>
          </div>

          {/* Construction Timeline & Live Photo Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Timeline */}
            <div className="lg:col-span-7 p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-serif font-bold text-white flex items-center justify-between">
                <span>Milestone Journey & QA Verification</span>
                <span className="text-xs font-mono text-amber-400">Live Progress</span>
              </h3>

              <div className="space-y-3 text-xs">
                {[
                  { title: 'Soil Testing & Foundation RCC Footing', status: 'Completed', date: 'Jan 15, 2026', done: true },
                  { title: 'Plinth Level Waterproofing Membrane Inspection', status: 'Completed', date: 'Feb 28, 2026', done: true },
                  { title: 'Superstructure Slab 2 & 3 Casting', status: 'In Progress (80%)', date: 'Current Stage', active: true },
                  { title: 'AAC Brickwork & MEP Conduit Laying', status: 'Upcoming', date: 'Oct 2026' },
                  { title: 'Terrace Waterproofing Ponding Audit', status: 'Upcoming', date: 'Nov 2026' },
                ].map((stg, i) => (
                  <div key={i} className={`p-3.5 rounded-xl border flex items-center justify-between ${
                    stg.done 
                      ? 'bg-emerald-950/40 border-emerald-500/40 text-slate-200' 
                      : stg.active 
                      ? 'glass-gold border-amber-400 text-amber-300 font-bold' 
                      : 'bg-black/20 border-slate-800 text-slate-500'
                  }`}>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className={`w-4 h-4 ${stg.done ? 'text-emerald-400' : stg.active ? 'text-amber-400 animate-pulse' : 'text-slate-700'}`} />
                      <span>{stg.title}</span>
                    </div>
                    <span className="font-mono text-[10px]">{stg.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Log & Documents */}
            <div className="lg:col-span-5 p-6 rounded-2xl glass-card border border-emerald-500/20 space-y-4">
              <h3 className="text-lg font-serif font-bold text-white flex items-center justify-between">
                <span>Recent Site Photo Feed</span>
                <Camera className="w-4 h-4 text-amber-400" />
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-xl overflow-hidden h-28 border border-emerald-800/40 group">
                  <img src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=400&q=80" alt="Site" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 p-2 flex items-end">
                    <span className="text-[10px] text-white font-mono">Slab Casting Audit</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden h-28 border border-emerald-800/40 group">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80" alt="Site" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 p-2 flex items-end">
                    <span className="text-[10px] text-white font-mono">Rebar Inspection</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">Circle Documents</span>
                <div className="p-2.5 rounded-lg bg-black/30 text-xs text-slate-300 flex items-center justify-between border border-slate-800">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-emerald-400" />
                    <span>Structural_Audit_Cert_Stage3.pdf</span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-mono cursor-pointer hover:underline">Download</span>
                </div>
              </div>
            </div>

          </div>

        </section>
      )}
    </div>
  );
}
