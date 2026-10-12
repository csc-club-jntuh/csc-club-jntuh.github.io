import React from "react";

export default function FloatingActions({ darkMode, onToggleTheme, setDarkMode, onOpenShare }) {
  const handleToggle = onToggleTheme || (() => setDarkMode && setDarkMode(!darkMode));

  return (
    <div className="floating-controls" role="toolbar" aria-label="Portal quick actions">
      {/* Theme Toggle Pill */}
      <button
        type="button"
        id="theme-toggle-btn"
        className="floating-pill theme-pill"
        onClick={handleToggle}
        title={darkMode ? "Switch to Modernist Light mode" : "Switch to Cyber Dark mode"}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={darkMode}
      >
        <span className="material-symbols-outlined pill-icon" aria-hidden="true">
          {darkMode ? "light_mode" : "dark_mode"}
        </span>
      </button>

      {/* Share Portal Pill */}
      <button
        type="button"
        id="share-toggle-btn"
        className="floating-pill share-pill"
        onClick={onOpenShare}
        title="Share club portal link and QR code"
        aria-label="Share portal"
        aria-haspopup="dialog"
      >
        <span className="material-symbols-outlined pill-icon pill-icon-emerald" aria-hidden="true">
          share
        </span>
        <span className="pill-text">Share</span>
      </button>
    </div>
  );
}
