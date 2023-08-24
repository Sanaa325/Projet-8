import React from "react";
import classes from "./Header.module.scss";
import logo  from "../../Images/LOGO.png";
import Navigation from "./Navigation/Navigation";


function Header() {
    return (
        <header className={classes.Header}>
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <Navigation />
            </nav>
        </header>
    );
}

export default Header;