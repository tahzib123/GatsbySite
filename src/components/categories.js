import React from "react";
import categoryStyles from "../styles/categories.module.css";

//change state when a button is clicked
const categoryList = ({onCategoryChange, activeIndex}) => {
    
    return(
        <div className = {categoryStyles.container}>

            <ul className = {categoryStyles.ulStyle}>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 0 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("ALL", 0)}>ALL</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 1 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("TECH", 1)}>TECH</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 2 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("GAMES", 2)}>GAMES</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 3 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("FASHION", 3)}>FASHION</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 4 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("OUTDOORS", 4)}>OUTDOORS</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 5 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("HOME IMPOVEMENT", 5)}>HOME</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 6 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("CRAFTS", 6)}>CRAFTS</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 7 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("SPORTS", 7)}>SPORTS</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 8 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("SELF CARE", 8)}>SELF CARE</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 9 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("EVERYDAY", 9)}>EVERYDAY</button></li>
                <li className = {categoryStyles.listItems} ><button className = {categoryStyles.categoryButtons} id = {activeIndex === 10 ? categoryStyles.active : categoryStyles.inactive} onClick = {() => onCategoryChange("TOOLS", 10)}>TOOLS</button></li>
            </ul>  
      
        </div>
    )
}
export default categoryList;






