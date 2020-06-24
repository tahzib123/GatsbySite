import React from "react";
import Navbar from '../components/navbar';
import  WelcomeBanner  from "../components/welcomebanner";
import CategoryList from "../components/categories";
import ProductCard from "../components/productCard";

const Index = () => {
  return(
    <div>
      <Navbar />
      <WelcomeBanner />
      <CategoryList />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default Index
