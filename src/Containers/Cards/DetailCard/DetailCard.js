import React from "react"
import { useParams } from "react-router-dom";
import logements from '../../../logements.json'
import Slideshow from "../../../Components/Slideshow/Slideshow";

function DetailCard() {
    {/* Récuperation toutes les infos du logement par rapport id */ }
    const { id } = useParams()
    const logement = logements.find((log) => log.id === id)


    return (

        <>
            {/* Carrousel d'images */}
            <Slideshow pictures={logement.pictures} />

            {/* Affichage du titre, emplacement et tags*/}
            <div>
                <h1>{logement.title}</h1>
                <h2>{logement.location}</h2>
            </div>


        </>


    )


}

export default DetailCard;