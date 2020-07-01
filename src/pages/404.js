import React from "react";
import Navbar from '../components/navbar';
import aboutStyles from '../styles/about.module.css';

const ErrorPage = () => {
  return(
    <div>
      <Navbar />
      <div className = {aboutStyles.container}>
        <h1 className = {aboutStyles.aboutTitle}>404 Error</h1>
        <p className = {aboutStyles.aboutText}>If you see this page then something must have went wrong.</p>
      </div>
    </div>
  )
}

export default ErrorPage;