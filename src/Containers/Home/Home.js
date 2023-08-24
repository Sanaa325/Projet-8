import React from "react";
import Banner1 from "../../Components/Banners/Banner1";
import Cards from "../Cards/Cards";
import classes from "../Home/Home.module.scss";

function Home() {
    return (
        <div className={classes.Home}>
            <Banner1 />

            <div className={classes.bannerTitle}>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <Cards />
        </div>
    );
}

export default Home

//return logement[1].title


