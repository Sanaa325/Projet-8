import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./NavigationItem.module.scss";

function NavigationItem(props) {
    const location = useLocation();
    return (
        <li className={classes.NavigationItem}>
            <Link to={props.to} className={location.pathname===props.to ?'active':""}>
                {props.children}
            </Link>
        </li>
    );
}

export default NavigationItem;

