import React from "react"
import { useParams } from "react-router-dom";
import logements from '../../../logements.json'
import Slideshow from "../../../Components/Slideshow/Slideshow";

function DetailCard() {
    const {id}=useParams()
    const logement=logements.find((log)=>log.id===id)
    console.log(logement) //recuperation toutes les infos du logement par rapport id
    
    return (
        <Slideshow pictures={logement.pictures}/>
    )

    
}

export default DetailCard;