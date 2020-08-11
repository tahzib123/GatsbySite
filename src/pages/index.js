import React, {useState} from "react";
import Navbar from '../components/navbar';
import  WelcomeBanner  from "../components/welcomebanner";
import CategoryList from "../components/categories";
import ProductCard from "../components/productCard";
import ProductCardList from "../components/productCardList";
import SearchBar from "../components/searchBar";
import Filters from "../components/filters";
import {graphql, useStaticQuery } from 'gatsby';
import { Helmet } from "react-helmet";


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
                  productLink{
                    productLink
                  }
                  productAgeRanges
                  productBudget
              }
          }
      }
    }
  `);
  //make a product card out of all the contentful posts from graphql query
  const myProductArray = data.allContentfulPostInfo.edges.map((edge) => {
    return (
        <ProductCard key = {edge.node.slug.toString()} productData = {edge} />
    )
  });
  

  //---------------------------------------------------------------------- State hooks ------------------------------------------------------------------------ //
  //update the products displayed based on categories and filters/searches
  const [productArray, setProductArray] = useState(myProductArray);
  //for the searchBox value
  const [searchField, setSearchField] = useState("");
  //category currently active
  const [activeIndex, setIndex] = useState(0);
  //if clear filter button should show up 
  const [showClearFilter, setClearFilter] = useState(0);
  //reseting age select drop down
  const [ageValue, setAgeValue] = useState("-1");
  //reseting Budget select drop down
  const [budgetValue, setBudgetValue] = useState("-1");
  //used so we can reset back to current category products when clear filters is clicked
  const [currentCategoryProducts, setCurrentCategoryProducts] = useState(myProductArray);


  // ---------------------------------------------------------------  Helper Functions ------------------------------------------------------------------------ //

  // const mapIndexToCategory = (index) => {
  //   if(index === 0){ return "ALL"};
  //   if(index === 1){ return "TECH"};
  //   if(index === 2){ return "BUDGET"};
  //   if(index === 3){ return "VEHICLES"};
  //   if(index === 4){ return "TOOLS"};
  //   if(index === 5){ return "AUTOMATION"};
  //   if(index === 6){ return "CRAFTS"};
  // }



  // ---------------------------------------------------------------  Callback Functions ------------------------------------------------------------------------ //

  //filters the product list based on if the keyword is contained in the products tag list and updates state
  //runs when a different category is picked. 
  const updateProducts = (filterKeyword, index) => {
    if(filterKeyword === "ALL"){
      setCurrentCategoryProducts(myProductArray);
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
      setCurrentCategoryProducts(filteredProducts);
      setProductArray(filteredProducts);
    }
    
    setIndex(index);
  }


  //handle when the value of the search bar changes
  const handleChange = (e) => {
    setSearchField(e.target.value);
  }
  //when search bar is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("searchForm").reset();
    var filteredProducts = productArray.filter((product) => {
      if(product.props.productData.node.productTitle.toLowerCase().includes(searchField.toLowerCase())){
        return product;
      }
      return null;
    })
    setProductArray(filteredProducts);
  }
  
  const filterByAge = (event) => {
    if(showClearFilter !== 1) {setClearFilter(1);}
    
    if(event.target.value === "-1"){ return; }

    var filteredProducts = productArray.filter((product) => {
      
      if(product.props.productData.node.productAgeRanges.includes(event.target.value) ){
        return product;
      }
      return null;
    })
    setProductArray(filteredProducts);
    setAgeValue(event.target.value);
    
  }
  const filterByBudget = (event) => {
    if(showClearFilter !== 1) {setClearFilter(1);}
    
    if(event.target.value === "-1"){ return; }

    var filteredProducts = productArray.filter((product) => {
      
      if(product.props.productData.node.productBudget === event.target.value){
        return product;
      }
      return null;
    })
    setProductArray(filteredProducts);
    setBudgetValue(event.target.value);
  }


  const clearFilters = () => {
    setProductArray(currentCategoryProducts);
    setClearFilter(0);
    setAgeValue("-1");
    setBudgetValue("-1");
    
  }

  // ---------------------------------------------------------------  ================ ------------------------------------------------------------------------ //



  
  

  return(
    <div>
      <Helmet htmlAttributes={{ lang: 'en' }}>
          <meta charSet="utf-8" />
          <meta name="title" content="The Best Gadgets For Men in 2020 - Ultimate Gift Finder"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />   {/* might not work */}
          <meta name = "description" content = "The ultimate way to find affordable gadgets for men. Perfect for any occassion and plenty of options for everyone." />
          <title>The Best Gadgets For Men in 2020 - Ultimate Gift Finder</title>
      </Helmet>
      <Navbar />
      <WelcomeBanner />
      <SearchBar handleChange = {handleChange} handleSubmit = {handleSubmit} />
      <CategoryList onCategoryChange = {updateProducts} activeIndex = {activeIndex}  />
      <Filters filterByBudget = {filterByBudget} filterByAge = {filterByAge} clearFilters = {clearFilters} showClearFilter = {showClearFilter} ageValue = {ageValue} budgetValue = {budgetValue}/>
      <ProductCardList productArray = {productArray} />
      

    </div>
  )
}

export default Index
