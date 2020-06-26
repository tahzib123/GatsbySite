import React from "react";
import Navbar from '../components/navbar';
import  WelcomeBanner  from "../components/welcomebanner";
import CategoryList from "../components/categories";
import ProductCard from "../components/productCard";
import ProductCardList from "../components/productCardList";
import {graphql, useStaticQuery } from 'gatsby';

/*
  query the data here and pass all the productCards to a component called productCardList.
  ex} 
  this.playerArray = jsonD.data.map(player => {

          return <Card 
          name = {player.first_name + " " + player.last_name} 
          id = {player.id}
          team = {player.team.full_name} 
          position = {player.position} 
          height = {player.height_feet + " ' " + player.height_inches}  
          weight = {player.weight_pounds} 
          imageLink = {imageQuery + player.last_name + '/' + player.first_name}
          showModal = {this.showModal} 
          /> 
  }

  when a category is selected we can trigger an onevent in the index.js that filters the productCards by tags then re-renders
  the page?

*/

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

  const productArray = data.allContentfulPostInfo.edges.map(edge => {
    return <ProductCard productData = {edge} /> 
  });
  


  return(
    <div>
      <Navbar />
      <WelcomeBanner />
      <CategoryList />
      <ProductCardList productArray = {productArray} />

    </div>
  )
}

export default Index
