import React from "react";
import classes from "./Footer.module.scss";
import logo_footer from "../../Images/logo_footer.png";

function Footer({ noMargin }) {
    return (
        <footer className={`${classes.Footer} ${noMargin ? classes.noMargin : ""}`}>
            <div className={classes.img_footer}>
                <img src={logo_footer} alt='Logo footer' />
            </div>
            <div className={classes.arr}>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;