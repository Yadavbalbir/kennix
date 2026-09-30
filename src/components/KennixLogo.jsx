import React from 'react';

export default function KennixLogo({ size = "md", tone = "default", className = "" }) {
  // size variants
  const sizeMap = {
    sm: "h-7 sm:h-8",
    md: "h-8 sm:h-10",
    lg: "h-11 sm:h-12",
    xl: "h-14 sm:h-16",
  };

  const heightClass = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center cursor-pointer select-none group ${className}`}>
      <img 
        src={tone === 'light' ? '/kennix-wordmark-white.png' : '/kennix-wordmark.png'}
        alt="KENNIX - Connecting People, Creating Places Together" 
        className={`${heightClass} w-auto object-contain transition-all duration-300 group-hover:opacity-90 ${
          tone === 'light'
            ? 'opacity-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.22)]'
            : 'drop-shadow-[0_2px_8px_rgba(212,175,55,0.12)]'
        }`}
      />
    </div>
  );
}
