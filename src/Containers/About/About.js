import React from "react";
import Banner from "../../Components/Banners/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import classes from "../About/About.module.scss";
import aboutImage from "../../Images/banner2.png";




function About() {
    const isHomePage = false; // Ajoutez une variable pour indiquer que ce n'est pas la page d'accueil
    const fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const sécurité = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


    return (
        <>
            <div className={classes.about}>
                {isHomePage ? null : (
                    <Banner
                        image={aboutImage}
                        alt="Bannière de la page À propos"
                    />
                )}
            </div>

            <div className={classes.rencollapse}>
                <Collapse title="Fiabilité" content={fiabilité} />
            </div>
            <div className={classes.rencollapse}>
                <Collapse title="Respect" content={respect} />
            </div>
            <div className={classes.rencollapse}>
                <Collapse title="Service" content={service} />
            </div>
            <div className={classes.rencollapse}>
                <Collapse title="Sécurité" content={sécurité} />
            </div>


        </>
    )







}


export default About;