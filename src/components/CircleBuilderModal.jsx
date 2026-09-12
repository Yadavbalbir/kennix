import React, { useState } from 'react';
import { 
  X, 
  Users, 
  HeartHandshake, 
  MapPin, 
  Home, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Building,
  Trees,
  PartyPopper
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CircleBuilderModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [circleType, setCircleType] = useState('family');
  const [homeCount, setHomeCount] = useState(6);
  const [location, setLocation] = useState('Green Valley Suburbs');
  const [budget, setBudget] = useState('₹75 L - ₹1.5 Cr per home');
  const [amenities, setAmenities] = useState(['Clubhouse', 'Children Area', 'Senior Space', 'Security']);
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const circleTypes = [
    {
      id: 'family',
      title: 'Family Circle',
      desc: 'Parents, siblings, and extended family who want independent homes while living closer.',
      icon: HeartHandshake,
      tag: 'Family Connection',
    },
    {
      id: 'friends',
      title: 'Friends Circle',
      desc: 'Closest friends wanting their own individual homes inside the same planned development.',
      icon: Users,
      tag: 'Friends as Neighbors',
    },
    {
      id: 'community',
      title: 'Community Circle',
      desc: 'Cultural, social, or community networks seeking to build a dedicated place together.',
      icon: Home,
      tag: 'Cultural & Social',
    },
    {
      id: 'shared-interest',
      title: 'Shared-Interest Circle',
      desc: 'Common lifestyle, profession, age group or vision for modern shared living.',
      icon: Sparkles,
      tag: 'Shared Lifestyle',
    },
  ];

  const amenityOptions = [
    'Clubhouse & Lounge',
    'Children Area',
    'Senior-Friendly Spaces',
    'Garden & Yoga Park',
    '24/7 Gated Security',
    'Community Hall',
    'Sports & Gym Hub',
    'Co-working Space',
  ];

  const toggleAmenity = (item) => {
    if (amenities.includes(item)) {
      setAmenities(amenities.filter(a => a !== item));
    } else {
      setAmenities([...amenities, item]);
    }
  };

  const handleNextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Fire festive gold & emerald confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#10B981', '#F5E086', '#05251C'],
    });
  };

  const resetModal = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl glass-card rounded-2xl border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-amber-500/20 bg-emerald-950/40 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-serif text-white tracking-wide">
                CREATE YOUR KENNIX CIRCLE
              </h2>
              <p className="text-xs text-amber-300/80 font-sans">
                Together when you want. Independent when you need.
              </p>
            </div>
          </div>
          <button 
            onClick={resetModal} 
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {!submitted && (
          <div className="bg-emerald-950/20 px-6 py-3 border-b border-emerald-900/30 flex items-center justify-between">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className="flex items-center space-x-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === s 
                    ? 'bg-amber-400 text-slate-950 shadow-[0_0_12px_rgba(212,175,55,0.8)] scale-110' 
                    : step > s 
                    ? 'bg-emerald-500 text-slate-950' 
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                </div>
                <span className={`text-xs hidden sm:inline font-medium ${step === s ? 'text-amber-300' : 'text-slate-400'}`}>
                  {s === 1 && 'Circle Type'}
                  {s === 2 && 'Homes & Location'}
                  {s === 3 && 'Amenities'}
                  {s === 4 && 'Feasibility & Submit'}
                </span>
                {s < 4 && <div className="w-8 h-[1px] bg-slate-800 hidden sm:block" />}
              </div>
            ))}
          </div>
        )}

        {/* Modal Body Content */}
        <div className="p-6 overflow-y-auto flex-1 text-slate-200">
          
          {submitted ? (
            /* Success View */
            <div className="text-center py-10 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white">
                Your Circle Proposal Initiated!
              </h3>
              <p className="max-w-lg mx-auto text-sm text-slate-300 leading-relaxed">
                Thank you, <strong className="text-amber-300">{contactInfo.name || 'Friend'}</strong>! We have recorded your combined requirement of <strong className="text-emerald-400">{homeCount} homes</strong> for your <span className="capitalize text-amber-300">{circleType} Circle</span> in <span className="text-white font-medium">{location}</span>.
              </p>
              
              <div className="max-w-md mx-auto p-4 rounded-xl glass-emerald text-left text-xs space-y-2 border border-emerald-500/40">
                <div className="text-amber-300 font-semibold uppercase tracking-wider text-[11px]">
                  Estimated Circle Advantage:
                </div>
                <p className="text-slate-200">
                  • Combined Feasibility Potential: <strong className="text-emerald-300">High Match</strong>
                </p>
                <p className="text-slate-200">
                  • Collective Savings & Shared Amenities Optimization: <strong className="text-emerald-300">Up to 14% Value Uplift</strong>
                </p>
                <p className="text-slate-300 pt-1 border-t border-emerald-800/50">
                  A KENNIX Community Specialist will connect with you within 24 hours to present initial land & project feasibility options.
                </p>
              </div>

              <button
                onClick={resetModal}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-lg hover:brightness-110 transition-all"
              >
                BACK TO KENNIX
              </button>
            </div>
          ) : (
            <>
              {/* STEP 1: Circle Type Selection */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="text-center max-w-xl mx-auto mb-4">
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Who Would You Like to Live Closer To?
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Choose the circle structure that best represents your vision for living together.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {circleTypes.map((type) => {
                      const Icon = type.icon;
                      const isSelected = circleType === type.id;
                      return (
                        <div
                          key={type.id}
                          onClick={() => setCircleType(type.id)}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            isSelected 
                              ? 'glass-gold border-amber-400 shadow-[0_0_20px_rgba(212,175,55,0.25)] ring-1 ring-amber-400' 
                              : 'bg-emerald-950/20 border-emerald-900/40 hover:border-amber-500/40 hover:bg-emerald-950/40'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className={`p-2.5 rounded-lg ${isSelected ? 'bg-amber-400 text-slate-950' : 'bg-emerald-900/60 text-emerald-300'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                              {type.tag}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-white mt-3 font-serif">
                            {type.title}
                          </h4>
                          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                            {type.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Home Count & Location */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="text-center max-w-xl mx-auto">
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Circle Size & Location Preferences
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Tell us how many homes your group needs and where you'd love to live.
                    </p>
                  </div>

                  {/* Home Count Slider */}
                  <div className="glass-emerald p-5 rounded-xl border border-emerald-500/30 space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-amber-300 flex items-center space-x-2">
                        <Home className="w-4 h-4" />
                        <span>Estimated Number of Homes in Circle:</span>
                      </label>
                      <span className="text-2xl font-bold font-serif text-white bg-amber-500/20 border border-amber-400/40 px-4 py-1 rounded-lg">
                        {homeCount} Homes
                      </span>
                    </div>

                    <input 
                      type="range" 
                      min="2" 
                      max="30" 
                      value={homeCount} 
                      onChange={(e) => setHomeCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
                    />
                    
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                      <span>2 Homes (Parents + You)</span>
                      <span>10 Homes (Friends Group)</span>
                      <span>30 Homes (Community Hub)</span>
                    </div>
                  </div>

                  {/* Location & Budget Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
                        <MapPin className="w-4 h-4 text-amber-400" />
                        <span>Preferred Location / Region:</span>
                      </label>
                      <input 
                        type="text" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. North Suburbs, Tech Hub Sector 4, Riverside"
                        className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center space-x-1.5">
                        <Building className="w-4 h-4 text-emerald-400" />
                        <span>Budget Target Per Unit:</span>
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        <option>₹50 L - ₹75 L per home</option>
                        <option>₹75 L - ₹1.5 Cr per home</option>
                        <option>₹1.5 Cr - ₹3 Cr per home</option>
                        <option>₹3 Cr+ Luxury Estate</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Shared Amenities */}
              {step === 3 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="text-center max-w-xl mx-auto">
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Collective Community Spaces & Amenities
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      What amenities would your circle like to share while maintaining individual privacy?
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {amenityOptions.map(opt => {
                      const isSelected = amenities.includes(opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleAmenity(opt)}
                          className={`p-3 rounded-xl text-left border text-xs font-medium transition-all flex flex-col justify-between h-24 ${
                            isSelected 
                              ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-md' 
                              : 'bg-emerald-950/30 border-emerald-900/50 text-slate-400 hover:border-emerald-700'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <Sparkles className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'bg-amber-400 border-amber-400 text-slate-950' : 'border-slate-600'}`}>
                              {isSelected && <CheckCircle2 className="w-3 h-3" />}
                            </div>
                          </div>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: Feasibility & Contact Submission */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in duration-200">
                  <div className="text-center max-w-xl mx-auto">
                    <h3 className="text-2xl font-serif font-bold text-white">
                      Complete Your KENNIX Circle Request
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Our community planning team will analyze land availability and project feasibility for your group.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl glass-gold border border-amber-400/40 text-xs space-y-2">
                    <div className="font-bold text-amber-300 uppercase tracking-widest text-[11px] flex justify-between">
                      <span>Circle Summary</span>
                      <span className="text-emerald-400">{homeCount} Homes Required</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-300">
                      <div>• Type: <span className="text-white capitalize">{circleType} Circle</span></div>
                      <div>• Location: <span className="text-white">{location}</span></div>
                      <div>• Budget: <span className="text-white">{budget}</span></div>
                      <div>• Shared Amenities: <span className="text-white">{amenities.length} Selected</span></div>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Your Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={contactInfo.name}
                        onChange={e => setContactInfo({...contactInfo, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Phone Number *</label>
                      <input 
                        type="tel"
                        required
                        value={contactInfo.phone}
                        onChange={e => setContactInfo({...contactInfo, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Email Address *</label>
                      <input 
                        type="email"
                        required
                        value={contactInfo.email}
                        onChange={e => setContactInfo({...contactInfo, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 mb-1">Any Specific Requirements or Notes for KENNIX?</label>
                    <textarea 
                      rows="2"
                      value={contactInfo.notes}
                      onChange={e => setContactInfo({...contactInfo, notes: e.target.value})}
                      placeholder="e.g., We need 2 elder-friendly ground floor units and a central courtyard..."
                      className="w-full bg-emerald-950/60 border border-emerald-800/60 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.6)] hover:brightness-110 transition-all flex items-center justify-center space-x-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    <span>SUBMIT KENNIX CIRCLE PROPOSAL</span>
                  </button>
                </form>
              )}
            </>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!submitted && (
          <div className="p-4 border-t border-amber-500/20 bg-emerald-950/50 flex justify-between items-center">
            <button
              onClick={handlePrevStep}
              disabled={step === 1}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1 transition-colors ${
                step === 1 ? 'opacity-30 cursor-not-allowed text-slate-500' : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>PREVIOUS</span>
            </button>

            <span className="text-xs text-amber-300/60 font-mono">
              Step {step} of 4
            </span>

            {step < 4 && (
              <button
                onClick={handleNextStep}
                className="px-6 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase flex items-center space-x-1.5 shadow-md hover:bg-amber-300 transition-colors"
              >
                <span>NEXT STEP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
