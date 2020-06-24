import React from 'react';
import navbarStyles from '../styles/navbar.module.css';
import logo from '../images/logo3.png';
import { Link } from "gatsby"

const navbar = () => {
    return(
        <div className = {navbarStyles.container}>
            <Link to = "/"><img src = {logo} height = "50px" width ="72px;" alt = "logo" className = {navbarStyles.logo} /></Link>
            <nav>
                <ul>
                    <li className = {navbarStyles.navigationel}><Link to = "/" className = {navbarStyles.links} activeClassName={navbarStyles.active}>Home</Link></li>
                    <li className = {navbarStyles.navigationel}><Link to = "/about" className = {navbarStyles.links} activeClassName={navbarStyles.active}>About</Link></li>
                    <li className = {navbarStyles.navigationel}><Link to = "/contact" className = {navbarStyles.links} activeClassName={navbarStyles.active}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default navbar;