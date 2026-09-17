// PowerBiIcon.tsx
import React from 'react';


interface IconProps {
  className?: string
  size?: number
  children: React.ReactNode
}

export const PowerBiIcon: React.FC<IconProps> = ({ className = "w-5 h-5", children }) => {
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


export const ExcelIcon: React.FC<IconProps> = ({ className = "w-5 h-5", children, size="23" }) => {
  return (
    <svg fill="currentColor" xmlns="http://w3.org" viewBox="0 0 30 30" className={`${className} transition-colors duration-300`}>
      <path d="M16 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h12v-4h-4v-4h4v-4h-4v-4h4v-4h-4V8h4V4h-4V2z" fill="currentColor" className="opacity-60" />
      <path d="M14 6h-2v2h2V6zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2zm0 4h-2v2h2v-2z" fill="currentColor" className="opacity-60" />
      <path d="M30 4H14v24h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="currentColor" className="opacity-95" />
      <path d="M19 10l3.5 6-3.5 6h2.5l2.25-4.25L26 22h2.5l-3.5-6 3.5-6h-2.5L23.75 14 21.5 10H19z" fill="#FFFFFF" />
    </svg>
  );
};

export const WindowsIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size = 23 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M3 4.5L11 3.4V11H3V4.5Z"
        fill="currentColor"
      />
      <path
        d="M12.5 3.2L21 2V11H12.5V3.2Z"
        fill="currentColor"
      />
      <path
        d="M3 12.5H11V20.6L3 19.5V12.5Z"
        fill="currentColor"
      />
      <path
        d="M12.5 12.5H21V22L12.5 20.8V12.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const PowerQueryIcon: React.FC<IconProps> = ({ className = "w-5 h-5", children}) => {
  return (
    <svg 
      viewBox=" 0 0 32 32"
      fill="none" 
      className={`${className} transition-all`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7C4 5.34 5.34 4 7 4H19C20.66 4 22 5.34 22 7V25C22 26.66 20.66 28 19 28H7C5.34 28 4 26.66 4 25V7Z"
        fill="currentColor"
        className="opacity-60"
      />
      <path
        d="M12 9H23C24.66 9 26 10.34 26 12V23C26 24.66 24.66 26 23 26H12V9Z"
        fill="currentColor"
        className="opacity-90"
      />

      <path
        d="M15 13H19V16H22V20H19V23H15V20H12V16H15V13Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const ApiRestIcon: React.FC<IconProps> = ({ className="w-6 h-6", children }) => {
  return (
    <svg
      viewBox=" 0 0 32 32"
      fill="none" 
      className={`${className} transition-all`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
        M29 13.4
          L26.2 12.7
          C25.9 11.8 25.5 11 24.9 10.2
          L26.4 7.7
          L23.1 5.6
          L20.9 7.6
          C20 7.2 19.1 6.9 18.2 6.7
          L17.7 3.5
          H14
          L13.4 6.7
          C12.5 6.9 11.6 7.2 10.8 7.6
          L8.5 5.6
          L5.2 7.7
          L6.8 10.2
          C6.2 11 5.8 11.8 5.5 12.7
          L2.7 13.4
          L2.7 18.6
          L5.5 19.3
          C5.8 20.2 6.2 21 6.8 21.8
          L5.2 24.3
          L8.5 26.4
          L10.8 24.4
          C11.6 24.8 12.5 25.1 13.4 25.3
          L14 28.5
          H17.7
          L18.2 25.3
          C19.1 25.1 20 24.8 20.9 24.4
          L23.1 26.4
          L26.4 24.3
          L24.9 21.8
          C25.5 21 25.9 20.2 26.2 19.3
          L29 18.6
          V13.4Z
        "
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text
        x="16"
        y="19"
        textAnchor="middle"
        fill="currentColor"
        fontSize="7.5"
        fontWeight="600"
        fontFamily="Arial, Helvetica, sans-serif"
        letterSpacing="0.3"
      >
        API
      </text>
    </svg>
  )
}

export const VsCodeIcon: React.FC<IconProps> = ({ className="w-6 h-6", children }) => {
  return (
    <svg
      viewBox=" 0 0 32 32"
      fill="none" 
      className={`${className} transition-all`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 10.2L8.4 6.8L15.8 13.1L23.7 4.7C24.2 4.2 25 4 25.7 4.3L28 5.5C28.6 5.8 29 6.4 29 7.1V24.9C29 25.6 28.6 26.2 28 26.5L25.7 27.7C25 28 24.2 27.8 23.7 27.3L15.8 18.9L8.4 25.2L4.5 21.8L11.2 16L4.5 10.2Z"
        fill="currentColor"
      />

      <path
        d="M23.7 8.5L15.8 16L23.7 23.5V8.5Z"
        fill="white"
        className="opacity-90"
      />
    </svg>
  )
}