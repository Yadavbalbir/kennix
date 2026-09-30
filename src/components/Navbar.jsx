import React, { useState, useEffect } from 'react';
import KennixLogo from './KennixLogo';
import { 
  ChevronDown, 
  Users, 
  Home, 
  Building2, 
  Compass, 
  Sparkles, 
  Menu, 
  X, 
  UserCheck, 
  ArrowRight,
  Sun,
  Moon
} from 'lucide-react';

export default function Navbar({ activePage, setActivePage, openCircleModal, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesList = [
    {
      id: 'community-development',
      title: '01. Community Development',
      subtitle: 'Building communities around people.',
      flow: 'People → Requirements → Community',
      icon: Users,
      badge: 'Signature Concept',
    },
    {
      id: 'residential-construction',
      title: '02. Residential Construction',
      subtitle: 'Homes built around the way you want to live.',
      flow: 'Plan → Build → Handover',
      icon: Home,
    },
    {
      id: 'commercial-construction',
      title: '03. Commercial Construction',
      subtitle: 'Purpose-built spaces for business.',
      flow: 'Functional spaces built for business',
      icon: Building2,
    },
    {
      id: 'architecture-design',
      title: '04. Architecture & Structural Design',
      subtitle: 'Ideas engineered into buildable spaces.',
      flow: 'Design → Engineering → Drawings',
      icon: Compass,
    },
    {
      id: 'interiors-smart-homes',
      title: '05. Interiors & Smart Homes',
      subtitle: 'Thoughtful interiors. Smarter living.',
      flow: 'Interiors → Technology → Living',
      icon: Sparkles,
    },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  // When at top: fully transparent to let hero bg shine through
  // When scrolled: glassmorphic blur effect
  const headerClasses = isScrolled
    ? isDark 
      ? 'bg-[#070A09]/85 backdrop-blur-xl border-b border-amber-500/15 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.7)]' 
      : 'bg-white/85 backdrop-blur-xl border-b border-amber-400/20 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
    : 'bg-transparent py-4 border-none shadow-none';

  // Text colors: when at top (over hero image), always use light text 
  // When scrolled, adapt to theme
  const getNavTextClass = (isActive) => {
    if (isActive) return 'text-amber-400 font-extrabold';
    if (!isScrolled) return 'text-white/90 hover:text-amber-300';
    return isDark ? 'text-slate-200 hover:text-amber-300' : 'text-slate-700 hover:text-amber-600';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="text-left focus:outline-none"
            aria-label="KENNIX Home"
          >
            <KennixLogo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* ABOUT */}
            <button
              onClick={() => handleNavClick('about')}
              className={`order-1 px-3.5 py-2 text-xs font-bold tracking-wider uppercase rounded-md transition-colors duration-200 ${getNavTextClass(activePage === 'about')}`}
            >
              ABOUT
            </button>

            {/* SERVICES Mega-Dropdown */}
            <div 
              className="relative order-4"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`px-3.5 py-2 text-xs font-bold tracking-wider uppercase rounded-md transition-colors duration-200 flex items-center space-x-1 ${getNavTextClass(servicesList.some(({ id }) => id === activePage) || servicesOpen)}`}
              >
                <span>SERVICES</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesOpen && (
                <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                  isDark 
                    ? 'bg-[#0B1612]/95 backdrop-blur-2xl border border-amber-500/25' 
                    : 'bg-white/95 backdrop-blur-2xl border border-amber-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
                }`}
                  style={{ animation: 'fadeInDown 0.2s ease-out' }}
                >
                  <div className={`text-xs uppercase font-semibold tracking-widest px-3 py-1 mb-2 flex items-center justify-between border-b pb-2 ${
                    isDark ? 'text-amber-400 border-amber-500/20' : 'text-amber-700 border-amber-400/20'
                  }`}>
                    <span>What We Build. How We Bring It Together.</span>
                    <span className="text-[10px] text-emerald-400">5 Services</span>
                  </div>

                  <div className="space-y-1">
                    {servicesList.map((svc) => {
                      const Icon = svc.icon;
                      return (
                        <button
                          key={svc.id}
                          onClick={() => handleNavClick(svc.id)}
                          className={`w-full text-left p-2.5 rounded-lg border border-transparent transition-all group flex items-start space-x-3 ${
                            isDark ? 'hover:bg-emerald-950/40 hover:border-emerald-500/30' : 'hover:bg-emerald-50 hover:border-emerald-300'
                          }`}
                        >
                          <div className="p-2 rounded-lg bg-emerald-900/30 text-emerald-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className={`text-sm font-semibold group-hover:text-amber-400 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {svc.title}
                              </span>
                              {svc.badge && (
                                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full font-medium">
                                  {svc.badge}
                                </span>
                              )}
                            </div>
                            <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              {svc.subtitle}
                            </p>
                            <div className="text-[11px] text-emerald-400 font-mono mt-1">
                              {svc.flow}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* WHY KENNIX */}
            <button
              onClick={() => handleNavClick('why-kennix')}
              className={`order-2 px-3.5 py-2 text-xs font-bold tracking-wider uppercase rounded-md transition-colors duration-200 ${getNavTextClass(activePage === 'why-kennix')}`}
            >
              WHY KENNIX
            </button>

            {/* PROJECTS */}
            <button
              onClick={() => handleNavClick('projects')}
              className={`order-3 px-3.5 py-2 text-xs font-bold tracking-wider uppercase rounded-md transition-colors duration-200 ${getNavTextClass(activePage === 'projects')}`}
            >
              PROJECTS
            </button>

            {/* LOGIN */}
            <button
              onClick={() => handleNavClick('login')}
              className={`order-5 px-3.5 py-2 text-xs font-bold tracking-wider uppercase rounded-md transition-colors duration-200 flex items-center space-x-1 ${getNavTextClass(activePage === 'login')}`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>LOGIN</span>
            </button>

          </nav>

          {/* Controls: Theme Switcher & CREATE MY CIRCLE CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                !isScrolled
                  ? 'bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20'
                  : isDark 
                    ? 'bg-slate-900/80 border-amber-500/40 text-amber-400 hover:bg-slate-800' 
                    : 'bg-white/80 border-amber-500/40 text-amber-700 hover:bg-amber-100'
              }`}
              title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Highlighted CTA: CREATE MY CIRCLE */}
            <button
              onClick={openCircleModal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full font-semibold text-xs tracking-wider uppercase bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:shadow-[0_0_35px_rgba(212,175,55,0.8)] transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10 flex items-center space-x-1.5">
                <Users className="w-4 h-4" />
                <span>CREATE MY CIRCLE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

          </div>

          {/* Mobile Drawer & Theme Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border cursor-pointer ${
                !isScrolled
                  ? 'bg-white/10 border-white/20 text-white'
                  : isDark ? 'bg-slate-900 border-amber-500/40 text-amber-400' : 'bg-white border-amber-400 text-amber-700'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <button
              onClick={openCircleModal}
              className="px-3 py-1.5 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950 tracking-wider uppercase cursor-pointer"
            >
              CIRCLE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 focus:outline-none cursor-pointer ${!isScrolled ? 'text-white' : isDark ? 'text-white' : 'text-slate-900'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden mt-3 border-t p-5 space-y-4 ${
          isDark 
            ? 'bg-[#0B1612]/95 backdrop-blur-2xl border-amber-500/20' 
            : 'bg-white/95 backdrop-blur-2xl border-amber-400/20'
        }`}
          style={{ animation: 'fadeInDown 0.3s ease-out' }}
        >
          <div className="flex flex-col space-y-2">
            <button onClick={() => handleNavClick('about')} className={`text-left px-3 py-2 text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>ABOUT</button>
            <button onClick={() => handleNavClick('why-kennix')} className={`text-left px-3 py-2 text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>WHY KENNIX</button>
            <button onClick={() => handleNavClick('projects')} className={`text-left px-3 py-2 text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>PROJECTS</button>

            <div className={`pt-2 border-t ${isDark ? 'border-amber-500/20' : 'border-amber-400/20'}`}>
              <span className={`text-xs uppercase font-bold px-3 tracking-widest ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>SERVICES</span>
              <div className="mt-2 space-y-1 pl-2">
                {servicesList.map(svc => (
                  <button key={svc.id} onClick={() => handleNavClick(svc.id)} className={`w-full text-left px-3 py-2 text-xs font-medium flex items-center space-x-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <ArrowRight className="w-3 h-3 text-emerald-400" />
                    <span>{svc.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={() => handleNavClick('login')} className={`text-left px-3 py-2 text-sm font-semibold flex items-center space-x-2 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>LOGIN / DASHBOARD</span>
            </button>
          </div>

          <div className={`pt-3 border-t ${isDark ? 'border-amber-500/20' : 'border-amber-400/20'}`}>
            <button
              onClick={() => { setMobileMenuOpen(false); openCircleModal(); }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-lg cursor-pointer"
            >
              CREATE MY CIRCLE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
