import React, { useState, useEffect } from "react";
import { CLUB_INFO } from "../data/links";

export default function ShareModal({ isOpen, onClose, onShowToast }) {
  const [copied, setCopied] = useState(false);
  const portalUrl = CLUB_INFO.url || "https://csc-club-jntuh.github.io";

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(portalUrl);
      setCopied(true);
      onShowToast("Portal link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      onShowToast("Link copied to clipboard!");
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Cybersecurity Club - JNTUHCEH",
          text: "Official socials & student community links for Cybersecurity Club JNTUH College of Engineering Hyderabad",
          url: portalUrl,
        });
      } catch {
        // Dismissed by user
      }
    } else {
      handleCopy();
    }
  };

  const shareText = encodeURIComponent(
    "Check out the Cybersecurity Club JNTUHCEH community hub: " + portalUrl
  );
  const encodedUrl = encodeURIComponent(portalUrl);

  const socialChannels = [
    {
      name: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="social-share-svg" aria-hidden="true">
          <path d="M17.472 14.382c-.301-.15-1.776-.877-2.051-.977-.276-.1-.476-.15-.676.15-.2.301-.776.977-.951 1.177-.175.201-.351.226-.651.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.676-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.176.201-.301.302-.502.1-.201.05-.376-.025-.527-.075-.15-.676-1.63-.927-2.232-.244-.587-.493-.507-.677-.517-.175-.008-.376-.01-.577-.01-.201 0-.527.076-.803.376s-1.053 1.028-1.053 2.508 1.078 2.91 1.229 3.111c.15.201 2.122 3.24 5.141 4.542.718.31 1.279.495 1.716.634.722.23 1.379.197 1.898.12.579-.086 1.776-.726 2.027-1.427.251-.702.251-1.303.176-1.428-.075-.125-.276-.201-.577-.351zM12.042 21.849a9.78 9.78 0 0 1-4.99-1.365l-.358-.213-3.71.973.99-3.616-.233-.372a9.785 9.785 0 0 1-1.503-5.215c.003-5.418 4.412-9.827 9.832-9.827 2.624.001 5.091 1.024 6.947 2.88 1.854 1.857 2.875 4.324 2.874 6.948-.003 5.419-4.412 9.827-9.849 9.827zm7.65-17.472A10.846 10.846 0 0 0 12.039 1.17C6.095 1.17 1.258 6.007 1.255 11.954c-.002 1.899.496 3.754 1.442 5.396L1.05 23.504l6.32-1.657a10.84 10.84 0 0 0 5.19 1.321h.005c5.943 0 10.781-4.838 10.783-10.786a10.8 10.8 0 0 0-3.656-7.505z" />
        </svg>
      ),
      url: `https://api.whatsapp.com/send?text=${shareText}`,
      className: "share-btn-whatsapp",
    },
    {
      name: "Telegram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="social-share-svg" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
        </svg>
      ),
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent("Cybersecurity Club - JNTUHCEH Portal")}`,
      className: "share-btn-telegram",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="social-share-svg" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.08a1.63 1.63 0 0 0-1.63 1.62c0 .9.73 1.63 1.63 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.89-.74-1.62-1.63-1.62z" />
        </svg>
      ),
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      className: "share-btn-linkedin",
    },
    {
      name: "X (Twitter)",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="social-share-svg" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent("Official socials & links for Cybersecurity Club JNTUH:")}&url=${encodedUrl}`,
      className: "share-btn-x",
    },
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="share-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title"
      >
        {/* Header */}
        <div className="share-modal-header">
          <div className="share-title-group">
            <span className="material-symbols-outlined share-header-icon" aria-hidden="true">qr_code_2</span>
            <div>
              <span id="share-modal-title" className="share-header-title">Share Club Portal</span>
              <p className="share-header-sub">csc-club-jntuh.github.io</p>
            </div>
          </div>
          <button
            className="share-close-icon-btn"
            onClick={onClose}
            aria-label="Close share dialog"
            type="button"
          >
            <span className="material-symbols-outlined" aria-hidden="true">close</span>
          </button>
        </div>

        {/* Real Scannable QR Code */}
        <div className="share-qr-container">
          <div className="qr-badge-wrapper">
            <svg
              className="qr-svg"
              viewBox="0 0 37 37"
              shapeRendering="crispEdges"
              role="img"
              aria-label="QR Code link to csc-club-jntuh.github.io"
            >
              <path fill="#ffffff" d="M0 0h37v37H0z" />
              <path
                stroke="#0b1c30"
                strokeWidth="1"
                d="M4 4.5h7m2 0h1m1 0h1m1 0h1m2 0h5m1 0h7M4 5.5h1m5 0h1m1 0h4m2 0h3m1 0h2m2 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h6m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m3 0h2m1 0h3m2 0h1m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h1m3 0h2m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m3 0h4m4 0h3m1 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M15 11.5h1m1 0h2m1 0h5M4 12.5h1m1 0h1m1 0h1m1 0h1m2 0h4m1 0h2m1 0h1m6 0h1m2 0h1M4 13.5h3m4 0h1m1 0h1m1 0h2m1 0h2m4 0h3m2 0h1m2 0h1M7 14.5h1m2 0h1m1 0h1m3 0h2m4 0h1m1 0h1m1 0h3m1 0h3M5 15.5h1m2 0h2m2 0h1m3 0h1m2 0h1m1 0h4m1 0h1m1 0h1m2 0h1M5 16.5h1m3 0h5m2 0h1m3 0h2m3 0h2m2 0h1m1 0h2M8 17.5h2m4 0h4m1 0h4m1 0h4m1 0h1m2 0h1M4 18.5h4m2 0h1m1 0h4m2 0h3m3 0h2m1 0h1m1 0h1m1 0h2M4 19.5h1m1 0h1m5 0h1m2 0h1m1 0h2m1 0h2m2 0h2m1 0h1m1 0h1m1 0h1M4 20.5h3m2 0h3m3 0h2m1 0h4m1 0h4m2 0h1m1 0h2M5 21.5h2m1 0h2m1 0h1m2 0h1m3 0h2m4 0h1m1 0h1m2 0h2m1 0h1M4 22.5h1m3 0h4m4 0h2m4 0h1m1 0h4m3 0h2M5 23.5h4m3 0h2m6 0h2m5 0h1m1 0h1m1 0h1M4 24.5h1m1 0h1m1 0h3m2 0h1m2 0h1m2 0h3m1 0h6M12 25.5h4m1 0h1m2 0h5m3 0h1m1 0h3M4 26.5h7m2 0h2m3 0h1m4 0h2m1 0h1m1 0h2m1 0h2M4 27.5h1m5 0h1m3 0h1m1 0h4m1 0h2m1 0h1m3 0h2m1 0h1M4 28.5h1m1 0h3m1 0h1m1 0h1m2 0h2m1 0h4m2 0h5m3 0h1M4 29.5h1m1 0h3m1 0h1m3 0h5m1 0h2m6 0h1m1 0h3M4 30.5h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h3m1 0h4m3 0h3m2 0h1M4 31.5h1m5 0h1m6 0h2m1 0h2m1 0h3m2 0h1m2 0h1M4 32.5h7m1 0h2m1 0h3m1 0h4m1 0h1m3 0h1m2 0h2"
              />
            </svg>
          </div>
          <span className="qr-caption">SCAN WITH PHONE CAMERA</span>
        </div>

        {/* URL Input with Copy Button */}
        <div className="share-input-row">
          <input
            className="share-url-input"
            type="text"
            readOnly
            value={portalUrl}
            onClick={(e) => e.target.select()}
            aria-label="Portal URL"
          />
          <button
            className={`share-copy-btn ${copied ? "copied" : ""}`}
            onClick={handleCopy}
            type="button"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Quick Social Share Channels */}
        <div className="share-quick-row">
          {socialChannels.map((ch) => (
            <a
              key={ch.name}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`share-channel-btn ${ch.className}`}
              title={`Share on ${ch.name}`}
              aria-label={`Share on ${ch.name}`}
            >
              {ch.icon}
              <span className="channel-name">{ch.name}</span>
            </a>
          ))}
        </div>

        {/* System Native Share Button */}
        <button
          className="native-share-btn"
          onClick={handleNativeShare}
          type="button"
        >
          <span className="material-symbols-outlined" aria-hidden="true">send_to_mobile</span>
          <span>More Share Options</span>
        </button>
      </div>
    </div>
  );
}
