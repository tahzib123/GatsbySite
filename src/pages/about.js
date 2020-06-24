import React from "react";
import Navbar from '../components/navbar';
import aboutStyles from '../styles/about.module.css';

const About = () => {
  return(
    <div>
      <Navbar />
      <div className = {aboutStyles.container}>
        <h1 className = {aboutStyles.aboutTitle}>About</h1>
        <p className = {aboutStyles.aboutText}>The purpose of this site is to help you find the best gifts for your friends or family. The site uses affiliate links from <span><a href = "https://www.amazon.com/" rel="noreferrer" target="_blank" className = {aboutStyles.spantext}>Amazon</a></span> which help
            support us when you make a purchase. We make sure that all the products on the site are worth your hard earned money. Our site is always updated with new products every week.
        </p>
      </div>
    </div>
  )
}

export default About;