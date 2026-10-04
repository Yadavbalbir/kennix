import React from 'react';
import { 
  X,
  MapPin,
  Sparkles,
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
            style={{ objectPosition: project.imagePosition }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/40 to-transparent" />
          
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors z-10"
            aria-label="Close project details"
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
                {project.stage}
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
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl glass-emerald border border-emerald-500/30">
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-mono block">Status</span>
              <span className="text-xl font-bold font-serif text-amber-300">{project.stage}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-mono block">Project Type</span>
              <span className="text-sm font-semibold text-white">{project.type}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-mono block">Scope</span>
              <span className="text-sm font-semibold text-emerald-400">{project.scope}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-mono block">Experience</span>
              <span className="text-sm font-semibold text-amber-300">{project.relationship}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">About {project.name}</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description || `${project.name} is a premier residential community meticulously planned around family connections and modern living. Designed with spacious private layouts, shared lush central courtyards, and state-of-the-art sustainability infrastructure.`}
            </p>
          </div>

          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
            <p className="text-xs leading-6 text-slate-300">
              This project is shown as evidence of prior contractor experience. It is not presented as a current KENNIX development or an active sales listing.
            </p>
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
              <span>DISCUSS A NEW PROJECT</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
