import React from "react";
import "./Footer.css";
import Logo from '../../img/YemekRehberi.png'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
      <div className="pg-footer">
        <footer className="footer">
          <svg
            className="footer-wave-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 100"
            preserveAspectRatio="none"
          >
            <path
              className="footer-wave-path"
              d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
            ></path>
          </svg>
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <a className="footer-logo-link"      href="www.erdemdoruk.me">

                  <img src={Logo} className="footerlogo" alt="Logo"/>
                </a>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name">Get Started</h2>
                <ul id="menu-get-started" className="footer-menu-list">
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me">Start</a>
                  </li>
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me">Documentation</a>
                  </li>
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me">Installation</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name">
                <Link to="/about"  className="links" >Hakkımızda</Link>

                </h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item">
                    {/* <a      href="www.erdemdoruk.me">Contact</a> */}
                    <Link to="/contact"  className="links" >İletişim</Link>
                  </li>
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me">News</a>
                  </li>
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name">Legal</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me">Privacy Notice</a>
                  </li>
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name">Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me" target="_blank" rel="noopener noreferrer">
                      Support Center
                    </a>
                  </li>
                  <li className="menu-item">
                    <a     href="www.erdemdoruk.me" target="_blank" rel="noopener noreferrer">
                      Service Status
                    </a>
                  </li>
                  <li className="menu-item">
                    <a     href="www.erdemdoruk.me">Security</a>
                  </li>
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me">Blog</a>
                  </li>
                  <li className="menu-item">
                    <a      href="www.erdemdoruk.me">Customers</a>
                  </li>
                  <li className="menu-item">
                    <a     href="www.erdemdoruk.me">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              {/* <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title">Let's Chat</h2>
                <p className="footer-call-to-action-description">
                  Have a support question?
                </p>
                <a
                  className="footer-call-to-action-button button"
                  href="www.erdemdoruk.me"
                  target="_self"
                >
                  Get in Touch
                </a>
              </div> */}
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title">Bize Ulaşın</h2>
                <p className="footer-call-to-action-link-wrapper">
                <a className="footer-call-to-action-link" href="mailto:erdemdoruk3@gmail.com">
                    erdemdoruk3@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;