import React from "react";
import categoryStyles from "../styles/categories.module.css";

const categoryList = () => {
    return(
        <div className = {categoryStyles.container}>

            <ul className = {categoryStyles.ulStyle}>
                <li className = {categoryStyles.listItems}>ALL</li>
                <li className = {categoryStyles.listItems}>TECH</li>
                <li className = {categoryStyles.listItems}>TOOLS</li>
                <li className = {categoryStyles.listItems}>BUDGET</li>
                <li className = {categoryStyles.listItems}>UTILITY</li>
                <li className = {categoryStyles.listItems}>VEHICLES</li>
                <li className = {categoryStyles.listItems}>AUTOMATION</li>
            </ul>  
      
        </div>
    )
}
export default categoryList;



