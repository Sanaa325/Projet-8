import React from "react";
import Banner2 from "../../Components/Banners/Banner2";
import Collapse from "../../Components/Collapse/Collapse";
import classes from "../About/About.module.scss";




function About() {
    const fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const sécurité = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


    return (
        <>
            <Banner2 />

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