import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./NavigationItem.module.scss";

function NavigationItem(props) {
    const location = useLocation();
    return (
        <li className={classes.NavigationItem}>
            <Link to={props.to}  style={
                location.pathname === props.to ? { textDecoration: "underline" } : null}>
                {props.children}
            </Link>
        </li>
    );
}

export default NavigationItem;

