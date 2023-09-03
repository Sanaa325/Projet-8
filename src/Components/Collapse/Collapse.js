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

