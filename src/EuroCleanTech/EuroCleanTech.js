import React from "react";
import EuroCleanTechBanner from "./EuroCleanTechBanner";
import EuroCleanProcess from "./EuroCleanProcess";
import EuroAboutUs from "./EuroAboutUs";
import { Helmet } from "react-helmet-async";
import GetInTouch from "../GraceHome/GetInTouch";
import GraceFooter from "../GraceHome/Footer";
import EuroHeader from "./EuroHeader";
import EuroServices from "./EuroServices";
import { FaWhatsapp } from "react-icons/fa";
import EuroGetInTouch from "./GetInTouch";

const EuroCleanTech = () => {
    const whatsappNumber = "9655214330";
    const preOccupiedMessage = "Hello GraceAssociates!\n I would like to know more about your services.";
    // const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preOccupiedMessage)}`;
    const whatsappLink = `https://wa.me/c/919585833484`;
    return (
        <>
            <Helmet>
                <title>Euro Clean Tech</title>
                <meta name="description" content="Euro Clean Tech delivers innovative and advanced cleaning solutions tailored for the fast evolving corporate environment. Our mission is to promote a “clean and healthy” nation while prioritizing eco-friendly practices. With cutting-edge cleaning technology, we ensure superior hygiene standards for businesses and institutions." />
                <meta name="keywords" content="corporate cleaning solutions, eco-friendly cleaning, advanced cleaning technology, professional cleaning services, sustainable cleaning solutions." />
            </Helmet>
            <EuroHeader />
            <EuroCleanTechBanner />
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-chat-icon"
            >
                <FaWhatsapp />
            </a>
            <EuroServices />
            <EuroCleanProcess />
            <EuroAboutUs />
            {/* <GetInTouch /> */}
            <EuroGetInTouch />
            <GraceFooter />
        </>
    )
};

export default EuroCleanTech;