import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  ChevronDown,
  Compass,
  Home,
  Menu,
  Sparkles,
  UserCheck,
  Users,
  X,
} from 'lucide-react';
import KennixLogo from './KennixLogo';

const services = [
  {
    id: 'community-development',
    title: 'Community Development',
    description: 'Places planned around people and belonging.',
    icon: Users,
  },
  {
    id: 'residential-construction',
    title: 'Residential Construction',
    description: 'Homes built around the way you want to live.',
    icon: Home,
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    description: 'Purpose-built spaces for modern businesses.',
    icon: Building2,
  },
  {
    id: 'architecture-design',
    title: 'Architecture & Structural Design',
    description: 'Ideas engineered into buildable spaces.',
    icon: Compass,
  },
  {
    id: 'interiors-smart-homes',
    title: 'Interiors & Smart Homes',
    description: 'Refined interiors and considered technology.',
    icon: Sparkles,
  },
];

export default function Navbar({ activePage, setActivePage, openCircleModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 130, damping: 28, mass: 0.2 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setActivePage(page);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navClass = (active) => (
    `relative px-3 py-2 text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors ${
      active ? 'text-[#8A681D]' : 'text-[#202420]/70 hover:text-[#111411]'
    }`
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4EC]/95 border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl'
          : 'bg-[#F7F4EC]/90 border-black/10 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-20' : 'h-24'}`}>
          <button onClick={() => navigate('home')} aria-label="KENNIX Home" className="shrink-0">
            <KennixLogo size="sm" />
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            <button onClick={() => navigate('about')} className={navClass(activePage === 'about')}>
              About
            </button>
            <button onClick={() => navigate('why-kennix')} className={navClass(activePage === 'why-kennix')}>
              Why KENNIX
            </button>
            <button onClick={() => navigate('projects')} className={navClass(activePage === 'projects')}>
              Projects
            </button>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen((open) => !open)}
                className={`${navClass(services.some(({ id }) => id === activePage))} flex items-center gap-1.5`}
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full right-0 pt-4 w-[420px]">
                  <div className="rounded-2xl border border-white/10 bg-[#0D100F]/98 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                    <div className="px-4 py-3 border-b border-white/10">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6B56C]">Our expertise</p>
                      <p className="mt-1 text-xs text-white/50">One connected development journey.</p>
                    </div>
                    <div className="py-2">
                      {services.map(({ id, title, description, icon: Icon }, index) => (
                        <button
                          key={id}
                          onClick={() => navigate(id)}
                          className="w-full flex items-start gap-3 rounded-xl px-3 py-3 text-left hover:bg-white/[0.06]"
                        >
                          <span className="mt-0.5 w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] text-[#D6B56C] flex items-center justify-center shrink-0">
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-white">
                              <span className="mr-2 text-[10px] text-white/30">0{index + 1}</span>{title}
                            </span>
                            <span className="block mt-1 text-[11px] text-white/45">{description}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => navigate('login')} className={`${navClass(activePage === 'login')} flex items-center gap-1.5`}>
              <UserCheck className="w-3.5 h-3.5" />
              Login
            </button>
          </nav>

          <div className="hidden lg:block">
            <button
              onClick={openCircleModal}
              className="group rounded-full bg-[#D6B56C] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#12130F] hover:bg-[#E4C986] inline-flex items-center gap-2 shadow-[0_8px_24px_rgba(214,181,108,0.16)]"
            >
              <Users className="w-4 h-4" />
              Create My Circle
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={openCircleModal}
              className="hidden sm:block rounded-full bg-[#D6B56C] px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-[#12130F]"
            >
              Create Circle
            </button>
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="w-10 h-10 rounded-full border border-black/15 text-[#162019] flex items-center justify-center"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-black/10 bg-[#F7F4EC] px-4 py-5 shadow-2xl">
          <div className="max-w-7xl mx-auto space-y-1">
            {[
              ['about', 'About'],
              ['why-kennix', 'Why KENNIX'],
              ['projects', 'Projects'],
              ['login', 'Login'],
            ].map(([id, label]) => (
              <button key={id} onClick={() => navigate(id)} className="w-full rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#202420]/80 hover:bg-black/5">
                {label}
              </button>
            ))}
            <div className="pt-4 mt-3 border-t border-black/10">
              <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A681D]">Services</p>
              {services.map(({ id, title }) => (
                <button key={id} onClick={() => navigate(id)} className="w-full px-3 py-2.5 text-left text-xs text-[#202420]/65">
                  {title}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-[#173F32] via-[#D6B56C] to-[#A27B26]"
        style={{ scaleX: progressScale }}
      />
    </header>
  );
}
