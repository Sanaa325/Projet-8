import React, { useState } from "react";
import classes from "./Collapse.module.scss";
import chevronUp from "../../Images/chevronUp.png";
import chevronDown from "../../Images/chevronDown.png";




function Collapse({ title, content }) {

    const [isOpen, setIsOpen] = useState(false);
    const displayContent = () => {
        setIsOpen(!isOpen)
    }

    const collapseContent = `${classes.Collapse} ${isOpen ? classes.visible : classes.hidden}`;
    const chevron = (isOpen ? chevronUp : chevronDown);
    const liste = Array.isArray(content)?content.map((item, index) => (
        <li key={index}>{item}</li>
    )):content;

    return (
        <div className={classes.Collapse}>
            <div className={classes.top_bar} onClick={displayContent} >
                <span>{title}</span>
                <div className={classes.chevronContainer}>
                    <img className={classes.chevron} src={chevron} alt="" />
                </div>

            </div>




            <div className={collapseContent}>
                <ul className={classes.centered}>{liste}</ul>

            </div>



        </div>

    )









}

export default Collapse;

//import React from 'react';

// const MyComponent = ({ content }) => {
    // Vérifie si content est un tableau
   // if (Array.isArray(content)) {
        // Génère une liste de <li> à partir des éléments du tableau
      //  const listItems = content.map((item, index) => (
          //  <li key={index}>{item}</li>
      //  ));

       // return (
          //  <div>
            //    <h2>Liste :</h2>
             //   <ul>{listItems}</ul>
           // </div>
       // );
    //}

   // // Si content n'est pas un tableau, affiche un message
    //return <div>Le contenu n'est pas un tableau.</div>;
//};