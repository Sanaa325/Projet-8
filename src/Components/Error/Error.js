import React from "react";
import classes from "./Error.module.scss";
import { Link } from "react-router-dom"


function Error() {
    return (
        <div className={classes.error}>
            <span>404</span>
            <h3>Oups! La page que vous demandez n'existe pas.</h3>
            <p><Link to="/">Retourner sur la page d’accueil</Link></p>
        </div>
    )


}

export default Error;