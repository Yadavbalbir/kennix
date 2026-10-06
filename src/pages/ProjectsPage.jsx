import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Home, 
  ChevronRight, 
  Maximize2,
  Users
} from 'lucide-react';
import { contractorProjects } from '../data/contractorProjects';
import FullscreenImageModal from '../components/FullscreenImageModal';

export default function ProjectsPage({ setSelectedProject, openCircleModal }) {
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [fullscreenProject, setFullscreenProject] = useState(null);

  const filtered = contractorProjects.filter(p => {
    const matchesCat = filterType === 'all' || p.category === filterType;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-emerald-950/60">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            BUILT EXPERIENCE
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
            Contractor-Built Portfolio
          </h1>
          <p className="text-slate-300 text-sm">
            Selected residential projects completed across Hyderabad by the contractor associated with KENNIX.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input 
              type="text" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by project or location..."
              className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-xl pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'residential', label: 'Residential' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  filterType === f.id
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'glass-card text-slate-300 hover:text-white border border-slate-700'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(prj => (
            <div 
              key={prj.id} 
              className="rounded-2xl glass-card border border-emerald-500/20 overflow-hidden glass-card-hover flex flex-col justify-between"
            >
              <div>
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#050706]">
                  <img src={prj.image} alt={prj.name} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-[#E5C77F] text-[10px] font-bold px-3 py-1 rounded-md border border-[#D6B56C]/30">
                    {prj.stage}
                  </div>
                  <button
                    type="button"
                    onClick={() => setFullscreenProject(prj)}
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-sm transition-colors hover:bg-[#D6B56C] hover:text-[#10271F]"
                    aria-label={`View full image of ${prj.name}`}
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-serif font-bold text-white">{prj.name}</h3>
                  <div className="text-xs text-slate-300 space-y-1">
                    <p className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{prj.location}</span>
                    </p>
                    <p className="flex items-center space-x-1">
                      <Home className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{prj.type}</span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Experience</span>
                    <span className="text-xs font-bold text-amber-300">{prj.relationship}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex gap-2">
                <button
                  onClick={() => setSelectedProject(prj)}
                  className="flex-1 py-2.5 rounded-xl glass-emerald text-white text-xs font-bold tracking-wider uppercase border border-emerald-400/30 hover:border-amber-400 transition-colors flex items-center justify-center space-x-1"
                >
                  <span>VIEW PROJECT</span>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-serif font-bold text-white">Planning a Residential Project or a Circle?</h2>
        <button
          onClick={openCircleModal}
          className="px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all inline-flex items-center space-x-2"
        >
          <Users className="w-4 h-4" />
          <span>CREATE YOUR CIRCLE</span>
        </button>
      </section>

      <FullscreenImageModal
        src={fullscreenProject?.image}
        alt={fullscreenProject?.name}
        isOpen={!!fullscreenProject}
        onClose={() => setFullscreenProject(null)}
      />
    </div>
  );
}
