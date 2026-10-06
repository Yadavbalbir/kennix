import React, { useEffect } from 'react';
import { Maximize2, X } from 'lucide-react';

export default function FullscreenImageModal({ src, alt, isOpen, onClose }) {
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

  if (!isOpen || !src) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#030504]/95 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Full-screen image of ${alt}`}
      onClick={onClose}
    >
      <div className="relative flex h-full w-full items-center justify-center" onClick={(event) => event.stopPropagation()}>
        <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/75 backdrop-blur-md sm:left-5 sm:top-5">
          <Maximize2 className="h-3.5 w-3.5 text-[#D6B56C]" />
          Full image
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-[#10271F] sm:right-5 sm:top-5"
          aria-label="Close full-screen image"
        >
          <X className="h-5 w-5" />
        </button>
        <img
          src={src}
          alt={alt}
          className="max-h-full max-w-full object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.75)]"
        />
      </div>
    </div>
  );
}
