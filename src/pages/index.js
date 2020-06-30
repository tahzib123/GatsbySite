import React, {useState} from "react";
import Navbar from '../components/navbar';
import  WelcomeBanner  from "../components/welcomebanner";
import CategoryList from "../components/categories";
import ProductCard from "../components/productCard";
import ProductCardList from "../components/productCardList";
import {graphql, useStaticQuery } from 'gatsby';



const Index = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
        allContentfulPostInfo {
            edges {
                node {
                    productTitle
                    productImage {
                        fluid(maxWidth: 1000) {
                          ...GatsbyContentfulFluid
                        }
                    }
                    productTags
                    slug
                    productDescription {
                        json
                    }
                    productUrl
                }
            }
        }
    }
  `);

  const myProductArray = data.allContentfulPostInfo.edges.map(edge => {
    return <ProductCard productData = {edge} /> 
  });
  
  const [productArray, setProductArray] = useState(myProductArray);

  const updateProducts = (filterKeyword) => {
    if(filterKeyword === "ALL"){
      setProductArray(myProductArray);
    }else{
      const filteredProducts = myProductArray.filter((product) => {
        const uppercaseTags = product.props.productData.node.productTags.map((tag) =>{
          return tag.toUpperCase();
        })
        if(uppercaseTags.includes(filterKeyword.toUpperCase())){
          return product;
        }
        return null;
      })
      setProductArray(filteredProducts);
    }
  }

  return(
    <div>
      <Navbar />
      <WelcomeBanner />
      <CategoryList onCategoryChange = {updateProducts} />
      <ProductCardList productArray = {productArray}  />

    </div>
  )
}

export default Index
