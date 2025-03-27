import React from "react";
import GraceAssociateService from "./Service";
import GraceChooseUs from "./WhyChooseUs";
import GraceAssociateAbout from "./AboutUs";
import { Helmet } from "react-helmet-async";
import GetInTouch from "../GraceHome/GetInTouch";
import GraceFooter from "../GraceHome/Footer";
import GraceAssociateBanner from "./GraceBanner";
import GraceAssociateHeader from "./Header";
import { FaWhatsapp } from "react-icons/fa";
import AssociateGetInTouch from "./GetInTouch";

const GraceAssociate = () => {
    const whatsappNumber = "9655214330";
    const preOccupiedMessage = "Hello GraceAssociates!\n I would like to know more about your services.";
    // const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preOccupiedMessage)}`;
    const whatsappLink = `https://wa.me/c/919585833484`;
    return (
        <>
            <Helmet>
                <title>Grace Associate</title>
                <meta name="description" content="Grace Associate is your trusted partner in statutory and compliance services. Established in 2009, we have earned a strong reputation for providing expert solutions across diverse industries. With over 30 years of experience, we specialize in simplifying statutory obligations, ensuring businesses remain compliant with confidence and ease." />
                <meta name="keywords" content="statutory compliance services, business compliance solutions, expert statutory services, corporate compliance" />
            </Helmet>
            <GraceAssociateHeader />
            <GraceAssociateBanner />
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-chat-icon"
            >
                <FaWhatsapp />
            </a>
            <GraceAssociateService />
            <GraceChooseUs />
            <GraceAssociateAbout />
            {/* <GetInTouch /> */}
            <AssociateGetInTouch />
            <GraceFooter />
        </>
    )
}

export default GraceAssociate;