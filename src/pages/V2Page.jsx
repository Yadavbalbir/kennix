import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  Compass,
  Home,
  Layers3,
  MapPin,
  Menu,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  Users,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';
import KennixLogo from '../components/KennixLogo';
import { contractorProjects } from '../data/contractorProjects';

const services = [
  { number: '01', title: 'Community Development', text: 'Places planned around relationships, shared needs and belonging.', icon: Users, featured: true },
  { number: '02', title: 'Residential Construction', text: 'Homes shaped around how each family actually wants to live.', icon: Home },
  { number: '03', title: 'Commercial Construction', text: 'Purpose-built spaces with function, flow and long-term value.', icon: Building2 },
  { number: '04', title: 'Architecture & Engineering', text: 'Design ambition resolved with structural clarity.', icon: Compass },
  { number: '05', title: 'Interiors & Smart Homes', text: 'Considered interiors and technology that quietly works.', icon: Sparkles },
];

const steps = [
  ['Tell us who', 'Your family, friends or community.'],
  ['Define the need', 'Homes, location, budget and shared priorities.'],
  ['Explore together', 'We identify and evaluate the right opportunity.'],
  ['Build with clarity', 'One connected, visible development journey.'],
];

const reveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
};

export default function V2Page({ openCircleModal }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroPlaying, setHeroPlaying] = useState(true);
  const [heroMuted, setHeroMuted] = useState(true);
  const heroVideoRef = useRef(null);

  const coordinateMedia = (active) => {
    document.querySelectorAll('video, audio').forEach((media) => {
      if (media !== active && !media.paused) media.pause();
    });
    if (active !== heroVideoRef.current && heroVideoRef.current) {
      heroVideoRef.current.muted = true;
      setHeroMuted(true);
    }
  };

  const toggleHeroPlayback = () => {
    const video = heroVideoRef.current;
    if (!video) return;
    if (video.paused) video.play();
    else video.pause();
  };

  const toggleHeroSound = () => {
    const video = heroVideoRef.current;
    if (!video) return;
    const nextMuted = !heroMuted;
    if (!nextMuted) coordinateMedia(video);
    video.muted = nextMuted;
    setHeroMuted(nextMuted);
    if (video.paused) video.play();
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#F4EFE5] text-[#10271F] selection:bg-[#C89C45] selection:text-[#10271F]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#173F32]/10 bg-[#F4EFE5]">
        <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="KENNIX V2 home">
            <KennixLogo size="sm" />
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {[
              ['philosophy', 'Our idea'],
              ['circle', 'The Circle'],
              ['services', 'Expertise'],
              ['projects', 'Projects'],
              ['packages', 'Packages'],
              ['quality', 'Quality'],
            ].map(([id, label]) => (
              <a key={id} href={id === 'packages' ? '/?page=packages' : `#${id}`} className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#31453D] hover:text-[#9A7427]">
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="/?portal=login" className="inline-flex items-center gap-2 rounded-full border border-[#173F32]/15 bg-white/35 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.13em] text-[#31453D] hover:bg-white/70">
              <ShieldCheck className="h-3.5 w-3.5" /> Client Portal
            </a>
            <button onClick={openCircleModal} className="inline-flex items-center gap-2 rounded-full bg-[#153D30] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_30px_rgba(21,61,48,0.16)] hover:bg-[#205442]">
              Start a Circle <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#173F32]/15 lg:hidden" aria-label="Toggle V2 navigation">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-[#173F32]/10 bg-[#F4EFE5] px-6 py-5 lg:hidden">
            {['philosophy', 'circle', 'services', 'projects', 'packages', 'quality'].map((id) => (
              <a key={id} href={id === 'packages' ? '/?page=packages' : `#${id}`} onClick={() => setMenuOpen(false)} className="block border-b border-[#173F32]/8 py-3 text-sm font-semibold capitalize">{id}</a>
            ))}
            <a href="/?portal=login" className="mt-3 flex items-center gap-2 rounded-xl border border-[#173F32]/12 bg-white/50 px-3 py-3 text-sm font-semibold">
              <ShieldCheck className="h-4 w-4" /> Client Portal
            </a>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="relative min-h-screen px-5 pb-16 pt-32 sm:px-8 lg:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_20%,rgba(212,175,87,0.14),transparent_30%),radial-gradient(circle_at_94%_82%,rgba(79,122,104,0.1),transparent_28%)]" />
          <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] items-center gap-12 lg:grid-cols-12">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="lg:col-span-6">
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#B88A31]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#87651F]">Property, reimagined around people</span>
              </div>
              <h1 className="max-w-3xl font-serif text-6xl font-bold leading-[0.88] tracking-[-0.04em] sm:text-7xl lg:text-[7.3rem]">
                Home is
                <span className="block italic text-[#A77B26]">who is near.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-[#43564F] sm:text-lg">
                KENNIX connects the right homes with the people you want around you—without giving up privacy, independence or choice.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <button onClick={openCircleModal} className="group rounded-full bg-[#153D30] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_35px_rgba(21,61,48,0.2)] hover:-translate-y-1">
                  Create your Circle <ArrowRight className="ml-2 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a href="#projects" className="rounded-full border border-[#173F32]/20 bg-white/70 px-7 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] hover:bg-white">Explore projects</a>
              </div>
              <div className="mt-14 grid max-w-xl grid-cols-3 border-y border-[#173F32]/12 py-5">
                {[['One', 'connected journey'], ['Visible', 'quality checks'], ['Built', 'around people']].map(([top, bottom]) => (
                  <div key={top} className="border-r border-[#173F32]/12 px-4 first:pl-0 last:border-0">
                    <p className="font-serif text-2xl font-bold text-[#A77B26]">{top}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#5A6A64]">{bottom}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative lg:col-span-6">
              <div className="absolute -inset-5 rotate-2 rounded-[2.5rem] border border-[#B88A31]/25 bg-gradient-to-br from-[#D4AF57]/15 to-[#153D30]/5" />
              <div className="relative overflow-hidden rounded-[2rem] bg-[#0E241C] p-2 shadow-[0_35px_90px_rgba(23,48,39,0.28)]">
                <video
                  ref={heroVideoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/kennix-hero-story-poster.jpg"
                  onPlay={(event) => { setHeroPlaying(true); coordinateMedia(event.currentTarget); }}
                  onPause={() => setHeroPlaying(false)}
                  className="aspect-video w-full rounded-[1.5rem] object-cover"
                >
                  <source src="/kennix-hero-story.mp4" type="video/mp4" />
                </video>
                <div className="absolute right-5 top-5 flex gap-2">
                  <button onClick={toggleHeroPlayback} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/75 text-white" aria-label={heroPlaying ? 'Pause V2 hero film' : 'Play V2 hero film'}>
                    {heroPlaying ? <Pause className="h-3.5 w-3.5 fill-current" /> : <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />}
                  </button>
                  <button onClick={toggleHeroSound} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/75 text-white" aria-label={heroMuted ? 'Enable V2 hero sound' : 'Mute V2 hero sound'}>
                    {heroMuted ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-6 rounded-2xl border border-white/50 bg-white p-5 shadow-xl sm:-left-10">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#87651F]">The KENNIX promise</p>
                <p className="mt-2 max-w-[220px] font-serif text-xl font-bold">Independent homes. Shared belonging.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="philosophy" className="bg-[#10271F] px-5 py-28 text-white sm:px-8 lg:px-12">
          <motion.div {...reveal} className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF57]">A different starting point</p>
              <p className="mt-8 font-serif text-7xl font-bold text-white/10">01</p>
            </div>
            <div className="lg:col-span-8">
              <p className="font-serif text-4xl font-bold leading-tight sm:text-6xl">
                Most property begins with land.
                <span className="block text-[#D4AF57]">We begin with people.</span>
              </p>
              <div className="mt-12 grid gap-8 border-t border-white/15 pt-10 sm:grid-cols-2">
                <p className="text-base leading-8 text-white/65">Who do you want around you? How close should family be? What should remain private, and what is worth sharing?</p>
                <p className="text-base leading-8 text-white/65">Those answers shape the homes, spaces, amenities and complete development journey—not the other way around.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="circle" className="px-5 py-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <motion.div {...reveal} className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#87651F]">Signature concept</p>
                <h2 className="mt-5 font-serif text-5xl font-bold leading-none sm:text-7xl">The KENNIX<br /><span className="italic text-[#A77B26]">Circle.</span></h2>
                <p className="mt-7 max-w-md text-base leading-8 text-[#4E6059]">Bring several home requirements together. Stay close to your people while every household keeps its own door, space and life.</p>
                <div className="mt-10 space-y-4">
                  {['Parents a few minutes away', 'Children growing up with cousins', 'Friends becoming neighbours', 'Communities celebrating together'].map((item) => (
                    <div key={item} className="flex items-center gap-3 border-b border-[#173F32]/10 pb-4 text-sm font-semibold">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF57]/20"><Check className="h-3.5 w-3.5 text-[#87651F]" /></span>{item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-[2rem] bg-[#10271F] p-3 shadow-[0_30px_80px_rgba(16,39,31,0.22)]">
                  <video controls playsInline preload="metadata" poster="/kennix-circle-story-poster.jpg" onPlay={(event) => coordinateMedia(event.currentTarget)} className="aspect-video w-full rounded-[1.4rem] object-cover">
                    <source src="/kennix-circle-story.mp4" type="video/mp4" />
                  </video>
                  <div className="flex items-center justify-between px-4 py-4 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4AF57]">A Circle story</p>
                    <p className="text-xs text-white/55">Families living independently, together</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-[#E9E2D4] px-5 py-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <motion.div {...reveal} className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#87651F]">One connected ecosystem</p>
                <h2 className="mt-5 max-w-3xl font-serif text-5xl font-bold leading-none sm:text-7xl">Everything a place<br />needs to become home.</h2>
              </div>
              <Layers3 className="h-16 w-16 text-[#A77B26]" strokeWidth={1} />
            </motion.div>
            <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
              {services.map(({ number, title, text, icon: Icon, featured }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  className={`group rounded-3xl border p-7 ${featured ? 'bg-[#153D30] text-white md:col-span-2 lg:col-span-2' : 'border-[#173F32]/10 bg-[#F7F3EA] lg:col-span-2'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold tracking-[0.2em] ${featured ? 'text-[#D4AF57]' : 'text-[#87651F]'}`}>{number}</span>
                    <Icon className={`h-6 w-6 ${featured ? 'text-[#D4AF57]' : 'text-[#315D4D]'}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-14 font-serif text-3xl font-bold">{title}</h3>
                  <p className={`mt-4 text-sm leading-7 ${featured ? 'text-white/60' : 'text-[#52635D]'}`}>{text}</p>
                  <ArrowDownRight className="mt-8 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-28 sm:px-8 lg:px-12">
          <motion.div {...reveal} className="mx-auto max-w-[1440px]">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#87651F]">How it comes together</p>
                <h2 className="mt-5 font-serif text-5xl font-bold">From people<br />to place.</h2>
              </div>
              <div className="grid gap-px overflow-hidden rounded-3xl border border-[#173F32]/10 bg-[#173F32]/10 sm:grid-cols-2 lg:col-span-8">
                {steps.map(([title, text], index) => (
                  <div key={title} className="bg-[#F4EFE5] p-7 sm:p-9">
                    <p className="font-serif text-4xl font-bold text-[#D0B16B]">0{index + 1}</p>
                    <h3 className="mt-8 font-serif text-2xl font-bold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#52635D]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="bg-[#10271F] px-5 py-28 text-white sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <motion.div {...reveal} className="flex items-end justify-between gap-6">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF57]">KENNIX Projects</p>
                <h2 className="mt-5 font-serif text-5xl font-bold sm:text-7xl">Work that stands.</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">Selected proposed and completed residential projects by KENNIX. New projects are undertaken across India.</p>
              </div>
              <ArrowRight className="hidden h-10 w-10 text-[#D4AF57] sm:block" strokeWidth={1} />
            </motion.div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {contractorProjects.map((project, index) => (
                <motion.article key={project.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-[#050706]">
                    <img src={project.image} alt={project.name} className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-white/60"><MapPin className="h-3 w-3 text-[#D4AF57]" />{project.location}</div>
                      <h3 className="mt-3 font-serif text-3xl font-bold">{project.name}</h3>
                      <p className="mt-2 text-sm text-white/60">{project.type}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#D4AF57]">{project.relationship}</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25"><ChevronRight className="h-4 w-4" /></span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="quality" className="px-5 py-28 sm:px-8 lg:px-12">
          <motion.div {...reveal} className="mx-auto grid max-w-[1440px] gap-12 rounded-[2.5rem] border border-[#173F32]/10 bg-white/55 p-8 shadow-[0_30px_90px_rgba(23,63,50,0.08)] sm:p-12 lg:grid-cols-12 lg:p-16">
            <div className="lg:col-span-5">
              <ShieldCheck className="h-12 w-12 text-[#A77B26]" strokeWidth={1.4} />
              <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#87651F]">Quality assurance</p>
              <h2 className="mt-5 font-serif text-5xl font-bold leading-none sm:text-6xl">Visible at<br />every stage.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {['Material testing', 'Engineer verification', 'Milestone visibility', 'Photo documentation', 'Pre-handover checks', 'Client dashboard'].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-[#173F32]/10 bg-[#F7F3EA] p-5">
                  <span className="font-serif text-xl font-bold text-[#C39A46]">0{index + 1}</span>
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="px-5 pb-10 sm:px-8 lg:px-12">
          <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-[#C99D45] px-8 py-20 text-[#10271F] sm:px-14 lg:px-20">
            <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full border-[80px] border-white/10" />
            <motion.div {...reveal} className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em]">Your next address can mean more</p>
                <h2 className="mt-5 font-serif text-5xl font-bold leading-none sm:text-7xl">Bring your people closer.</h2>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <button onClick={openCircleModal} className="rounded-full bg-[#10271F] px-7 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-xl">Start your Circle <ArrowRight className="ml-2 inline h-4 w-4" /></button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 border-t border-[#173F32]/12 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <KennixLogo size="md" />
            <p className="mt-4 max-w-md text-xs leading-6 text-[#5A6A64]">Connecting people, creating places together.</p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.16em] text-[#52635D]">
            <a href="/">Original site</a>
            <a href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
