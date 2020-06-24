import React from "react";
import Navbar from '../components/navbar';
import aboutStyles from '../styles/about.module.css';

const Contact = () => {
  return(
    <div>
      <Navbar />
      <div className = {aboutStyles.container}>
        <h1 className = {aboutStyles.aboutTitle}>Contact</h1>
        <p className = {aboutStyles.aboutText}>The best way to reach us is by emailing at <span className = {aboutStyles.spantext}>business@g4g.com</span></p>
      </div>
    </div>
  )
}

export default Contact;