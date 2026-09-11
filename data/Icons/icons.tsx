// PowerBiIcon.tsx
import React from 'react';

interface IconProps {
  className?: string
  children: React.ReactNode
}

export const PowerBiIcon: React.FC<IconProps> = ({ className = "w-8 h-8", children }) => {
  return (
    <svg 
      xmlns="http://w3.org" 
      viewBox="0 0 32 32" 
      className={`${className} transition-all`}
    >
      <rect x="4" y="14" width="6" height="14" rx="1" fill="currentColor" className="opacity-80" />
      <rect x="13" y="8" width="6" height="20" rx="1" fill="currentColor" className="opacity-90" />
      <rect x="22" y="2" width="6" height="26" rx="1" fill="currentColor" className="opacity-100" />
    </svg>
  );
};


export const ExcelIcon: React.FC<IconProps> = ({ className = "w-8 h-8 text-emerald-600", children }) => {
  return (
    <svg xmlns="http://w3.org" viewBox="0 0 32 32" className={`${className} transition-colors duration-300`}>
      <path d="M16 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h12v-4h-4v-4h4v-4h-4v-4h4v-4h-4V8h4V4h-4V2z" fill="currentColor" className="opacity-60" />
      <path d="M14 6h-2v2h2V6zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="currentColor" className="opacity-60" />
      <path d="M30 4H14v24h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="currentColor" className="opacity-95" />
      <path d="M19 10l3.5 6-3.5 6h2.5l2.25-4.25L26 22h2.5l-3.5-6 3.5-6h-2.5L23.75 14 21.5 10H19z" fill="#FFFFFF" />
    </svg>
  );
};
