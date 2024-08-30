import React from "react";
import "./Footer.css";
import Logo from "../../img/YemekRehberi.png";
import { Link } from "react-router-dom";
import mealsData from '../../data/meals.json'; // JSON dosyasını import et
const featuredMeals = mealsData.meals

// Rastgele yemek verisini seç
const randomMeal = featuredMeals[Math.floor(Math.random() * featuredMeals.length)];
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
              <a className="footer-logo-link" href="www.erdemdoruk.me">
                <img src={Logo} className="footerlogo" alt="Logo" />
              </a>
            </div>
            {/* <div className="footer-menu">
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
              </div> */}
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Hakkımızda</h2>
              <ul id="menu-company" className="footer-menu-list">
                <li className="menu-item">
                  <Link to="/about" className="links">
                    Hakkımızda
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact" className="links">
                    İletişim
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/vizyonVeMisyon" className="links">
                    Vizyon ve Misyon
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/sss" className="links">
                    Sıkça Sorulan Sorular
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <h2 className="footer-menu-name">Legal</h2>
              <ul id="menu-legal" className="footer-menu-list">
                <li className="menu-item">
                  <Link to="/gizlilikpolitikasi" className="links">
                    Gizlilik Politikası
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-content-column">
            <div className="footer-menu">
              <h2 className="footer-menu-name">Hızlı Bağlantılar</h2>
              <ul id="menu-quick-links" className="footer-menu-list">
                <li className="menu-item">
                  <Link to="/" className="links">
                    Ana Sayfa
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/categories" className="links">
                    Kategori
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to={`/random/${randomMeal.idMeal}`} className="links">
                    Rastgele
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/liked" className="links">
                    Beğendikleriniz
                  </Link>
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
                <a
                  className="footer-call-to-action-link"
                  href="mailto:erdemdoruk3@gmail.com"
                >
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
