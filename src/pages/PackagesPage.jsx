import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, FileText, Home, Layers3, Sparkles } from 'lucide-react';

const packages = [
  {
    name: 'Basic Package',
    price: '₹1,800',
    icon: Home,
  },
  {
    name: 'Standard Package',
    price: '₹2,000',
    icon: Building2,
    featured: true,
  },
  {
    name: 'Luxury Package',
    price: '₹2,200',
    icon: Layers3,
  },
  {
    name: 'Ultra Luxury Package',
    price: '₹2,500',
    icon: Sparkles,
  },
];

export default function PackagesPage({ openCircleModal }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F5F0E6] pt-20 text-[#10271F]">
      <div className="pointer-events-none absolute -left-32 top-28 h-96 w-96 rounded-full bg-[#D4AF57]/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[#315D4D]/10 blur-[110px]" />

      <section className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#B88A31]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#87651F]">Construction Packages</p>
            <span className="h-px w-12 bg-[#B88A31]" />
          </div>
          <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.02] sm:text-7xl">
            A clear starting point
            <span className="block italic text-[#A77B26]">for your build.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#586861] sm:text-base">
            Select the construction package that aligns with your project requirements. Detailed specifications and the final scope are confirmed after project evaluation.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map(({ name, price, icon: Icon, featured }, index) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className={`relative flex min-h-[350px] flex-col overflow-hidden rounded-[28px] border p-7 shadow-[0_20px_55px_rgba(23,63,50,0.08)] ${
                featured
                  ? 'border-[#315D4D] bg-[#153D30] text-white'
                  : 'border-[#D8CDB9] bg-white/75 text-[#10271F]'
              }`}
            >
              {featured && (
                <span className="absolute right-5 top-5 rounded-full border border-[#D4AF57]/40 bg-[#D4AF57]/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#E5C77F]">
                  Popular
                </span>
              )}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${featured ? 'bg-white/10 text-[#E5C77F]' : 'bg-[#E5EDE8] text-[#315D4D]'}`}>
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className={`mt-10 text-[10px] font-bold uppercase tracking-[0.2em] ${featured ? 'text-[#E5C77F]' : 'text-[#87651F]'}`}>
                Package {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="mt-3 min-h-[64px] font-serif text-3xl font-bold leading-tight">{name}</h2>
              <div className={`mt-7 border-t pt-6 ${featured ? 'border-white/15' : 'border-[#173F32]/10'}`}>
                <p className="font-serif text-4xl font-bold">{price}</p>
                <p className={`mt-2 text-xs font-semibold uppercase tracking-[0.14em] ${featured ? 'text-white/55' : 'text-[#68736E]'}`}>
                  Per Sq. Ft. + GST
                </p>
              </div>
              <button
                onClick={openCircleModal}
                className={`mt-auto flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                  featured
                    ? 'bg-[#D4AF57] text-[#10271F] hover:bg-[#E4C986]'
                    : 'bg-[#153D30] text-white hover:bg-[#205442]'
                }`}
              >
                Request specifications <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8 flex items-start gap-4 rounded-2xl border border-[#D8CDB9] bg-[#EEE6D7] p-5 sm:p-6"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#153D30] text-[#E5C77F]">
            <FileText className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-[#153D30]">Terms & Conditions Apply</h3>
            <p className="mt-2 text-xs leading-6 text-[#586861] sm:text-sm">
              Package pricing is applicable for projects with a minimum construction area of 4,000 Sq. Ft. and above. Final pricing may vary depending on site conditions, project location, design requirements, specifications, and scope of work.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
