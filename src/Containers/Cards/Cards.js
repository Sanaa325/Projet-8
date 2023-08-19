import React from "react"
import { Link } from "react-router-dom"
import logements from '../../logements.json'
import classes from '../Cards/Cards.module.css'

function Cards() {
    return (
        <div className={classes.logements}>

        {/* liste la base de données */}
        {logements.map((logement) => {
            const { id, cover, title } = logement;

           // Lien vers la page de détails du logement en utilisant son ID
           const detailLink = `/card/${id}`;

           return (
               <div className={classes.ficheLogement} key={id}>
                   <Link to={detailLink}>
                       <img src={cover} alt={title} />
                       <h3>{title}</h3>
                   </Link>
               </div>
           );
       })}
   </div>
);
    }
  
  export default Cards;



  


