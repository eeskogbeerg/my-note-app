import React from "react";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import Time from "./Time"


function Header() {

  return (
    <header> 
       <Time />
      <h1>
        <FilterVintageIcon 
        fontSize="large" />
         
        Save a note
        
        <FilterVintageIcon  
        fontSize="large"/>
      </h1>
    </header>
    
  );
}

export default Header;