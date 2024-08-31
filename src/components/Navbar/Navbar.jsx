import React, { useState, useEffect } from 'react';
import Logo from '../../img/YemekRehberi.png';
import '../../dist.css/Navbar.css';
import { Link } from 'react-router-dom';
import mealsData from '../../data/meals.json';
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://qlgwpthiwclfbgzzjmjw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsZ3dwdGhpd2NsZmJnenpqbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2MDUzOTIsImV4cCI6MjA0MDE4MTM5Mn0.N9-IULDnpuUWR_PNXvXyzdTTIMRsxRAxVGrAagaJn4k"
);

const randomMeal = mealsData.meals[Math.floor(Math.random() * mealsData.meals.length)];

const Navbar = () => {
  const [navActive, setNavActive] = useState("nav__links");
  const [btnActive, setBtnActive] = useState("nav__hamburger");
  const [user, setUser] = useState(null);

  const navToggle = () => {
    setNavActive((prev) => prev === "nav__links" ? "nav__links nav__active" : "nav__links");
    setBtnActive((prev) => prev === "nav__hamburger" ? "nav__hamburger is-active" : "nav__hamburger");
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleAuthAction = async () => {
    if (user) {
      await supabase.auth.signOut();
      setUser(null);
      // Kullanıcı çıkış yaptıktan sonra sayfayı yeniden yükle
      window.location.reload();
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="nav__brand">
        <img src={Logo} alt="Logo" />
        <h2 id="idfood">Yemek</h2><h2 className="logo__last">Rehberi</h2>
      </Link>

      <ul className={navActive}>
        <li><Link to="/" onClick={navToggle} className="links">Ana Sayfa</Link></li>
        <li><Link to="/categories" onClick={navToggle} className="links">Kategori</Link></li>
        <li><Link to={`/random/${randomMeal.idMeal}`} onClick={navToggle} className="links">Rastgele</Link></li>
        <li><Link to="/liked" onClick={navToggle} className="links">Beğendikleriniz</Link></li>
        <li onClick={() => { navToggle(); handleAuthAction(); }} className="links">
          <span className='links'> {user ? 'Çıkış Yap' : 'Giriş Yap'}</span>
        </li>
      </ul>

      <button onClick={navToggle} className={btnActive}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Navbar;
