import React from "react";
import GracePaperBanner from "./Banner";
import WelcomePaper from "./WelcomePaper";
import "./GracePaper.css";
import OurPaperProduct from "./OurPaperProduct";
import ImageGallery from "./ImageGallery";
import PaperAboutUs from "./AboutUs";
import { Helmet } from "react-helmet-async";
import GetInTouch from "../GraceHome/GetInTouch";
import GraceFooter from "../GraceHome/Footer";
import PaperHeader from "./Header";
// import TestiMonials from "./TestiMonials";
import { FaWhatsapp } from "react-icons/fa";
import PaperGetInTouch from "./GetInTouch";

const GracePaper = () => {
    const whatsappNumber = "9655214330";
    const preOccupiedMessage = "Hello GraceAssociates!\n I would like to know more about your services.";
    // const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preOccupiedMessage)}`;
    const whatsappLink = `https://wa.me/c/919585833484`;
    return (
        <>
            <Helmet>
                <title>Grace Paper Bags</title>
                <meta name="description" content="Founded in 2009, Grace Paper Bags (Grace Traders) is a leading supplier, distributor, wholesaler, and exporter of high-quality paper bags. We offer a wide range of eco-friendly and designer paper bags, catering to various business needs. Our commitment to quality and sustainability makes us a preferred choice for premium paper bag solutions." />
                <meta name="keywords" content="eco-friendly paper bags, wholesale paper bags, custom paper bags, sustainable packaging, designer paper bags" />
            </Helmet>
            <PaperHeader />
            <GracePaperBanner />
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-chat-icon"
            >
                <FaWhatsapp />
            </a>
            <WelcomePaper />
            <OurPaperProduct />
            <ImageGallery />
            <PaperAboutUs />
            {/* <GetInTouch /> */}
            <PaperGetInTouch />
            <GraceFooter />
            {/* <TestiMonials /> */}
        </>
    )
}

export default GracePaper;