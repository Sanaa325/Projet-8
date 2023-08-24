import React from "react"
import { useParams } from "react-router-dom";
import logements from '../../../logements.json'
import Slideshow from "../../../Components/Slideshow/Slideshow";
import classes from "../../../Containers/Cards/DetailCard/DetailCard.module.scss";
import Collapse from "../../../Components/Collapse/Collapse";


const arrayStars = [1, 2, 3, 4, 5]

function DetailCard() {
    {/* Récuperation toutes les infos du logement par rapport id */ }
    const { id } = useParams()
    const logement = logements.find((log) => log.id === id)
    const starNumber = parseInt(logement.rating)


    return (
        <div className={classes.logement}>
            {/* Carrousel d'images */}
            <Slideshow pictures={logement.pictures} />

            {/* Affichage du titre, emplacement et tags*/}
            <div className={classes.detailLogement}>
                <div className={classes.description}>
                    <h1>{logement.title}</h1>
                    <h2>{logement.location}</h2>
                    <div className={classes.keywords}>
                        {logement.tags.map((element, index) => {
                            return (<p className={classes.tags} key={"tags" + index}>{element}</p>)
                        })}
                    </div>
                </div>


                {/* Affichage nom proprio et sa photo*/}
                <div>
                    <div className={classes.hostIdentity}>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt="" />
                    </div>

                    {/* Affichage des étoiles */}
                    <div className={classes.stars}>

                        {arrayStars.map(element => (
                            <span
                                key={'star' + element}
                                className={element <= starNumber ? classes.span1 : classes.span2}
                            >
                                ★
                            </span>

                        ))}
                    </div>
                </div>
            </div>
            {/* Affichage équipements et descriptions */}
            <div className={classes.collapseEqui}>
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={logement.equipments} />
            </div>
        </div >
    )
}

export default DetailCard;
