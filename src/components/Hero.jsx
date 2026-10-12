import React, { useState, useEffect, useCallback, useRef } from "react";

const PRIMARY_WORD = "Cybersecurity";
const ACCENT_WORD = "Club";
const FULL_TARGET = `${PRIMARY_WORD} ${ACCENT_WORD}`;

const CYBER_GLYPHS = [
  "🛡", "🔒", "⚡", "🔑", "📡", "⬡", "⌘", "0", "1", "$", ">", "#", "λ", "ø", "§", "%", "≠", "&"
];

export default function Hero() {
  const [displayText, setDisplayText] = useState({
    primary: PRIMARY_WORD,
    accent: ACCENT_WORD,
  });
  const isScramblingRef = useRef(false);
  const intervalRef = useRef(null);

  const runDecodeEffect = useCallback(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      let currentPrimary = "";
      let currentAccent = "";

      for (let i = 0; i < FULL_TARGET.length; i++) {
        const char = FULL_TARGET[i];
        const isAccent = i > PRIMARY_WORD.length;

        if (i < iteration) {
          if (isAccent) {
            currentAccent += char;
          } else if (i < PRIMARY_WORD.length) {
            currentPrimary += char;
          }
        } else {
          const randomGlyph = CYBER_GLYPHS[Math.floor(Math.random() * CYBER_GLYPHS.length)];
          if (isAccent) {
            currentAccent += randomGlyph;
          } else if (i < PRIMARY_WORD.length) {
            currentPrimary += randomGlyph;
          }
        }
      }

      setDisplayText({
        primary: currentPrimary,
        accent: currentAccent,
      });

      iteration += 1;

      if (iteration > FULL_TARGET.length + 3) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setDisplayText({
          primary: PRIMARY_WORD,
          accent: ACCENT_WORD,
        });
        isScramblingRef.current = false;
      }
    }, 45);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      runDecodeEffect();
    }, 200);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [runDecodeEffect]);

  return (
    <section className="hero-section" id="hero-section" aria-labelledby="hero-title">
      <div className="hero-content">
        {/* Hero Title with Scrambled Decoder & Blinking Cursor */}
        <h1 className="hero-title" id="hero-title" aria-label="Cybersecurity Club">
          <span className="hero-text-primary">{displayText.primary}</span>{" "}
          <span className="hero-text-accent">
            {displayText.accent}
            <span className="hero-cursor" aria-hidden="true"></span>
          </span>
        </h1>

        {/* Editorial Subtitle */}
        <p className="hero-subtitle">
          Official links to club's socials &amp; student community hubs.
        </p>
      </div>
    </section>
  );
}
