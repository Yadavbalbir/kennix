import React from 'react';
import { 
  X, 
  MapPin, 
  Home, 
  CheckCircle2, 
  Building2, 
  Layers, 
  PhoneCall, 
  Sparkles,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose, openCircleModal }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-card rounded-2xl border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header Image & Title Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img 
            src={project.image} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/40 to-transparent" />
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Header Info */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {project.type}
              </span>
              <span className="bg-emerald-500/80 text-white text-xs font-semibold px-3 py-1 rounded-full border border-emerald-400/40">
                Stage: {project.stage}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
              {project.name}
            </h2>
            <p className="text-sm text-slate-300 flex items-center space-x-1.5 mt-1 font-sans">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{project.location}</span>
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200 flex-1">
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl glass-emerald border border-emerald-500/30">
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-mono block">Starting Price</span>
              <span className="text-xl font-bold font-serif text-amber-300">{project.price}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-mono block">Property Configurations</span>
              <span className="text-sm font-semibold text-white">{project.config || '2, 3 & 4 BHK Luxury'}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-mono block">Circle Eligibility</span>
              <span className="text-sm font-semibold text-emerald-400">Available for Circles</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-mono block">Quality Assurance</span>
              <span className="text-sm font-semibold text-amber-300 flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>KENNIX Verified</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">About {project.name}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description || `${project.name} is a premier residential community meticulously planned around family connections and modern living. Designed with spacious private layouts, shared lush central courtyards, and state-of-the-art sustainability infrastructure.`}
            </p>
          </div>

          {/* Key Amenities */}
          <div>
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-widest mb-3">
              Community Amenities & Features
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {(project.amenities || [
                'Community Clubhouse & Hall',
                'Senior Citizens Green Lawn',
                'Children Play Zone & Sandpit',
                '24/7 Multi-Tiered Security',
                'EV Charging Infrastructure',
                'Solar Powered Common Lighting'
              ]).map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-900/50 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Stage Progress */}
          <div className="p-4 rounded-xl glass-card border border-amber-500/20 space-y-3">
            <h4 className="text-xs uppercase font-bold text-amber-400 tracking-wider flex items-center justify-between">
              <span>Development & QA Milestone Status</span>
              <span className="text-emerald-400 font-mono">Stage 4 of 6</span>
            </h4>

            <div className="grid grid-cols-6 gap-1 pt-2">
              {['Land & Feasibility', 'Arch & Design', 'Structure & Civil', 'MEP & Plumbing', 'Finishing & QA', 'Handover'].map((st, i) => (
                <div key={i} className="text-center">
                  <div className={`h-2 rounded-full mb-1 ${i <= 3 ? 'bg-amber-400 shadow-[0_0_8px_rgba(212,175,55,0.8)]' : 'bg-slate-800'}`} />
                  <span className="text-[10px] text-slate-400 block truncate">{st}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 border-t border-amber-500/20 bg-emerald-950/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs font-semibold hover:bg-white/5 transition-colors"
          >
            CLOSE
          </button>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                openCircleModal();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg hover:brightness-110 transition-all flex items-center justify-center space-x-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>RESERVE WITH MY CIRCLE</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
