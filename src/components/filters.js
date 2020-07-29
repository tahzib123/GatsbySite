import React from "react";
import filterStyles from "../styles/filters.module.css";

//change state when a button is clicked
const Filters = ({filterByBudget,filterByAge, clearFilters, showClearFilter, ageValue}) => {
    console.log(ageValue);
    return(
        <div className = {filterStyles.container}>
            {/* eslint-disable-next-line  */}
            
            <h1 className = {filterStyles.title} >Filters:</h1>
            <button onClick = {clearFilters} className = {showClearFilter === 1 ? filterStyles.activeFilterClear : filterStyles.inactiveFilterClear}>clear filters</button>
            <select name="ages" className = {filterStyles.ages} onClick = {filterByAge}  id="ages">
                <option className = {filterStyles.options} disabled hidden value="">Age Range</option>
                <option className = {filterStyles.options} value="12-20" >12-20</option>
                <option className = {filterStyles.options} value="21-40" >21-40</option>
                <option className = {filterStyles.options} value="41-50" >41-50</option>
                <option className = {filterStyles.options} value="51+" >51+</option>
            </select>     
            <select name="budget" className = {filterStyles.budget} onClick = {filterByBudget} id="budget">
                <option className = {filterStyles.options} value="" >Budget</option>
                <option className = {filterStyles.options} value="cheap">cheap</option>
                <option className = {filterStyles.options} value="average">average</option>
                <option className = {filterStyles.options} value="expensive">expensive</option>
            </select>     
        </div>
    )
}
export default Filters;
