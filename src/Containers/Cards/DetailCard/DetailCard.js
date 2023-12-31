import React from "react"
import { useParams } from "react-router-dom";
import logements from '../../../logements.json'
import Slideshow from "../../../Components/Slideshow/Slideshow";
import classes from "../../../Containers/Cards/DetailCard/DetailCard.module.scss";
import Collapse from "../../../Components/Collapse/Collapse";
import Error from "../../../Components/Error/Error";


const arrayStars = [1, 2, 3, 4, 5]

function DetailCard() {
    {/* Récuperation toutes les infos du logement par rapport id */ }
    const { id } = useParams()

    const logement = logements.find((log) => log.id === id)


    {/* Redirection vers la page d’erreur en cas d’id incorrect  */ }
    if (!logement) {
        return <Error />;
    }

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
                <div className={classes.info}>
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
                <div className={classes.collapseColumn}>
                    <Collapse title="Description" content={logement.description} />
                </div>
                <div className={classes.collapseColumn}>
                    <Collapse title="Equipements" content={logement.equipments} />
                </div>
            </div>
        </div >
    )
}

export default DetailCard;
