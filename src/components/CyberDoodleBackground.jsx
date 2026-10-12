import React from "react";

export default function CyberDoodleBackground() {
  return (
    <div
      aria-hidden="true"
      className="cyber-doodle-bg"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <svg
        className="doodle-svg"
        height="100%"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            height="220"
            id="cyber-doodle-grid"
            patternUnits="userSpaceOnUse"
            width="220"
          >
            {/* Padlock / Security Lock */}
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              transform="translate(18, 16) scale(0.9)"
            >
              <rect height="12" rx="2" width="16" x="4" y="9"></rect>
              <path d="M7 9V6a5 5 0 0 1 10 0v3"></path>
              <circle cx="12" cy="14" r="1.5"></circle>
              <path d="M12 15.5v2"></path>
            </g>

            {/* Binary 01 snippet */}
            <text
              fill="currentColor"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="12"
              fontWeight="700"
              letterSpacing="1.5"
              stroke="none"
              x="145"
              y="32"
            >
              0110
            </text>
            <text
              fill="currentColor"
              fontFamily="'JetBrains Mono', monospace"
              fontSize="10"
              fontWeight="600"
              letterSpacing="1.5"
              stroke="none"
              x="150"
              y="47"
            >
              1001
            </text>

            {/* Bug Bounty Beetle / Exploit Bug */}
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              transform="translate(85, 48) scale(0.85)"
            >
              <rect height="11" rx="4" width="10" x="7" y="9"></rect>
              <path d="M9 5a3 3 0 0 1 6 0v4H9V5z"></path>
              <path d="M9 3L7 1M15 3l2-2"></path>
              <path d="M7 11H3M21 11h-4"></path>
              <path d="M7 15l-4 2M21 17l-4-2"></path>
              <path d="M7 19l-3 3M20 22l-3-3"></path>
              <line x1="12" x2="12" y1="13" y2="17"></line>
            </g>

            {/* Microchip Traces / Hardware Node */}
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              transform="translate(160, 95) scale(0.85)"
            >
              <rect height="14" rx="2" width="14" x="5" y="5"></rect>
              <rect height="6" width="6" x="9" y="9"></rect>
              <path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"></path>
            </g>

            {/* Security Shield & Keyhole */}
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              transform="translate(18, 95) scale(0.9)"
            >
              <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z"></path>
              <circle cx="12" cy="10" r="1.5"></circle>
              <path d="M12 11.5v3"></path>
            </g>

            {/* Terminal Prompt CLI Brackets */}
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.7"
              transform="translate(88, 122) scale(0.8)"
            >
              <rect height="16" rx="2" width="20" x="2" y="3"></rect>
              <path d="M6 8l3 3-3 3M11 14h4"></path>
            </g>

            {/* Satellite Dish / Network Recon Antenna */}
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              transform="translate(138, 162) scale(0.85)"
            >
              <path d="M4 12a10 10 0 0 1 10-10"></path>
              <path d="M4 7a5 5 0 0 1 5-5"></path>
              <path d="M9 17l6-6"></path>
              <path d="M12 14l-4 4 6 3 3-6-4 4"></path>
              <circle cx="16" cy="10" fill="currentColor" r="1.5"></circle>
            </g>

            {/* PGP Secret Key / Cryptographic Key */}
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.6"
              transform="translate(24, 168) scale(0.85)"
            >
              <circle cx="7" cy="8" r="5"></circle>
              <path d="M12 8h9v4h-3v-4h-2v3h-2"></path>
              <circle cx="7" cy="8" r="1.5"></circle>
            </g>

            {/* Connectivity nodes & matrix crosshairs */}
            <circle cx="120" cy="18" fill="currentColor" r="1.5" stroke="none"></circle>
            <circle cx="198" cy="70" fill="currentColor" r="1.5" stroke="none"></circle>
            <circle cx="70" cy="185" fill="currentColor" r="1.5" stroke="none"></circle>
            <path
              d="M62 82h5M64.5 79.5v5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.2"
            ></path>
            <path
              d="M188 145h5M190.5 142.5v5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.2"
            ></path>
          </pattern>
        </defs>
        <rect fill="url(#cyber-doodle-grid)" height="100%" width="100%"></rect>
      </svg>
    </div>
  );
}
