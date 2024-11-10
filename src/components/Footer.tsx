import React from 'react';
import "../app/stylying/footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Alishba's Portfolio</h2>
        </div>
        <div className="footer-content">
          <ul className="social-links">
            <li>
              <a 
                href="https://www.linkedin.com/in/alishba-majeed-5099b8310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit LinkedIn"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/alishbamajeed" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit GitHub"
              >
                GitHub
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/alishbah.rajput.12?mibextid=ZbWKwL" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Visit Facebook"
              >
                Facebook
              </a>
            </li>
          </ul>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Alishba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
