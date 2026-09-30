import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  HeartHandshake,
  Home,
  MapPin,
  Play,
  Sparkles,
  Users,
} from 'lucide-react';
import ThreeCanvasBG from '../components/ThreeCanvasBG';

const audiences = [
  { title: 'Individuals & Families', description: 'Find the right home for yourself or your family.', icon: Home },
  { title: 'Friends', description: 'Explore homes close to the friends you want nearby.', icon: HeartHandshake },
  { title: 'Communities', description: 'Explore opportunities with social or cultural networks.', icon: Users },
  { title: 'Shared-Interest', description: 'Explore opportunities around common lifestyles or professions.', icon: Sparkles },
];

const circleBenefits = [
  'Parents a few minutes away.',
  'Children growing up with cousins.',
  'Friends becoming neighbours.',
  'Communities celebrating together.',
];

const featuredProjects = [
  {
    id: 'kennix-woodlands',
    name: 'KENNIX Woodlands Estate',
    location: 'South Suburbs, Green Valley',
    type: 'Villas & Low-Rise Apartments',
    price: '₹85 L onwards',
    stage: 'Under Construction (Stage 3)',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    description: 'A serene residential enclave designed for multi-generational families and friend circles.',
    config: '3 & 4 BHK Luxury Residences',
    amenities: ['Central Community Park', 'Senior Wellness Hub', 'Clubhouse & Cafe', 'Solar Powered'],
  },
  {
    id: 'kennix-aurora',
    name: 'KENNIX Aurora Heights',
    location: 'Tech Corridor Sector 12',
    type: 'Smart Community Apartments',
    price: '₹68 L onwards',
    stage: 'Architectural & Pre-Launch',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern connected living for professional groups and growing families.',
    config: '2 & 3 BHK Smart Homes',
    amenities: ['Co-working Pods', 'EV Stations', 'Infinity Pool', '24/7 Smart Security'],
  },
  {
    id: 'kennix-heritage',
    name: 'KENNIX Heritage Enclave',
    location: 'Old Town Cultural Hub',
    type: 'Custom Land Plots & Built Homes',
    price: '₹1.1 Cr onwards',
    stage: 'Ready for Circle Booking',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Adjoining plots and bespoke homes centred around a shared cultural space.',
    config: 'Plots & Custom Villas',
    amenities: ['Amphitheatre', 'Cultural Center', 'Rainwater Harvesting', 'Gated Perimeter'],
  },
  {
    id: 'kennix-serenity',
    name: 'KENNIX Serenity Greens',
    location: 'Hillside Sanctuary',
    type: 'Senior & Family Living',
    price: '₹92 L onwards',
    stage: 'Material Check & Foundation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Accessible homes and peaceful shared spaces for senior and family living.',
    config: '2 & 3 BHK Accessible Homes',
    amenities: ['24/7 Medical Care Unit', 'Hydrotherapy Pool', 'Organic Farm', 'Library Lounge'],
  },
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55 },
};

export default function HomePage({ setActivePage, openCircleModal, setSelectedProject, theme = 'dark' }) {
  const isDark = theme === 'dark';

  return (
    <div className="relative min-h-screen overflow-hidden">
      <section className="relative min-h-[100svh] flex items-end px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/hero-bg.png"
            aria-label="A KENNIX community where families and friends live close together"
            className="w-full h-full object-cover saturate-[0.78] contrast-[1.06] brightness-[0.88]"
          >
            <source src="/kennix-community-placeholder.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,6,0.78)_0%,rgba(3,8,6,0.34)_45%,rgba(3,8,6,0.08)_72%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#030706]/90" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full max-w-7xl mx-auto"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
              </span>
              A new way to come home
            </div>

            <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[0.95] tracking-[-0.025em] text-white">
              Your home.
              <span className="block text-gold-gradient">Your people, closer.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/80">
              Discover thoughtfully planned homes where families, friends and communities can live
              nearby—together when you want, independent when you need.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                onClick={() => setActivePage('projects')}
                className="group px-6 py-3.5 rounded-full bg-[#D6B56C] text-[#12130F] font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-[0_12px_36px_rgba(214,181,108,0.18)] hover:bg-[#E4C986]"
              >
                Explore Homes
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={openCircleModal}
                className="px-6 py-3.5 rounded-full border border-white/20 bg-white/10 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md inline-flex items-center justify-center gap-2 hover:bg-white/15"
              >
                <Users className="w-4 h-4 text-[#D6B56C]" />
                Create My Circle
              </button>
              <div className="hidden md:flex ml-2 items-center gap-3 text-white/65">
                <span className="w-10 h-10 rounded-full border border-white/20 bg-black/20 flex items-center justify-center backdrop-blur-md">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] leading-relaxed">
                  KENNIX<br />story preview
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between">
            <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white/65">
              Connecting People <span className="text-amber-400">•</span> Creating Places Together
            </p>
            <div className="hidden sm:flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50">
              <span>Discover KENNIX</span>
              <span className="h-8 w-px bg-white/20" />
              <span className="inline-block h-8 w-[1px] bg-gradient-to-b from-amber-400 to-transparent animate-pulse" />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <motion.div {...reveal} className="space-y-12">
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-bold text-amber-500 tracking-widest uppercase">About</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-theme-heading">
              A Different Way to Think About Home
            </h1>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-5 rounded-2xl glass-card border-l-4 border-amber-500">
                <p className="text-xs uppercase tracking-wider text-theme-muted">Most property searches begin with</p>
                <p className="mt-2 text-2xl font-serif italic text-theme-heading">“Where do you want to live?”</p>
              </div>
              <div className="p-5 rounded-2xl glass-emerald border-l-4 border-emerald-500">
                <p className="text-xs uppercase tracking-wider text-amber-500">KENNIX also asks</p>
                <p className="mt-2 text-2xl font-serif font-bold">“Who do you want around you?”</p>
              </div>
              <div className="p-5 rounded-2xl glass-card border-l-4 border-amber-500 sm:col-span-2">
                <p className="text-xs uppercase tracking-wider text-theme-muted">Most property seekers must follow a developer’s floor plans</p>
                <p className="mt-2 text-2xl font-serif font-bold text-theme-heading">“What if your home could follow your choice of floor plan?”</p>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-theme-body">
              KENNIX is a real-estate platform that helps people discover suitable homes and property
              opportunities—individually or together with family, friends, communities and people with
              shared lifestyles or interests.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {audiences.map(({ title, description, icon: Icon }) => (
              <div key={title} className="p-5 rounded-2xl glass-card glass-card-hover">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h2 className="mt-4 text-lg font-serif font-bold text-theme-heading">{title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-theme-muted">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <motion.div {...reveal}>
          <p className="text-xs font-bold text-amber-500 tracking-widest uppercase">Signature Concept</p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-serif font-bold text-theme-heading">
            The KENNIX Circle
          </h2>
          <p className="text-xl font-serif font-bold text-theme-body">Your People. Your Circle.</p>

          <div className="relative mt-8 rounded-3xl overflow-hidden p-6 sm:p-10 text-center">
            <img
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=80"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-[#040706]/85" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {circleBenefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-amber-500/25 bg-emerald-950/30 p-5 text-sm text-white">
                  {benefit}
                </div>
              ))}
            </div>
            <blockquote className="relative mt-12 text-3xl sm:text-4xl font-serif italic font-bold text-amber-400">
              “Their Own Home. Their Own Space. Their Own Life.”
            </blockquote>
            <p className="relative mt-3 text-sm text-slate-300">
              KENNIX brings the right homes and the right people closer together.
            </p>
            <button
              onClick={openCircleModal}
              className="relative mt-8 px-7 py-3 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors inline-flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Create My Circle
            </button>
          </div>
        </motion.div>
      </section>

      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold text-amber-500 tracking-widest uppercase">Featured Opportunities</p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-serif font-bold text-theme-heading">
              Explore KENNIX Projects
            </h2>
          </div>
          <button
            onClick={() => setActivePage('projects')}
            className="text-xs font-bold uppercase tracking-wider text-amber-500 inline-flex items-center gap-2"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{ y: -5 }}
              className="rounded-2xl glass-card overflow-hidden flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-black/80 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-md">
                  {project.stage}
                </span>
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-xl font-serif font-bold text-theme-heading">{project.name}</h3>
                <p className="mt-3 text-xs text-theme-body flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" /> {project.location}
                </p>
                <p className="mt-1 text-xs text-theme-body flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5 text-emerald-500" /> {project.type}
                </p>
                <p className="mt-4 pt-4 border-t border-amber-500/15 text-sm font-bold text-amber-500">
                  {project.price}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(project)}
                className="mx-5 mb-5 py-2.5 rounded-xl border border-emerald-500/30 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1"
              >
                View Project <ChevronRight className="w-4 h-4 text-amber-500" />
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <ThreeCanvasBG density={38} variant="gold" theme={theme} className="opacity-50" />
        <div className={`absolute inset-0 ${isDark ? 'bg-[#040706]/55' : 'bg-white/45'}`} />
        <motion.div {...reveal} className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-theme-heading leading-tight">
            Your Next Home Could Bring More Than a New Address.
            <span className="block text-gold-gradient">It Could Bring Your People Closer.</span>
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-base text-theme-body">
            Whether you’re searching for yourself, your family, your friends or exploring an opportunity
            with your community—start with KENNIX.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActivePage('projects')}
              className="px-7 py-3 rounded-full bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider"
            >
              Find My Home
            </button>
            <button
              onClick={openCircleModal}
              className="px-7 py-3 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2"
            >
              <Users className="w-4 h-4" /> Create My Circle
            </button>
            <button
              onClick={() => setActivePage('projects')}
              className="px-7 py-3 rounded-full border border-amber-500/30 text-theme-heading font-bold text-xs uppercase tracking-wider"
            >
              Explore Projects
            </button>
          </div>
          <p className="mt-14 text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-500">
            KENNIX — Property. People. Community.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
