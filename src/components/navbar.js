import React from 'react';
import navbarStyles from '../styles/navbar.module.css';
import logo from '../images/logo10.png';
import { Link } from "gatsby"

const navbar = () => {
    
    return(
        <div className = {navbarStyles.container}>
            <Link to = "/"><img src = {logo} height = "100px" width ="100px" alt = "logo" className = {navbarStyles.logo} /></Link>
            <div className={navbarStyles.menuWrap}>
                {/* eslint-disable-next-line  */}
                <input type="checkbox" className={navbarStyles.toggler}></input>
                <div className={navbarStyles.hamburger}><div></div></div>
                <div className={navbarStyles.menu}>
                <div>
                    <div>
                        <ul className = {navbarStyles.linkList}>
                            <li><Link to = "/" className = {navbarStyles.links} activeClassName={navbarStyles.active}>Home</Link></li>
                            <li><Link to = "/about" className = {navbarStyles.links} activeClassName={navbarStyles.active}>About</Link></li>
                            <li><Link to = "/contact" className = {navbarStyles.links} activeClassName={navbarStyles.active}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default navbar;
