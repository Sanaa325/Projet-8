import React from "react";
import classes from "./Footer.module.css";
import logo_footer from "../../Images/logo_footer.png";

function Footer() {
    return (
        <footer className={classes.Footer}>
            <div className={classes.img_footer}><img src={logo_footer} alt='Logo footer' /></div>
            <div className={classes.arr}>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;