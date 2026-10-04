import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Check, FileText, Home, Layers3, Sparkles } from 'lucide-react';

const packages = [
  {
    name: 'Basic',
    price: '₹1,800',
    icon: Home,
    cardClass: 'border-[#D8CDB9] bg-[#FCFBF7] text-[#10271F]',
    iconClass: 'bg-[#E5EDE8] text-[#315D4D]',
    numberClass: 'text-[#153D30]/[0.06]',
    labelClass: 'text-[#87651F]',
    mutedClass: 'text-[#68736E]',
    priceClass: 'border-[#D9E2DC] bg-[#EDF3EF]',
    featureClass: 'border-[#173F32]/10 text-[#4D5E57]',
    buttonClass: 'bg-[#153D30] text-white hover:bg-[#205442]',
  },
  {
    name: 'Standard',
    price: '₹2,000',
    icon: Building2,
    featured: true,
    cardClass: 'border-[#315D4D] bg-[#153D30] text-white',
    iconClass: 'bg-white/10 text-[#E5C77F]',
    numberClass: 'text-white/[0.05]',
    labelClass: 'text-[#E5C77F]',
    mutedClass: 'text-white/55',
    priceClass: 'border-white/10 bg-white/[0.06]',
    featureClass: 'border-white/10 text-white/65',
    buttonClass: 'bg-[#D4AF57] text-[#10271F] hover:bg-[#E4C986]',
  },
  {
    name: 'Luxury',
    price: '₹2,200',
    icon: Layers3,
    cardClass: 'border-[#D4BD86] bg-[#FFF9EA] text-[#10271F]',
    iconClass: 'bg-[#F3E5BC] text-[#8A641C]',
    numberClass: 'text-[#A77B26]/[0.07]',
    labelClass: 'text-[#8A641C]',
    mutedClass: 'text-[#746448]',
    priceClass: 'border-[#E4CD95] bg-[#F8E9C3]',
    featureClass: 'border-[#A77B26]/15 text-[#655A44]',
    buttonClass: 'bg-[#A77B26] text-white hover:bg-[#8F681F]',
  },
  {
    name: 'Ultra Luxury',
    price: '₹2,500',
    icon: Sparkles,
    cardClass: 'border-[#172B23] bg-[#101E19] text-white',
    iconClass: 'bg-[#D4AF57]/15 text-[#E5C77F]',
    numberClass: 'text-white/[0.05]',
    labelClass: 'text-[#E5C77F]',
    mutedClass: 'text-white/50',
    priceClass: 'border-[#D4AF57]/20 bg-[#D4AF57]/10',
    featureClass: 'border-white/10 text-white/60',
    buttonClass: 'bg-[#D4AF57] text-[#10271F] hover:bg-[#E4C986]',
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
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative flex min-h-[490px] flex-col overflow-hidden rounded-[30px] border p-6 shadow-[0_20px_55px_rgba(23,63,50,0.09)] sm:p-7 ${pkg.cardClass}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${index === 0 ? 'bg-[#628474]' : index === 1 ? 'bg-[#D4AF57]' : index === 2 ? 'bg-[#B88932]' : 'bg-gradient-to-r from-[#D4AF57] via-[#F0DDA5] to-[#D4AF57]'}`} />
              <span className={`pointer-events-none absolute -right-2 top-8 font-serif text-[7rem] font-bold leading-none ${pkg.numberClass}`}>
                0{index + 1}
              </span>
              {pkg.featured && (
                <span className="absolute right-5 top-5 rounded-full border border-[#D4AF57]/40 bg-[#D4AF57]/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#E5C77F]">
                  Popular
                </span>
              )}
              <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${pkg.iconClass}`}>
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <p className={`relative mt-8 text-[10px] font-bold uppercase tracking-[0.2em] ${pkg.labelClass}`}>
                Construction package
              </p>
              <h2 className="relative mt-2 min-h-[66px] font-serif text-3xl font-bold leading-none">
                {pkg.name}
                <span className={`mt-2 block font-sans text-[10px] font-bold uppercase tracking-[0.2em] ${pkg.mutedClass}`}>Package</span>
              </h2>
              <div className={`relative mt-5 rounded-2xl border p-5 ${pkg.priceClass}`}>
                <p className={`text-[9px] font-bold uppercase tracking-[0.18em] ${pkg.mutedClass}`}>Package rate</p>
                <p className="mt-2 font-serif text-4xl font-bold">{pkg.price}</p>
                <p className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${pkg.mutedClass}`}>
                  Per Sq. Ft. + GST
                </p>
              </div>
              <div className="relative mt-5 space-y-3">
                {['Detailed specifications on request', 'Final quote after project evaluation'].map((item) => (
                  <div key={item} className={`flex items-start gap-2.5 border-b pb-3 text-[11px] leading-5 last:border-b-0 ${pkg.featureClass}`}>
                    <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${index === 1 || index === 3 ? 'bg-[#D4AF57]/15 text-[#E5C77F]' : 'bg-[#315D4D]/10 text-[#315D4D]'}`}>
                      <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <button
                onClick={openCircleModal}
                className={`relative mt-auto flex w-full items-center justify-between rounded-full px-5 py-3 text-[9px] font-bold uppercase tracking-[0.13em] transition-all group-hover:px-6 ${pkg.buttonClass}`}
              >
                Request specifications <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </motion.article>
            );
          })}
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
