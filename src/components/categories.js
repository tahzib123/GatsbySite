import React from "react";
import categoryStyles from "../styles/categories.module.css";

//change state when a button is clicked
const categoryList = ({onCategoryChange, index}) => {
    return(
        <div className = {categoryStyles.container}>

            <ul className = {categoryStyles.ulStyle}>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {index === 0 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("ALL", 0)}>ALL</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {index === 1 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("TECH", 1)}>TECH</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {index === 2 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("BUDGET", 2)}>BUDGET</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {index === 3 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("VEHICLES", 3)}>VEHICLES</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {index === 4 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("TOOLS", 4)}>TOOLS</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {index === 5 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("AUTOMATION", 5)}>AUTOMATION</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {index === 6 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("CRAFTS", 6)}>CRAFTS</button></li>
            </ul>  
      
        </div>
    )
}
export default categoryList;



