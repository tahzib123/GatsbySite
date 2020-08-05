import React from "react";
import filterStyles from "../styles/filters.module.css";

//change state when a button is clicked
const Filters = ({filterByBudget,filterByAge, clearFilters, showClearFilter, ageValue, budgetValue}) => {
    
    return(
        <div className = {filterStyles.container}>
            <h1 className = {showClearFilter === 1 ? filterStyles.activeTitle : filterStyles.inactiveTitle}>Filtered Products</h1>
            {/* eslint-disable-next-line  */}
            <select name="ages" className = {filterStyles.ages} onChange = {filterByAge} value = {ageValue} id="ages">
                <option className = {filterStyles.options} label = "Age Range" value="-1">Age Range</option>
                <option className = {filterStyles.options} label = "12-20" value="12-20" >12-20</option>
                <option className = {filterStyles.options} label = "21-40" value="21-40" >21-40</option>
                <option className = {filterStyles.options} label = "41-50" value="41-50" >41-50</option>
                <option className = {filterStyles.options} label = "51+" value="51+" >51+</option>
            </select>     
            {/* eslint-disable-next-line  */}
            <select name="budget" className = {filterStyles.budget} onChange = {filterByBudget} value = {budgetValue} id="budget">
                <option className = {filterStyles.options} label = "Price" value="-1" >Price</option>
                <option className = {filterStyles.options} label = "cheap" value="cheap">Cheap</option>
                <option className = {filterStyles.options} label = "average" value="average">Average</option>
                <option className = {filterStyles.options} label = "expensive" value="expensive">Expensive</option>
            </select>  
            <button onClick = {clearFilters} className = {showClearFilter === 1 ? filterStyles.activeFilterClear : filterStyles.inactiveFilterClear}>clear filters</button>   
            
        </div>
    )
}
export default Filters;
