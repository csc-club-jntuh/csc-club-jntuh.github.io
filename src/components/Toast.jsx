import React from "react";

export default function Toast({ message, isVisible }) {
  return (
    <div
      className={`toast-container ${isVisible ? "toast-visible" : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className="material-symbols-outlined toast-icon">check_circle</span>
      <span className="toast-text">{message}</span>
    </div>
  );
}
