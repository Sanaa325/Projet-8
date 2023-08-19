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

            <Footer/>

            
        </>
    )
}





/* 
    - Header
        - logo
        - Navigation
            - NavigationItem
*/

export default Layout