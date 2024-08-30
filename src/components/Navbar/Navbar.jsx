import React, { useState } from 'react';
import Logo from '../../img/YemekRehberi.png'
import '../../dist.css/Navbar.css'
import {Link} from 'react-router-dom'
import mealsData from '../../data/meals.json';
const featuredMeals = mealsData.meals

const randomMeal = featuredMeals[Math.floor(Math.random() * featuredMeals.length)];
const Navbar = () => {
    console.log(featuredMeals)


    const [navActive, setNavActive] = useState("nav__links");
    const [btnActive, setBtnActive] = useState("nav__hamburger");

    const navToggle = () => {
        navActive === "nav__links" ? setNavActive("nav__links nav__active")
        : setNavActive("nav__links")

        btnActive === "nav__hamburger" ? setBtnActive("nav__hamburger is-active")
        : setBtnActive("nav__hamburger")
    }


    return (
        <div className="navbar">
            <Link to="/"className="nav__brand">
                <img src={Logo} alt="Logo"/>
                <h2 id="idfood">Yemek</h2><h2 className="logo__last">Rehberi</h2>
            </Link>

            <ul className={navActive}>
                <li><Link to="/" onClick={navToggle} className="links" >Ana Sayfa</Link></li>
                <li><Link to="/categories" onClick={navToggle} className="links" >Kategori</Link></li>
                <li><Link to={`/random/${randomMeal.idMeal}`} onClick={navToggle} href="/" className="links" >Rastgele</Link></li>
                <li><Link to="/liked" onClick={navToggle} href="/" className="links" >Beğendikleriniz</Link></li>
              
            </ul>
            <button onClick={navToggle} className={btnActive}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
}

export default Navbar;
