import React, { useState } from "react";
import classes from "./Collapse.module.css";
import chevronUp from "../../Images/chevronUp.png";
import chevronDown from "../../Images/chevronDown.png";




function Collapse() {

    const [isOpen, setIsOpen] = useState(false);
    const displayContent = () => {
        setIsOpen(!isOpen)
    }

    const collapseContent = `${classes.Collapse} ${isOpen ? classes.visible : classes.hidden}`;
    const chevron = (isOpen ? chevronUp : chevronDown);


    return (
        <div className={classes.Collapse}>
            <div onClick={displayContent} >
                <span>{title}</span>
            </div>
            <div className={classes.chevron}>
            <img src={chevron} alt="" />
            </div>

            <div className={collapseContent}>
                blablabdcnjsnnvjdxnvofnvofnvosdmzmvpdfmvpfm

            </div>



        </div>

    )









}

export default Collapse;