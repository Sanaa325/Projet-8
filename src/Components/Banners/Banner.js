import React from "react";
import classes from "../Banners/Banner.module.scss";

function Banner(props) {
  return (
    <img
      src={props.image}
      className={`${classes.Banner} ${classes.darken}`}
      alt={props.alt}
    />
  );
}

export default Banner;