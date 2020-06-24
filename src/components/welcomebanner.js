import React from "react";
import bannerStyles from '../styles/banner.module.css';

const welcomebanner = () => {
    return(
        <div className = {bannerStyles.container}>
            <h1 className = {bannerStyles.bannerTitle}>Welcome to</h1>
            <h1 className = {bannerStyles.bannerTitle}>Gadgets <span className = {bannerStyles.four}>4</span> Guys</h1>
            <p className = {bannerStyles.bannerDesc}>The best way to find gifts for you or a friend. Whether it be for christmas, a birthday or special occassion we have got you covered. This site is always being updated with new products for you to find.</p>
        </div>
    )


}

export default welcomebanner;