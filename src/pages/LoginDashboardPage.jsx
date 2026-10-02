import React, { useState } from 'react';
import { 
  ArrowRight,
  Camera,
  CheckCircle2,
  Eye,
  EyeOff,
  FileText,
  Lock,
  LogOut,
  ShieldCheck,
} from 'lucide-react';

const DEMO_EMAIL = 'demo@kennix.in';
const DEMO_PASSWORD = 'kennix2026';

export default function LoginDashboardPage({ openCircleModal }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (email.trim().toLowerCase() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      setLoginError('Those demo credentials do not match. Use the access details shown below.');
      return;
    }
    setLoginError('');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
    setLoginError('');
  };

  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      {!isLoggedIn ? (
        /* Login Form */
        <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="hidden lg:col-span-6 lg:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D6B56C]">Private client access</p>
            <h1 className="mt-5 max-w-xl font-serif text-5xl font-bold leading-[1.04] text-white">
              Your project, visible at every stage.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-slate-400">
              The KENNIX Client Portal gives Circle members one secure place for construction milestones, quality verification, site photographs and project documents.
            </p>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-3">
              {['Live milestone progress', 'QA certificates', 'Site photo updates', 'Circle documents'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-slate-300">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#D8C9A8] bg-[#FAF7F0] p-6 text-[#10271F] shadow-[0_24px_70px_rgba(0,0,0,0.42)] sm:p-8 lg:col-span-6 lg:ml-auto lg:w-full lg:max-w-md">
            <div className="space-y-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#153D30] text-[#E5C77F]">
                <Lock className="h-5 w-5" />
              </div>
              <p className="pt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A681D]">Client Portal</p>
              <h2 className="font-serif text-3xl font-bold">Sign in to your Circle</h2>
              <p className="text-sm leading-6 text-[#68736E]">Access is reserved for active KENNIX clients and Circle members.</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="mt-7 space-y-4 text-xs">
              <div>
                <label htmlFor="portal-email" className="mb-1.5 block font-semibold text-[#45574F]">Email address</label>
                <input
                  id="portal-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[#CEC8BC] bg-white px-4 py-3 text-sm text-[#10271F] outline-none placeholder:text-[#A3AAA6] focus:border-[#A77B26] focus:ring-2 focus:ring-[#D4AF57]/20"
                />
              </div>

              <div>
                <label htmlFor="portal-password" className="mb-1.5 block font-semibold text-[#45574F]">Password</label>
                <div className="relative">
                  <input
                    id="portal-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-[#CEC8BC] bg-white px-4 py-3 pr-11 text-sm text-[#10271F] outline-none placeholder:text-[#A3AAA6] focus:border-[#A77B26] focus:ring-2 focus:ring-[#D4AF57]/20"
                  />
                  <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-[#68736E]" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {loginError && <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-[11px] leading-5 text-red-700">{loginError}</p>}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#153D30] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_10px_24px_rgba(21,61,48,0.2)] transition-colors hover:bg-[#205442]"
              >
                Sign in securely <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-6 rounded-xl border border-[#D8BD7C] bg-[#FFF4D6] p-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A641C]">
                <ShieldCheck className="h-4 w-4" /> Demo access
              </div>
              <div className="mt-2 space-y-1 font-mono text-[11px] text-[#5C513A]">
                <p>Email: <strong>{DEMO_EMAIL}</strong></p>
                <p>Password: <strong>{DEMO_PASSWORD}</strong></p>
              </div>
            </div>
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
                onClick={handleLogout}
                className="p-2 rounded-xl glass-card text-slate-400 hover:text-white"
                aria-label="Sign out of Client Portal"
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
