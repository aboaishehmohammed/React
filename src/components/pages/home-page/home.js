import '../../../App.css';
import HomeSection from "../../home-section/home-section";
import React from "react";
import Cards from "../../cards/cards";
import Footer from "../../footer/footer";
function Home(){
    return(
        <>
            <HomeSection/>
            <Cards/>
            <Footer/>
        </>
    )
}
export default Home;
