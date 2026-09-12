import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThreeCanvasBG from '../components/ThreeCanvasBG';
import { 
  Users, 
  Home, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Layers, 
  Compass, 
  HelpCircle,
  Eye,
  FileCheck,
  ChevronRight,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export default function HomePage({ setActivePage, openCircleModal, setSelectedProject, theme = 'dark' }) {
  const [activeTabJourney, setActiveTabJourney] = useState('circle');
  const [activeCommunityTab, setActiveCommunityTab] = useState('family');

  const isDark = theme === 'dark';

  const featuredProjects = [
    {
      id: 'kennix-woodlands',
      name: 'KENNIX Woodlands Estate',
      location: 'South Suburbs, Green Valley',
      type: 'Villas & Low-Rise Apartments',
      price: '₹85 L onwards',
      stage: 'Under Construction (Stage 3)',
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
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      description: 'Thoughtfully constructed with zero-stair ramps, medical emergency response points, and peaceful community lawns for peaceful living.',
      config: '2 & 3 BHK Accessible Homes',
      amenities: ['24/7 Medical Care Unit', 'Hydrotherapy Pool', 'Organic Farm', 'Library Lounge']
    }
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden pt-0 transition-colors duration-300">
      
      {/* 1. HERO SCREEN WITH REAL ESTATE BACKGROUND BEHIND TRANSPARENT HEADER */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-500/20 overflow-hidden">
        
        {/* Real Estate Background Image - Full bleed behind header */}
        <div className="absolute inset-0 z-0 overflow-hidden" style={{ top: '-80px' }}>
          <img 
            src="/hero-bg.png" 
            alt="KENNIX Luxury Residential Development" 
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-[0.95] contrast-[1.05]"
            style={{ marginTop: '0px', height: 'calc(100% + 80px)' }}
          />
          
          {/* Gradient overlay — lighter to keep image visible */}
          {isDark ? (
            <div className="absolute inset-0 bg-gradient-to-b from-[#070A09]/40 via-[#070A09]/20 to-[#070A09]/90" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/85" />
          )}
        </div>

        {/* Dynamic 3D Interactive Canvas ("ThreeUI") */}
        <ThreeCanvasBG density={40} variant="hero" theme={theme} className="opacity-50 z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 max-w-5xl mx-auto text-center space-y-8 mt-6"
        >
          {/* Animated Floating Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className={`inline-flex items-center space-x-2 px-5 py-2 rounded-full glass-gold text-xs font-semibold tracking-wider uppercase shadow-[0_0_30px_rgba(212,175,55,0.4)] animate-float cursor-default ${
              isDark ? 'text-amber-300 border-amber-400/40' : 'text-amber-800 border-amber-500/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Property • People • Community • Quality</span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] text-white" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.4)' }}>
            Find Your Home. <br />
            <span className="text-gold-gradient">Live Closer to Your People.</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-3xl mx-auto text-base sm:text-xl font-sans font-light leading-relaxed text-white/90" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.4)' }}>
            KENNIX brings property and community together. Discover homes, land and living opportunities for yourself, your family, your friends, your community, or people who share a similar way of living.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 45px rgba(212,175,55,0.8)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActivePage('projects')}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center space-x-2"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActivePage('how-it-works')}
              className={`w-full sm:w-auto px-9 py-4 rounded-full glass-emerald font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2 ${
                isDark ? 'text-white border-emerald-400/40' : 'text-emerald-950 border-emerald-600/40'
              }`}
            >
              <Compass className="w-4 h-4 text-emerald-500" />
              <span>HOW KENNIX WORKS</span>
            </motion.button>
          </div>

          {/* Tagline Banner */}
          <div className="pt-8 border-t border-amber-500/20 max-w-xl mx-auto">
            <p className="text-xs text-amber-500 font-mono tracking-widest uppercase font-semibold">
              The KENNIX Promise: Find a home AND live closer to the people who matter to you.
            </p>
          </div>

        </motion.div>
      </section>

      {/* 2. WHAT IS KENNIX? */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border-b border-amber-500/10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
              WHAT IS KENNIX?
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight text-theme-heading">
              A Different Way to Think About Home
            </h2>
            
            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-theme-body">
              <div className="p-4 rounded-xl glass-card border-l-4 border-amber-500 space-y-1">
                <span className="text-xs uppercase font-mono block text-theme-muted">Most Property Searches Begin With:</span>
                <p className="text-lg font-serif italic text-theme-heading">“Where do you want to live?”</p>
              </div>

              <div className="p-4 rounded-xl glass-emerald border-l-4 border-emerald-500 space-y-1">
                <span className="text-xs uppercase font-mono block font-bold text-amber-500">KENNIX Adds Another Important Question:</span>
                <p className="text-xl font-serif font-bold text-emerald-600 dark:text-emerald-300">“Who do you want around you?”</p>
              </div>

              <p className="pt-2">
                KENNIX is a real-estate platform that helps people discover suitable homes and property opportunities — individually or together with family, friends, communities and people with shared lifestyles or interests.
              </p>
              <p>
                Whether you're looking for one home, several homes close to your family or friends, or an opportunity for a larger community, KENNIX helps bring people and property together.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-6 grid grid-cols-2 gap-4">
            {[
              { title: 'Individuals & Families', desc: 'Find the right home for yourself or your family.', icon: Home, color: 'amber' },
              { title: 'Friends', desc: 'Explore homes close to the friends you want nearby.', icon: HeartHandshake, color: 'emerald' },
              { title: 'Communities', desc: 'Explore opportunities with social or cultural networks.', icon: Users, color: 'emerald' },
              { title: 'Shared-Interest', desc: 'Explore opportunities around common lifestyles & professions.', icon: Sparkles, color: 'amber' },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="p-5 rounded-2xl glass-card space-y-3 glass-card-hover"
                >
                  <div className={`w-10 h-10 rounded-xl ${card.color === 'amber' ? 'bg-amber-500/20 text-amber-500 border border-amber-500/40' : 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/40'} flex items-center justify-center`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-theme-heading">{card.title}</h3>
                  <p className="text-xs text-theme-muted">{card.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* 3. THREE WAYS TO START */}
      <section className={`py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10 ${isDark ? 'bg-emerald-950/20' : 'bg-emerald-50/40'}`}>
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            THREE WAYS TO START
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-theme-heading">
            How Would You Like to Begin?
          </h2>
          <p className="text-xs sm:text-sm text-theme-muted">
            KENNIX structures three distinct customer journeys tailored to your immediate needs.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Journey 1 */}
          <motion.div variants={itemVariants} whileHover={{ y: -6 }} className="p-8 rounded-2xl glass-card flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white flex items-center justify-center text-2xl shadow-lg">
                🏠
              </div>
              <h3 className="text-2xl font-serif font-bold text-theme-heading">FIND MY HOME</h3>
              <p className="text-sm text-theme-body leading-relaxed">
                Looking for a home for yourself or your family? Browse curated, high-quality residential listings.
              </p>
            </div>

            <button
              onClick={() => setActivePage('projects')}
              className="w-full py-3 rounded-xl glass-emerald font-bold text-xs tracking-wider uppercase border border-emerald-500/40 hover:bg-emerald-900/80 transition-colors flex items-center justify-center space-x-2"
            >
              <span>FIND MY HOME</span>
              <ArrowRight className="w-4 h-4 text-emerald-500" />
            </button>
          </motion.div>

          {/* Journey 2 - HIGHLIGHTED */}
          <motion.div variants={itemVariants} whileHover={{ y: -8, scale: 1.02 }} className="p-8 rounded-2xl glass-gold border-2 border-amber-400 flex flex-col justify-between space-y-6 shadow-[0_0_50px_rgba(212,175,55,0.3)] relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              Signature Feature
            </div>
            
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center text-2xl shadow-lg">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="text-2xl font-serif font-bold text-theme-heading">LIVE CLOSER TO MY PEOPLE</h3>
              <p className="text-sm text-theme-body leading-relaxed">
                Want your family or friends to live nearby while everyone maintains their own independent home and privacy?
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              onClick={openCircleModal}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(212,175,55,0.5)] hover:brightness-110 transition-all flex items-center justify-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>CREATE MY CIRCLE</span>
            </motion.button>
          </motion.div>

          {/* Journey 3 */}
          <motion.div variants={itemVariants} whileHover={{ y: -6 }} className="p-8 rounded-2xl glass-card flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white flex items-center justify-center text-2xl shadow-lg">
                🌿
              </div>
              <h3 className="text-2xl font-serif font-bold text-theme-heading">EXPLORE COMMUNITY LIVING</h3>
              <p className="text-sm text-theme-body leading-relaxed">
                Looking for an opportunity together with an existing cultural community or shared-interest group?
              </p>
            </div>

            <button
              onClick={() => setActivePage('community-development')}
              className="w-full py-3 rounded-xl glass-emerald font-bold text-xs tracking-wider uppercase border border-emerald-500/40 hover:bg-emerald-900/80 transition-colors flex items-center justify-center space-x-2"
            >
              <span>EXPLORE COMMUNITY LIVING</span>
              <ArrowRight className="w-4 h-4 text-emerald-500" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. HOW KENNIX WORKS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            HOW KENNIX WORKS
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-theme-heading">
            From an Idea to a Place You Can Call Home
          </h2>
        </div>

        {/* Horizontal Process Steps */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-12"
        >
          {[
            { num: '01', title: 'Tell Us Need', desc: 'Location, Budget & Type' },
            { num: '02', title: 'Buying With', desc: 'Myself, Family or Group' },
            { num: '03', title: 'Opportunities', desc: 'KENNIX Identifies Opportunities' },
            { num: '04', title: 'Evaluate', desc: 'Docs, Feasibility & Costs' },
            { num: '05', title: 'Buy or Build', desc: 'Existing or Development' },
            { num: '06', title: 'Quality Checks', desc: 'Follow Progress Milestones' },
            { num: '07', title: 'Move In', desc: 'Stay Connected' },
          ].map((st, i) => (
            <motion.div key={i} variants={itemVariants} whileHover={{ scale: 1.05 }} className="relative p-4 rounded-xl glass-card flex flex-col justify-between space-y-2 group hover:border-amber-400 transition-all">
              <div className="text-2xl font-serif font-bold text-amber-500 group-hover:scale-110 transition-transform">
                {st.num}
              </div>
              <div>
                <h4 className="text-xs font-bold text-theme-heading">{st.title}</h4>
                <p className="text-[10px] text-theme-muted mt-1">{st.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <button
            onClick={() => setActivePage('how-it-works')}
            className="px-8 py-3.5 rounded-full glass-gold text-amber-600 dark:text-amber-300 border border-amber-500/40 font-bold text-xs tracking-wider uppercase hover:bg-amber-400 hover:text-slate-950 transition-all flex items-center justify-center space-x-2 mx-auto"
          >
            <span>SEE HOW KENNIX WORKS IN DETAIL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. THE KENNIX CIRCLE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <div className="p-8 sm:p-12 rounded-3xl glass-emerald relative overflow-hidden shadow-xl">
          
          <ThreeCanvasBG density={35} variant="gold" theme={theme} className="opacity-50" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                <Users className="w-3.5 h-3.5" />
                <span>SIGNATURE CONCEPT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-theme-heading">
                THE KENNIX CIRCLE <br />
                <span className="text-gold-gradient">Your People. Your Circle.</span>
              </h2>

              <ul className="space-y-3 text-sm sm:text-base text-theme-body">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Your parents want a home close to you.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Your siblings want to stay nearby.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Five close friends want homes in the same development.</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                  <span>Or members from your community are looking for homes in one location.</span>
                </li>
              </ul>

              <div className="p-4 rounded-xl glass-card border-l-4 border-amber-400 text-amber-600 dark:text-amber-300 font-serif text-lg italic">
                “Together when you want. Independent when you need.”
              </div>

              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openCircleModal}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:brightness-110 transition-all flex items-center space-x-2"
                >
                  <Users className="w-4 h-4" />
                  <span>CREATE MY CIRCLE NOW</span>
                </motion.button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 p-6 rounded-2xl glass-card text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto border border-amber-500/40">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-theme-heading">
                Combined Requirement Feasibility
              </h3>
              <p className="text-xs text-theme-body">
                Tell KENNIX the number of homes, locations, budgets, and property preferences. We explore suitable joint opportunities.
              </p>
              <div className="pt-2">
                <span className="text-[11px] uppercase font-mono text-emerald-600 dark:text-emerald-400 block bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/30 font-bold">
                  Zero Obligation • Complete Feasibility Analysis
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. FEATURED PROJECTS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              FEATURED OPPORTUNITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-theme-heading mt-3">
              Explore KENNIX Projects
            </h2>
          </div>
          <button
            onClick={() => setActivePage('projects')}
            className="px-6 py-2.5 rounded-full border border-amber-500/40 text-amber-600 dark:text-amber-300 font-bold text-xs tracking-wider uppercase hover:bg-amber-400 hover:text-slate-950 transition-all flex items-center space-x-1.5 self-start md:self-auto"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProjects.map((prj) => (
            <motion.div 
              key={prj.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="rounded-2xl glass-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={prj.image} 
                    alt={prj.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-md border border-emerald-500/30">
                    {prj.stage}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-serif font-bold text-theme-heading">
                    {prj.name}
                  </h3>
                  <div className="text-xs text-theme-body space-y-1">
                    <p className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      <span>{prj.location}</span>
                    </p>
                    <p className="flex items-center space-x-1">
                      <Home className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{prj.type}</span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between">
                    <span className="text-[11px] text-theme-muted font-mono uppercase">Starting Price</span>
                    <span className="text-sm font-bold font-serif text-amber-500">{prj.price}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedProject(prj)}
                  className="w-full py-2.5 rounded-xl glass-emerald text-xs font-bold tracking-wider uppercase border border-emerald-500/30 hover:border-amber-400 transition-colors flex items-center justify-center space-x-1"
                >
                  <span>VIEW PROJECT</span>
                  <ChevronRight className="w-4 h-4 text-amber-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 7. QUALITY ASSURANCE SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10 relative overflow-hidden">
        <ThreeCanvasBG density={30} variant="emerald" theme={theme} className="opacity-40" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              QUALITY ASSURANCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight text-theme-heading">
              Know What Goes Into Your Home
            </h2>
            <p className="text-sm leading-relaxed text-theme-body">
              For applicable KENNIX-managed developments, customers get greater visibility into important construction stages and quality checks.
            </p>

            <div className="p-4 rounded-xl glass-gold text-amber-600 dark:text-amber-300 font-serif italic text-lg">
              “Quality shouldn't only be promised. It should be visible.”
            </div>

            <button
              onClick={() => setActivePage('quality-assurance')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg hover:brightness-110 transition-all flex items-center space-x-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>EXPLORE QUALITY ASSURANCE</span>
            </button>
          </motion.div>

          <div className="lg:col-span-7 p-6 rounded-2xl glass-card space-y-4">
            <h3 className="text-sm font-bold text-amber-500 uppercase tracking-widest mb-4">
              Stage-by-Stage Quality Verification
            </h3>

            <div className="space-y-3">
              {[
                { title: 'Material Checks', desc: 'Rigorous testing of cement, steel, plumbing, and electrical grade materials before usage.' },
                { title: 'Construction Stage Checks', desc: 'Structural foundation, slab casting, waterproofing, and brickwork milestone approvals.' },
                { title: 'Engineer Verification', desc: 'Certified structural & MEP engineers audit each phase on-site.' },
                { title: 'Progress & Photo Updates', desc: 'Transparent photo and documentation feeds for circle members.' },
                { title: 'Testing & Pre-Handover', desc: 'Pressure testing, snagging audit, and final quality sign-off before key handover.' },
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl glass-card flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-theme-heading">{item.title}</h4>
                    <p className="text-xs text-theme-muted mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY KENNIX? */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-amber-500/10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-amber-500 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            WHY KENNIX?
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-theme-heading">
            More Than Property Search
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'PROPERTY DISCOVERY', desc: 'Find suitable homes, plots and living opportunities based on your needs.', icon: Home },
            { title: 'PEOPLE & COMMUNITY', desc: 'Explore living closer to the people who matter most to you.', icon: Users },
            { title: 'COLLECTIVE REQUIREMENTS', desc: 'Bring multiple home requirements together through KENNIX Circles.', icon: HeartHandshake },
            { title: 'BETTER INFORMATION', desc: 'Understand important property and legal information before deciding.', icon: FileCheck },
            { title: 'PROJECT SUPPORT', desc: 'End-to-end planning, architectural, structural, and execution support.', icon: Compass },
            { title: 'QUALITY VISIBILITY', desc: 'Greater visibility into construction milestones for KENNIX developments.', icon: Eye },
          ].map((blk, i) => {
            const Icon = blk.icon;
            return (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-6 rounded-2xl glass-card space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-theme-heading">{blk.title}</h3>
                <p className="text-xs text-theme-body leading-relaxed">{blk.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 9. EMOTIONAL BRAND SECTION */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 text-center border-b border-amber-500/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=80" 
            alt="Family living together"
            className="w-full h-full object-cover opacity-20 filter brightness-75 blur-[1px]" 
          />
          {isDark && <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#070A09]/70 to-[#070A09]/50" />}
          {!isDark && <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAF7] via-[#F8FAF7]/80 to-[#F8FAF7]/60" />}
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
            BELONGING MATTERS
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-theme-heading">
            Because Home Is Also About Who Is Nearby.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-theme-body max-w-3xl mx-auto pt-4">
            <div className="p-4 rounded-xl glass-card">Parents a few minutes away.</div>
            <div className="p-4 rounded-xl glass-card">Children growing up with cousins.</div>
            <div className="p-4 rounded-xl glass-card">Friends becoming neighbours.</div>
            <div className="p-4 rounded-xl glass-card">Communities celebrating together.</div>
          </div>

          <div className="pt-6">
            <p className="text-2xl font-serif italic text-amber-500 max-w-2xl mx-auto">
              “Their Own Home. Their Own Space. Their Own Life.”
            </p>
            <p className="text-sm text-theme-muted mt-2 font-sans">
              KENNIX brings the right homes and the right people closer together.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 10. FINAL CALL TO ACTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-8 overflow-hidden">
        <ThreeCanvasBG density={50} variant="hero" theme={theme} className="opacity-70" />

        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-theme-heading leading-tight">
            Your Next Home Could Bring More Than a New Address. <br />
            <span className="text-gold-gradient">It Could Bring Your People Closer.</span>
          </h2>

          <p className="text-theme-body text-base max-w-2xl mx-auto">
            Whether you're searching for yourself, your family, your friends or exploring an opportunity with your community — Start with KENNIX.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setActivePage('projects')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-emerald font-bold text-xs tracking-wider uppercase border border-emerald-500/40 hover:bg-emerald-900 transition-all"
            >
              FIND MY HOME
            </button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(212,175,55,0.7)" }}
              whileTap={{ scale: 0.95 }}
              onClick={openCircleModal}
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all flex items-center justify-center space-x-2"
            >
              <Users className="w-4 h-4" />
              <span>CREATE MY CIRCLE</span>
            </motion.button>

            <button
              onClick={() => setActivePage('projects')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full glass-card text-amber-500 font-bold text-xs tracking-wider uppercase border border-amber-500/30 hover:bg-amber-400/10 transition-all"
            >
              EXPLORE PROJECTS
            </button>
          </div>

          <div className="pt-8">
            <span className="text-xs text-emerald-500 font-serif tracking-widest uppercase">
              KENNIX — Property. People. Community.
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
