import React from 'react';
import KennixLogo from './KennixLogo';
import { 
  Users, 
  MapPin, 
  Phone, 
  Mail
} from 'lucide-react';

export default function Footer({ setActivePage, openCircleModal, theme }) {
  const isDark = theme !== 'light';
  
  return (
    <footer className={`text-xs border-t pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-10 transition-colors duration-300 ${
      isDark 
        ? 'bg-[#040605] text-slate-400 border-amber-500/20' 
        : 'bg-[#F0F2EF] text-slate-600 border-amber-400/20'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        
        {/* Brand Summary */}
        <div className="md:col-span-4 space-y-4">
          <div className="inline-flex rounded-xl bg-[#F7F4EC] px-3 py-2">
            <KennixLogo size="md" />
          </div>
          <p className={`leading-relaxed font-sans text-xs pt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            KENNIX connects where you live with who you want around you. Bringing property, families, friends, and communities together into thoughtfully planned residential developments.
          </p>

          <div className="pt-2">
            <button
              onClick={openCircleModal}
              className="px-5 py-2.5 rounded-full bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:bg-amber-300 transition-all flex items-center space-x-1.5 cursor-pointer"
            >
              <Users className="w-3.5 h-3.5" />
              <span>CREATE MY CIRCLE</span>
            </button>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div className="md:col-span-2 space-y-3">
          <h4 className={`font-bold font-serif text-sm tracking-wider uppercase ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>Navigation</h4>
          <ul className="space-y-2">
            <li><button onClick={() => setActivePage('home')} className={`hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors cursor-pointer`}>Home</button></li>
            <li><button onClick={() => setActivePage('about')} className={`hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors cursor-pointer`}>About Us</button></li>
            <li><button onClick={() => setActivePage('why-kennix')} className={`hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors cursor-pointer`}>Why KENNIX</button></li>
            <li><button onClick={() => setActivePage('projects')} className={`hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors cursor-pointer`}>Projects Catalog</button></li>
            <li><button onClick={() => setActivePage('packages')} className={`hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors cursor-pointer`}>Construction Packages</button></li>
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3 space-y-3">
          <h4 className={`font-bold font-serif text-sm tracking-wider uppercase ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>Our Services</h4>
          <ul className="space-y-2">
            <li><button onClick={() => setActivePage('community-development')} className="hover:text-amber-300 text-emerald-400 transition-colors font-medium cursor-pointer">01. Community Development</button></li>
            <li><button onClick={() => setActivePage('residential-construction')} className={`hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors cursor-pointer`}>02. Residential Construction</button></li>
            <li><button onClick={() => setActivePage('commercial-construction')} className={`hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors cursor-pointer`}>03. Commercial Construction</button></li>
            <li><button onClick={() => setActivePage('architecture-design')} className={`hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors cursor-pointer`}>04. Architecture & Structural Design</button></li>
            <li><button onClick={() => setActivePage('interiors-smart-homes')} className={`hover:${isDark ? 'text-white' : 'text-slate-900'} transition-colors cursor-pointer`}>05. Interiors & Smart Homes</button></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-3 space-y-3">
          <h4 className={`font-bold font-serif text-sm tracking-wider uppercase ${isDark ? 'text-amber-400' : 'text-amber-700'}`}>Headquarters & Reach</h4>
          <ul className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>KENNIX Towers, Suite 800, Financial District, Metro Region</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>+91 1800-536-649 (1800-KENNIX)</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>connect@kennix.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className={`max-w-7xl mx-auto pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-[11px] gap-4 ${
        isDark ? 'border-slate-900 text-slate-500' : 'border-slate-300 text-slate-500'
      }`}>
        <div>
          © {new Date().getFullYear()} KENNIX Real Estate & Development Technologies. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
          <span>•</span>
          <span className="hover:text-slate-400 cursor-pointer">RERA Compliance</span>
        </div>
      </div>
    </footer>
  );
}
