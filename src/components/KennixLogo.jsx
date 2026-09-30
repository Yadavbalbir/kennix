import React from 'react';

export default function KennixLogo({ size = "md", tone = "default", className = "" }) {
  // size variants
  const sizeMap = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-13",
    lg: "h-16 sm:h-18",
    xl: "h-24 sm:h-28",
  };

  const heightClass = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center cursor-pointer select-none group ${className}`}>
      <img 
        src="/logo.png" 
        alt="KENNIX - Connecting People, Creating Places Together" 
        className={`${heightClass} w-auto object-contain transition-all duration-300 group-hover:opacity-90 ${
          tone === 'light'
            ? 'brightness-0 invert opacity-95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]'
            : 'drop-shadow-[0_2px_12px_rgba(212,175,55,0.18)]'
        }`}
      />
    </div>
  );
}
