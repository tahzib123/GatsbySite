import  React  from "react";
import lavalamp from '../images/lavalamp.jpeg';
import productStyles from '../styles/productCard.module.css';

const productCard = () => {
    return(
        <div className = {productStyles.container}>
            <div className = {productStyles.gridS1}>
                <img src = {lavalamp} className = {productStyles.productImage} alt = "product" />
            </div>
            <div className = {productStyles.gridS2}>
                <h1 className = {productStyles.productTitle}>Lava Lamp Purple/Red</h1>
                <p className = {productStyles.productDesc}>The 14.5-inch Classic Lamps from Lava the Original use iconic shape, elegantly flowing colored wax, and decorative glass to fill any space with the drama of motion and the beauty of soft colored light.
                    
                </p>
            </div>
            <div className = {productStyles.gridS3}>
                <div className = {productStyles.gridS3Tags}>
                    <ul className = {productStyles.ulStyle}>
                        <li className = {productStyles.hashtags}>#Tech</li>
                        <li className = {productStyles.hashtags}>#Budget</li>

                    </ul>                   
                </div>
                <div className = {productStyles.gridS3Link} >
                    <form action="https://www.w3docs.com/" method="get" target="_blank">
                        <button className = {productStyles.amazonLink} type="submit">Check on Amazon</button>
                    </form>                    
                </div>
                
            </div>




        </div>



    )


}

export default productCard; 