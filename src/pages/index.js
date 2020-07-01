import React, {useState} from "react";
import Navbar from '../components/navbar';
import  WelcomeBanner  from "../components/welcomebanner";
import CategoryList from "../components/categories";
import ProductCard from "../components/productCard";

import {graphql, useStaticQuery } from 'gatsby';
import { FixedSizeList as List } from "react-window";
import ProductCardList from "../components/productCardList";


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
  const Row = ({ index}) => (
    <div >
      {productArray[index]}
    </div>
  );


  //make a product card out of all the contentful posts
  const myProductArray = data.allContentfulPostInfo.edges.map((edge, index) => {
    return <ProductCard key = {index} productData = {edge} /> 
  });
  //state used to update the product list based on which category is selected
  const [productArray, setProductArray] = useState(myProductArray);

  //filters the product list based on if the keyword is contained in the products tag list and updates state
  //runs when a different category is picked. 
  

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
      <ProductCardList productArray = {productArray} />
      

    </div>
  )
}

export default Index
