// PowerBiIcon.tsx
import React from 'react';


interface IconProps {
  className?: string
  size?: number
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

export const CIcon: React.FC<IconProps> = ({ size = 40, ...props }) => {
  return (
    <svg
      viewBox="0 0 128 128"
      width={size}
      height={size}
      {...props}
    >
      <path
        fill="A8B9CC"
        d="M117.5 33.5c-.3-.4-.6-.8-1-1.1l-48-28c-2.8-1.6-6.2-1.6-9 0l-48 28c-2.8 1.6-4.5 4.6-4.5 7.9v55.4c0 3.3 1.7 6.3 4.5 7.9l48 28c1.4.8 3 1.2 4.5 1.2s3.1-.4 4.5-1.2l48-28c2.8-1.6 4.5-4.6 4.5-7.9V41.4c0-3.3-1.7-6.3-4.5-7.9z"
      />
      <path
        fill="00599C"
        d="M64 12c1.1 0 2.2.3 3.1.8l48 28c1.9 1.1 3.1 3.1 3.1 5.3v55.4c0 2.2-1.2 4.2-3.1 5.3l-48 28c-1 .6-2 .8-3.1.8s-2.2-.3-3.1-.8l-48-28c-1.9-1.1-3.1-3.1-3.1-5.3V51.1c0-2.2 1.2-4.2 3.1-5.3l48-28c.9-.5 2-.8 3.1-.8m0-4c-2.5 0-5 .7-7.2 1.9l-48 28C4.3 40.5 1.5 45.3 1.5 51.1v55.4c0 5.7 2.8 10.6 7.3 13.2l48 28c2.2 1.3 4.7 1.9 7.2 1.9s5-.7 7.2-1.9l48-28c4.5-2.6 7.3-7.5 7.3-13.2V51.1c0-5.7-2.8-10.6-7.3-13.2l-48-28C69 8.7 66.5 8 64 8z"
      />
      <path
        fill="FFFFFF"
        d="M80.4 44.4c-4-4-9.7-6.4-16.1-6.4-12.4 0-22.3 9.4-22.3 22.1s9.9 22.1 22.3 22.1c6.7 0 12.3-2.6 16.4-6.9l8.2 8c-6.2 6.5-15 10.8-24.6 10.8-18.4 0-33.4-14.1-33.4-34s15-34 33.4-34c9.9 0 18.7 4.5 24.6 11.2l-8.6 7.1z"
      />
    </svg>
  )
}