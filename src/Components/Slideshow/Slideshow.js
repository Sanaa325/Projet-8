import react, { useState } from "react";
import chevronLeft from "../../Images/chevronLeft.png";
import chevronRight from "../../Images/chevronRight.png";
import classes from "../Slideshow/Slideshow.module.css";

function Slideshow({ pictures }) {
    const [index, setIndex] = useState(0)
    return (

        <div className={classes.Carrousel}>
            <div>
                <img src={pictures[index]} key={"image"+index} alt={"image"+index} />
            </div>
        </div>

    )
}










export default Slideshow;