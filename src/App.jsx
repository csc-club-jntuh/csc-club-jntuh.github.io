import React, { useState, useEffect, useRef } from "react";
import CyberDoodleBackground from "./components/CyberDoodleBackground";
import FloatingActions from "./components/FloatingActions";
import Hero from "./components/Hero";
import LinkMatrix from "./components/LinkMatrix";
import ShareModal from "./components/ShareModal";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import { SOCIAL_LINKS } from "./data/links";

export default function App() {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("csc_theme");
      if (savedTheme) return savedTheme === "dark";
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });
  const [toast, setToast] = useState({ isVisible: false, message: "" });
  const toastTimerRef = useRef(null);

  // Sync theme with system bar meta tag and localStorage
  useEffect(() => {
    try {
      localStorage.setItem("csc_theme", darkMode ? "dark" : "light");
    } catch {
      // Ignore private browsing storage restrictions
    }
    const metaTheme = document.getElementById("meta-theme-color");
    if (metaTheme) {
      metaTheme.setAttribute("content", darkMode ? "#070b12" : "#006948");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const showToast = (message) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToast({ isVisible: true, message });
    toastTimerRef.current = setTimeout(() => {
      setToast({ isVisible: false, message: "" });
      toastTimerRef.current = null;
    }, 2800);
  };

  const handleLinkClick = (item) => {
    showToast(`Redirecting to ${item.title}...`);
  };

  return (
    <div className={`app-root ${darkMode ? "dark-theme" : "light-theme"}`}>
      {/* Accessible Skip to Content for Keyboard Users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Repeating Cyber Doodle Wallpaper Pattern */}
      <CyberDoodleBackground />

      {/* Floating Theme and Share Pills */}
      <FloatingActions
        darkMode={darkMode}
        onToggleTheme={toggleDarkMode}
        onOpenShare={() => setIsShareOpen(true)}
      />

      {/* Main Page Content */}
      <main className="main-content" id="main-content">
        {/* Hero Section with Decrypt Animation */}
        <Hero />

        {/* Link Matrix Section */}
        <LinkMatrix links={SOCIAL_LINKS} onLinkClick={handleLinkClick} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Share Popover / Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        onShowToast={showToast}
      />

      {/* Floating Status Toast */}
      <Toast message={toast.message} isVisible={toast.isVisible} />
    </div>
  );
}
