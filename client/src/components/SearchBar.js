import React from 'react'; 
import './SearchBar.css'

const id = 'searchbar'
const SearchBar = ({searchString, onChange}) => {
  return ( 
      <input id={id} 
             onChange={()=> {
               onChange(document.getElementById(id).value.toLowerCase())
             }}
             className="searchBar" 
             type="text" 
             placeholder="Search"/>
  )
}

export default SearchBar
