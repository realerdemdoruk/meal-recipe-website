import React, { useState } from 'react';
import Logo from '../../img/HeyMealLogo.png'
import '../../dist.css/Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {


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
            <Link to="/meal-recipe-website-reactjs/"className="nav__brand">
                <img src={Logo} alt="Logo"/>
                <h2>Hey</h2><h2 className="logo__last">Meal</h2>
            </Link>

            <ul className={navActive}>
                <li><Link to="/meal-recipe-website-reactjs/" onClick={navToggle} className="links" >Ana Sayfa</Link></li>
                <li><Link to="/meal-recipe-website-reactjs/categories" onClick={navToggle} className="links" >Kategori</Link></li>
                <li><Link to="/meal-recipe-website-reactjs/random" onClick={navToggle} href="/" className="links" >Rastgele</Link></li>
              
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
