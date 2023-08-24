import React from "react";
import banner1 from "../../Images/banner1.png"
import classes from "../Banners/Banner.module.scss";

function Banner1() {
    return (
        
            <img src={banner1} className={classes.Banner} alt="Bannière1" />
            
        
    );
    
}


export default Banner1;