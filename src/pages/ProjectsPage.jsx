import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Home, 
  ChevronRight, 
  Sparkles,
  Users
} from 'lucide-react';

export default function ProjectsPage({ setSelectedProject, openCircleModal }) {
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      id: 'kennix-woodlands',
      name: 'KENNIX Woodlands Estate',
      location: 'South Suburbs, Green Valley',
      type: 'Villas & Low-Rise Apartments',
      price: '₹85 L onwards',
      stage: 'Under Construction (Stage 3)',
      category: 'villas',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      description: 'A serene luxury residential enclave specifically designed for multi-generational families and friend circles with shared organic gardens, clubhouse, and senior walking paths.',
      config: '3 & 4 BHK Luxury Residences',
      amenities: ['Central Community Park', 'Senior Wellness Hub', 'Clubhouse & Cafe', 'Solar Powered']
    },
    {
      id: 'kennix-aurora',
      name: 'KENNIX Aurora Heights',
      location: 'Tech Corridor Sector 12',
      type: 'Smart Community Apartments',
      price: '₹68 L onwards',
      stage: 'Architectural & Pre-Launch',
      category: 'apartments',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      description: 'Designed for professional groups and tech circles looking for modern interconnected living, co-working pods, and smart home automation.',
      config: '2 & 3 BHK Smart Homes',
      amenities: ['Co-working Pods', 'EV Stations', 'Infinity Pool', '24/7 Smart Security']
    },
    {
      id: 'kennix-heritage',
      name: 'KENNIX Heritage Enclave',
      location: 'Old Town Cultural Hub',
      type: 'Custom Land Plots & Built Homes',
      price: '₹1.1 Cr onwards',
      stage: 'Ready for Circle Booking',
      category: 'plots',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'A cultural community development enabling 15+ families to purchase adjoining plots and build bespoke traditional homes around a central community hall.',
      config: 'Plots & Custom Villas',
      amenities: ['Amphitheatre', 'Cultural Center', 'Rainwater Harvesting', 'Gated Perimeter']
    },
    {
      id: 'kennix-serenity',
      name: 'KENNIX Serenity Greens',
      location: 'Hillside Sanctuary',
      type: 'Senior & Family Living',
      price: '₹92 L onwards',
      stage: 'Material Check & Foundation',
      category: 'villas',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      description: 'Thoughtfully constructed with zero-stair ramps, medical emergency response points, and peaceful community lawns for peaceful living.',
      config: '2 & 3 BHK Accessible Homes',
      amenities: ['24/7 Medical Care Unit', 'Hydrotherapy Pool', 'Organic Farm', 'Library Lounge']
    },
    {
      id: 'kennix-oasis',
      name: 'KENNIX Commercial Plaza & Hub',
      location: 'Central Financial District',
      type: 'Retail & Office Suites',
      price: '₹1.4 Cr onwards',
      stage: 'Structure Completion',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      description: 'Purpose-built commercial workplace and boutique retail suites for modern businesses, featuring high speed elevators and LEED certified energy systems.',
      config: '500 - 3,500 sq.ft Suites',
      amenities: ['LEED Gold Certified', 'Valet Parking', 'High-Speed Elevators', 'Rooftop Lounge']
    }
  ];

  const filtered = projects.filter(p => {
    const matchesCat = filterType === 'all' || p.category === filterType;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="relative min-h-screen text-slate-100 pt-20">
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-emerald-950/60">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            EXPLORE OPPORTUNITIES
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight">
            KENNIX Featured Projects
          </h1>
          <p className="text-slate-300 text-sm">
            Discover active developments open for individual home purchases or full KENNIX Circle reservations.
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
              { id: 'villas', label: 'Villas & Enclaves' },
              { id: 'apartments', label: 'Apartments' },
              { id: 'plots', label: 'Land & Plots' },
              { id: 'commercial', label: 'Commercial' },
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
                <div className="relative h-52 overflow-hidden">
                  <img src={prj.image} alt={prj.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-md border border-emerald-500/30">
                    {prj.stage}
                  </div>
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
                    <span className="text-[11px] text-slate-400 font-mono uppercase">Starting Price</span>
                    <span className="text-base font-bold font-serif text-amber-300">{prj.price}</span>
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
        <h2 className="text-3xl font-serif font-bold text-white">Want to Reserve Multiple Homes for Your Group?</h2>
        <button
          onClick={openCircleModal}
          className="px-8 py-3.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-all inline-flex items-center space-x-2"
        >
          <Users className="w-4 h-4" />
          <span>CREATE YOUR CIRCLE</span>
        </button>
      </section>
    </div>
  );
}
