import React from "react";
import Banner from "../../Components/Banners/Banner";
import Cards from "../Cards/Cards";
import classes from "../Home/Home.module.scss";
import accueilImage from "../../Images/banner1.png";

function Home() {
    const isHomePage = true; // Ajoutez une variable pour indiquer que c'est la page d'accueil

    return (
        <div className={classes.Home}>
            {isHomePage ? (
                <Banner
                    image={accueilImage}
                    alt="Bannière d'accueil"
                />
            ) : null}
            <div className={classes.bannerTitle}>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <Cards />
        </div>
    );
}

export default Home;



