import  React  from "react";
import productStyles from '../styles/productCard.module.css';
import Img from "gatsby-image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';





const ProductCard = ({productData}) => {
    
    return(
            <li className = {productStyles.container}>
                
                <div className = {productStyles.gridS1}>
                    <Img fluid = {productData.node.productImage.fluid}  className = {productStyles.productImage} alt = "product" />
                </div>
                <div className = {productStyles.gridS2}>
                    <h1 className = {productStyles.productTitle}>  {productData.node.productTitle}  </h1>
                    <div className = {productStyles.productDesc}>
                        {documentToReactComponents(productData.node.productDescription.json)}
                    </div>
                    
                </div>
                <div className = {productStyles.gridS3}>
                    <div className = {productStyles.gridS3Tags}>
                        <ul className = {productStyles.ulStyle}>
                            {productData.node.productTags.map(tag => {
                                return <li className = {productStyles.hashtags}> #{tag.toUpperCase()} </li>
                            })}
                            
                        </ul>                   
                    </div>
                    <div className = {productStyles.gridS3Link} >
                        <form action={productData.node.productLink.productLink} method="get" target="_blank">
                            <button className = {productStyles.amazonLink} type="submit">Check on Amazon</button>
                        </form>                    
                    </div>
                </div>
            </li>
    )


};

export default ProductCard; 