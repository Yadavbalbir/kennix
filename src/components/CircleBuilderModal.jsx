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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(16,39,31,0.08),rgba(6,13,10,0.58))] p-3 backdrop-blur-[2px] animate-in fade-in duration-200 sm:p-6">
      <div className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] border border-[#D8C9A8] bg-[#FAF7F0] text-[#10271F] shadow-[0_32px_100px_rgba(4,17,12,0.38)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#153D30] px-5 py-5 sm:px-7">
          <div className="flex items-center space-x-3">
            <div className="rounded-xl bg-[#D4AF57] p-2.5 text-[#10271F]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold tracking-wide text-white sm:text-xl">
                CREATE YOUR KENNIX CIRCLE
              </h2>
              <p className="mt-0.5 text-xs text-[#E7D29A]">
                Together when you want. Independent when you need.
              </p>
            </div>
          </div>
          <button 
            onClick={resetModal} 
            className="rounded-full border border-white/15 p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close Circle Builder"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {!submitted && (
          <div className="flex items-center justify-between border-b border-[#DED4C1] bg-[#F1EBDD] px-4 py-3 sm:px-7">
            {[1, 2, 3, 4].map(s => (
              <div key={s} className="flex items-center space-x-2">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  step === s 
                    ? 'bg-[#153D30] text-white shadow-[0_6px_16px_rgba(21,61,48,0.2)] scale-110'
                    : step > s 
                    ? 'bg-[#C99D45] text-[#10271F]'
                    : 'bg-[#D9D2C5] text-[#66736D]'
                }`}>
                  {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                </div>
                <span className={`hidden text-xs font-semibold sm:inline ${step === s ? 'text-[#153D30]' : 'text-[#7A837F]'}`}>
                  {s === 1 && 'Circle Type'}
                  {s === 2 && 'Homes & Location'}
                  {s === 3 && 'Amenities'}
                  {s === 4 && 'Feasibility & Submit'}
                </span>
                {s < 4 && <div className="hidden h-px w-8 bg-[#C7BEAC] sm:block" />}
              </div>
            ))}
          </div>
        )}

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto bg-[#FAF7F0] p-5 text-[#10271F] sm:p-7">
          
          {submitted ? (
            /* Success View */
            <div className="text-center py-10 space-y-6">
              <div className="mx-auto flex h-20 w-20 animate-bounce items-center justify-center rounded-full border-2 border-[#3C735D] bg-[#E4EFE8] text-[#2F6B54]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#10271F]">
                Your Circle Proposal Initiated!
              </h3>
              <p className="mx-auto max-w-lg text-sm leading-relaxed text-[#56645E]">
                Thank you, <strong className="text-[#8A641C]">{contactInfo.name || 'Friend'}</strong>! We have recorded your combined requirement of <strong className="text-[#2F6B54]">{homeCount} homes</strong> for your <span className="capitalize text-[#8A641C]">{circleType} Circle</span> in <span className="font-medium text-[#10271F]">{location}</span>.
              </p>
              
              <div className="mx-auto max-w-md space-y-2 rounded-2xl border border-[#C9D9D0] bg-[#ECF3EF] p-5 text-left text-xs">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A641C]">
                  Estimated Circle Advantage:
                </div>
                <p className="text-[#45574F]">
                  • Combined Feasibility Potential: <strong className="text-[#2F6B54]">High Match</strong>
                </p>
                <p className="text-[#45574F]">
                  • Collective Savings & Shared Amenities Optimization: <strong className="text-[#2F6B54]">Up to 14% Value Uplift</strong>
                </p>
                <p className="border-t border-[#C9D9D0] pt-2 text-[#56645E]">
                  A KENNIX Community Specialist will connect with you within 24 hours to present initial land & project feasibility options.
                </p>
              </div>

              <button
                onClick={resetModal}
                className="rounded-full bg-[#153D30] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#205442]"
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
                    <h3 className="font-serif text-2xl font-bold text-[#10271F]">
                      Who Would You Like to Live Closer To?
                    </h3>
                    <p className="mt-1 text-xs text-[#6D7873]">
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
                          className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                            isSelected 
                              ? 'border-[#C99D45] bg-[#FFF4D6] shadow-[0_10px_24px_rgba(142,102,26,0.12)] ring-1 ring-[#C99D45]'
                              : 'border-[#D7D2C7] bg-white hover:border-[#9EAC9F] hover:bg-[#F5F7F3]'
                          }`}
                        >
                          <div className="flex items-start justify-between">
                            <div className={`rounded-lg p-2.5 ${isSelected ? 'bg-[#C99D45] text-[#10271F]' : 'bg-[#DDE9E2] text-[#2F6B54]'}`}>
                              <Icon className="w-5 h-5" />
                            </div>
                            <span className="rounded-full border border-[#D8BD7C] bg-[#FFF8E7] px-2 py-0.5 text-[10px] font-bold uppercase text-[#8A641C]">
                              {type.tag}
                            </span>
                          </div>
                          <h4 className="mt-3 font-serif text-base font-bold text-[#10271F]">
                            {type.title}
                          </h4>
                          <p className="mt-1 text-xs leading-relaxed text-[#68736E]">
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
                    <h3 className="font-serif text-2xl font-bold text-[#10271F]">
                      Circle Size & Location Preferences
                    </h3>
                    <p className="mt-1 text-xs text-[#6D7873]">
                      Tell us how many homes your group needs and where you'd love to live.
                    </p>
                  </div>

                  {/* Home Count Slider */}
                  <div className="space-y-4 rounded-2xl border border-[#CDDCD3] bg-[#EDF4F0] p-5">
                    <div className="flex justify-between items-center">
                      <label className="flex items-center space-x-2 text-sm font-semibold text-[#1F5743]">
                        <Home className="w-4 h-4" />
                        <span>Estimated Number of Homes in Circle:</span>
                      </label>
                      <span className="rounded-lg border border-[#D8BD7C] bg-[#FFF5D8] px-4 py-1 font-serif text-2xl font-bold text-[#8A641C]">
                        {homeCount} Homes
                      </span>
                    </div>

                    <input 
                      type="range" 
                      min="2" 
                      max="30" 
                      value={homeCount} 
                      onChange={(e) => setHomeCount(parseInt(e.target.value))}
                      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#BFCFC6] accent-[#B88932]"
                    />
                    
                    <div className="flex justify-between font-mono text-[11px] text-[#78827D]">
                      <span>2 Homes (Parents + You)</span>
                      <span>10 Homes (Friends Group)</span>
                      <span>30 Homes (Community Hub)</span>
                    </div>
                  </div>

                  {/* Location & Budget Inputs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1.5 flex items-center space-x-1.5 text-xs font-semibold text-[#45574F]">
                        <MapPin className="h-4 w-4 text-[#A77B26]" />
                        <span>Preferred Location / Region:</span>
                      </label>
                      <input 
                        type="text" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. North Suburbs, Tech Hub Sector 4, Riverside"
                        className="w-full rounded-xl border border-[#CEC8BC] bg-white px-4 py-2.5 text-sm text-[#10271F] outline-none placeholder:text-[#A3AAA6] focus:border-[#A77B26] focus:ring-2 focus:ring-[#D4AF57]/20"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 flex items-center space-x-1.5 text-xs font-semibold text-[#45574F]">
                        <Building className="h-4 w-4 text-[#2F6B54]" />
                        <span>Budget Target Per Unit:</span>
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full rounded-xl border border-[#CEC8BC] bg-white px-4 py-2.5 text-sm text-[#10271F] outline-none focus:border-[#A77B26] focus:ring-2 focus:ring-[#D4AF57]/20"
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
                    <h3 className="font-serif text-2xl font-bold text-[#10271F]">
                      Collective Community Spaces & Amenities
                    </h3>
                    <p className="mt-1 text-xs text-[#6D7873]">
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
                              ? 'border-[#C99D45] bg-[#FFF4D6] text-[#6E5018] shadow-md'
                              : 'border-[#D7D2C7] bg-white text-[#68736E] hover:border-[#92A89C]'
                          }`}
                        >
                          <div className="flex justify-between items-center w-full">
                            <Sparkles className={`h-4 w-4 ${isSelected ? 'text-[#A77B26]' : 'text-[#86908B]'}`} />
                            <div className={`flex h-4 w-4 items-center justify-center rounded-full border ${isSelected ? 'border-[#C99D45] bg-[#C99D45] text-[#10271F]' : 'border-[#9DA6A1]'}`}>
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
                    <h3 className="font-serif text-2xl font-bold text-[#10271F]">
                      Complete Your KENNIX Circle Request
                    </h3>
                    <p className="mt-1 text-xs text-[#6D7873]">
                      Our community planning team will analyze land availability and project feasibility for your group.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="space-y-2 rounded-2xl border border-[#D8BD7C] bg-[#FFF4D6] p-4 text-xs">
                    <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-[#8A641C]">
                      <span>Circle Summary</span>
                      <span className="text-[#2F6B54]">{homeCount} Homes Required</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[#68736E]">
                      <div>• Type: <span className="capitalize text-[#10271F]">{circleType} Circle</span></div>
                      <div>• Location: <span className="text-[#10271F]">{location}</span></div>
                      <div>• Budget: <span className="text-[#10271F]">{budget}</span></div>
                      <div>• Shared Amenities: <span className="text-[#10271F]">{amenities.length} Selected</span></div>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold text-[#45574F]">Your Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={contactInfo.name}
                        onChange={e => setContactInfo({...contactInfo, name: e.target.value})}
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-[#CEC8BC] bg-white px-3 py-2 text-sm text-[#10271F] outline-none placeholder:text-[#A3AAA6] focus:border-[#A77B26]"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold text-[#45574F]">Phone Number *</label>
                      <input 
                        type="tel"
                        required
                        value={contactInfo.phone}
                        onChange={e => setContactInfo({...contactInfo, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-[#CEC8BC] bg-white px-3 py-2 text-sm text-[#10271F] outline-none placeholder:text-[#A3AAA6] focus:border-[#A77B26]"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-[11px] font-semibold text-[#45574F]">Email Address *</label>
                      <input 
                        type="email"
                        required
                        value={contactInfo.email}
                        onChange={e => setContactInfo({...contactInfo, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-[#CEC8BC] bg-white px-3 py-2 text-sm text-[#10271F] outline-none placeholder:text-[#A3AAA6] focus:border-[#A77B26]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-[11px] font-semibold text-[#45574F]">Any Specific Requirements or Notes for KENNIX?</label>
                    <textarea 
                      rows="2"
                      value={contactInfo.notes}
                      onChange={e => setContactInfo({...contactInfo, notes: e.target.value})}
                      placeholder="e.g., We need 2 elder-friendly ground floor units and a central courtyard..."
                      className="w-full rounded-xl border border-[#CEC8BC] bg-white px-3 py-2 text-sm text-[#10271F] outline-none placeholder:text-[#A3AAA6] focus:border-[#A77B26]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center space-x-2 rounded-xl bg-[#153D30] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_10px_24px_rgba(21,61,48,0.2)] transition-all hover:bg-[#205442]"
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
          <div className="flex items-center justify-between border-t border-[#DED4C1] bg-[#F1EBDD] px-5 py-4 sm:px-7">
            <button
              onClick={handlePrevStep}
              disabled={step === 1}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1 transition-colors ${
                step === 1 ? 'cursor-not-allowed text-[#9EA5A1] opacity-45' : 'text-[#45574F] hover:bg-white hover:text-[#10271F]'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>PREVIOUS</span>
            </button>

            <span className="font-mono text-xs text-[#8A641C]">
              Step {step} of 4
            </span>

            {step < 4 && (
              <button
                onClick={handleNextStep}
                className="flex items-center space-x-1.5 rounded-full bg-[#153D30] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#205442]"
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
