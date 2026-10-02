import React from 'react';

export default function KennixLogo({ size = "md", className = "" }) {
  const sizeMap = {
    sm: "h-14 sm:h-16",
    md: "h-14 sm:h-16",
    lg: "h-16 sm:h-20",
    xl: "h-20 sm:h-24",
  };

  const heightClass = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center cursor-pointer select-none group ${className}`}>
      <img 
        src="/kennix-logo-full.png"
        alt="KENNIX - Connecting People, Creating Places Together" 
        className={`${heightClass} w-auto object-contain opacity-100 drop-shadow-[0_4px_12px_rgba(20,63,49,0.12)] transition-all duration-300 group-hover:scale-[1.015]`}
      />
    </div>
  );
}
