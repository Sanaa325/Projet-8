import react, { useState } from "react";
import chevronLeft from "../../Images/chevronLeft.png";
import chevronRight from "../../Images/chevronRight.png";
import classes from "../Slideshow/Slideshow.module.css";

function Slideshow({ pictures }) {

    const [index, setIndex] = useState(0)
    const maxPictures = pictures.length - 1

    if (index > maxPictures) setIndex(0)
    if (index < 0) setIndex(maxPictures)

    return (

        <div className={classes.Carrousel}>
            <div>
                <img className={classes.imgCarr} src={pictures[index]} key={"image" + index} alt={"image" + index} />
            </div>


            {maxPictures > 0 && (
                <div>
                    <button className={classes.slideshowBtn} onClick={()=> setIndex(index - 1)}>{index}
                        <img className={classes.chevronLeft} src={chevronLeft} alt={"flèche gauche pour changer image"+index}/>
                    </button> 

                    <button className={classes.slideshowBtn} onClick={()=> setIndex(index + 1)}>{index}
                        <img className={classes.chevronRight} src={chevronRight} alt={"flèche droite pour changer image"+index}/>
                    </button>
                </div>
            )}
        </div>






    )
}










export default Slideshow;