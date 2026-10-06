import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquareText, X } from 'lucide-react';

const services = [
  'Community Development',
  'Residential Construction',
  'Commercial Construction',
  'Architecture & Structural Design',
  'Interiors & Smart Homes',
];

const initialForm = {
  name: '',
  mobile: '',
  email: '',
  location: '',
  interest: '',
};

export default function EnquiryModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'enquiry',
          ...form,
        }).toString(),
      });

      if (!response.ok) {
        throw new Error(`Enquiry submission failed with status ${response.status}`);
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Unable to submit enquiry', error);
      setSubmitError('We could not send your enquiry. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setSubmitError('');
    setForm(initialForm);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(3,8,6,0.68)] p-3 backdrop-blur-[2px] sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-title"
      onClick={handleClose}
    >
      <div
        className="relative flex max-h-[94vh] w-full max-w-3xl flex-col overflow-hidden rounded-[28px] border border-[#D8C9A8] bg-[#FAF7F0] text-[#10271F] shadow-[0_35px_100px_rgba(0,0,0,0.5)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-white/10 bg-[#153D30] px-5 py-5 text-white sm:px-7 sm:py-6">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D4AF57] text-[#10271F]">
              <MessageSquareText className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#E5C77F]">Enquiry Form</p>
              <h2 id="enquiry-title" className="mt-1 font-serif text-2xl font-bold sm:text-3xl">Let's Start With Your Requirement</h2>
              <p className="mt-1 text-xs text-white/60">Tell us a little about what you're looking to create.</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/65 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close enquiry form"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-7">
          {submitted ? (
            <div className="py-10 text-center sm:py-14">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#94B5A6] bg-[#E4EFE8] text-[#2F6B54]">
                <CheckCircle2 className="h-8 w-8" />
              </span>
              <h3 className="mt-6 font-serif text-3xl font-bold">Thank you, {form.name}.</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#63706A]">
                Your enquiry about {form.interest} has been recorded. The KENNIX team will contact you using the details provided.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="mt-7 rounded-full bg-[#153D30] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white"
              >
                Back to website
              </button>
            </div>
          ) : (
            <form name="enquiry" onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-[#344A41]">1. Full Name <span className="text-[#A77B26]">*</span></span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(event) => updateField('name', event.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[#CEC8BC] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#9CA5A0] focus:border-[#A77B26] focus:ring-2 focus:ring-[#D4AF57]/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-[#344A41]">2. Mobile Number <span className="text-[#A77B26]">*</span></span>
                  <div className="flex overflow-hidden rounded-xl border border-[#CEC8BC] bg-white focus-within:border-[#A77B26] focus-within:ring-2 focus-within:ring-[#D4AF57]/20">
                    <span className="flex items-center border-r border-[#DED8CC] bg-[#F2EBDD] px-3 text-xs font-bold text-[#5D654F]">+91</span>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      autoComplete="tel"
                      inputMode="numeric"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      value={form.mobile}
                      onChange={(event) => updateField('mobile', event.target.value.replace(/\D/g, '').slice(0, 10))}
                      placeholder="Mobile number"
                      className="min-w-0 flex-1 px-4 py-3 text-sm outline-none placeholder:text-[#9CA5A0]"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-[#344A41]">3. Email Address <span className="text-[#A77B26]">*</span></span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(event) => updateField('email', event.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-[#CEC8BC] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#9CA5A0] focus:border-[#A77B26] focus:ring-2 focus:ring-[#D4AF57]/20"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-xs font-bold text-[#344A41]">4. City / Project Location <span className="text-[#A77B26]">*</span></span>
                  <input
                    type="text"
                    name="location"
                    required
                    value={form.location}
                    onChange={(event) => updateField('location', event.target.value)}
                    placeholder="Select or enter location"
                    className="w-full rounded-xl border border-[#CEC8BC] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#9CA5A0] focus:border-[#A77B26] focus:ring-2 focus:ring-[#D4AF57]/20"
                  />
                </label>
              </div>

              <fieldset>
                <legend className="text-xs font-bold text-[#344A41]">5. What are you interested in? <span className="text-[#A77B26]">*</span></legend>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {services.map((service) => (
                    <label
                      key={service}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-xs font-semibold transition-colors ${
                        form.interest === service
                          ? 'border-[#A77B26] bg-[#FFF4D6] text-[#6F5017]'
                          : 'border-[#D7D2C7] bg-white text-[#4F5D57] hover:border-[#9EAC9F]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="interest"
                        required
                        value={service}
                        checked={form.interest === service}
                        onChange={(event) => updateField('interest', event.target.value)}
                        className="h-4 w-4 accent-[#A77B26]"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </fieldset>

              {submitError && (
                <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#153D30] py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-[0_10px_24px_rgba(21,61,48,0.18)] transition-colors hover:bg-[#205442] disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? 'Sending enquiry...' : 'Submit enquiry'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
