import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__box">
          <a className="app__link" href="netflix">
            Netflix
          </a>
        </div>
        <div className="footer__box">
          <a className="app__link" href="whatsapp">
            Whatsapp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
