import React from "react";
import categoryStyles from "../styles/categories.module.css";

const categoryList = ({onCategoryChange}) => {
    return(
        <div className = {categoryStyles.container}>

            <ul className = {categoryStyles.ulStyle}>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} onClick = {() => onCategoryChange("ALL")}>ALL</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} onClick = {() => onCategoryChange("TECH")}>TECH</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} onClick = {() => onCategoryChange("BUDGET")}>BUDGET</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} onClick = {() => onCategoryChange("VEHICLES")}>VEHICLES</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} onClick = {() => onCategoryChange("TOOLS")}>TOOLS</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} onClick = {() => onCategoryChange("AUTOMATION")}>AUTOMATION</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} onClick = {() => onCategoryChange("CRAFTS")}>CRAFTS</button></li>
            </ul>  
      
        </div>
    )
}
export default categoryList;



