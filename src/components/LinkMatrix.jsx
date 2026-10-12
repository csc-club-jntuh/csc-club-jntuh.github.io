import React from "react";
import LinkCard from "./LinkCard";

export default function LinkMatrix({ links, onLinkClick }) {
  return (
    <section className="link-matrix-section">
      <div className="links-grid">
        {links.map((item) => (
          <LinkCard key={item.id} item={item} onLinkClick={onLinkClick} />
        ))}
      </div>
    </section>
  );
}
