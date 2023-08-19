//Librairies
import React from "react";
import { Routes, Route } from "react-router-dom";

//Components
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Cards from "./Containers/Cards/Cards";
import Error from "./Components/Error/Error";
import DetailCard from "./Containers/Cards/DetailCard/DetailCard";


function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cards" element={<Cards/>}/>
            <Route path="/card/:id" element={<DetailCard />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}


export default AppRouter;

