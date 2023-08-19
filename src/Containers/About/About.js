import React from "react";
import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse.js"



function About() {
const fiabilité = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const service = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
const sécurité = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."


    return (
        <>
            <Banner />
            <div>
                <Collapse title="Fiabilité" content={fiabilité} /> 
            </div>
            <div>
                <Collapse title="Respect" content={respect} /> 
            </div>
            <div>
                <Collapse title="Service" content={service} /> 
            </div>
            <div>
                <Collapse title="Sécurité" content={sécurité} /> 
            </div>

        </>
    )







}


export default About;