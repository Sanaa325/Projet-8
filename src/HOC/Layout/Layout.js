//Librairies
import React from "react";

//Components
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Layout(props) {
    return (
        <>
            <Header />

            {props.children}

            <Footer noMargin/>

            
        </>
    )
}







export default Layout