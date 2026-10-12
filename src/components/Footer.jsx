import React from "react";
import { CLUB_INFO } from "../data/links";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-right full-width">
          <div className="footer-institution">{CLUB_INFO.institution}</div>
          <div className="footer-status-line">
            <span>Kukatpally, Hyderabad, Telangana 500085</span>
          </div>
          <div className="footer-copyright">
            © {CURRENT_YEAR} {CLUB_INFO.name} JNTUHCEH. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
