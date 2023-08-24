import React from "react";
import banner2 from "../../Images/banner2.png";
import classes from "../Banners/Banner.module.scss";

function Banner2() {
    return (
        
            <img src={banner2} className={`${classes.Banner} ${classes.darken}`} alt="Bannière2" />
            
        
    );
    
}


export default Banner2;