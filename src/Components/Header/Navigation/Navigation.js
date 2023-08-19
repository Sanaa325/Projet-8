//Libraires
import React from "react";
import classes from "./Navigation.module.css";

//Components
import NavigationItem from "./NavigationItem/NavigationItem";

function Navigation() {
    return (
        <ul className={classes.Navigation}>
            <NavigationItem to="/">Accueil</NavigationItem>
            <NavigationItem to="/about">À propos</NavigationItem>
        </ul>
    )

}

export default Navigation;