import React from "react";
import searchBarStyles from "../styles/searchBar.module.css";



const searchBar = ({handleChange, handleSubmit}) => {
    return(
        <div className = {searchBarStyles.formContainer}>
            <form id = "searchForm"  onSubmit = {handleSubmit}>
                {/* eslint-disable-next-line  */}
                <input className = {searchBarStyles.searchBox} type = "text" placeholder = "Search for a Product" onChange = {handleChange} />
                <button className = {searchBarStyles.submitButton} type = "submit" >Go</button>
            </form>
        </div>
    )
}
export default searchBar;
