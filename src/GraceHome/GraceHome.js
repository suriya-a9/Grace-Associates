import GraceHeader from "./Header";
import GraceBanner from "./GraceBanner";
import GraceService from "./Services";
import GraceAboutUs from "./AboutUs";
// import PopularServices from "./PopularServices";
import GetInTouch from "./GetInTouch";
import GraceFooter from "./Footer";
import "./GraceHome.css";
import TestiMonials from "./TestiMonials";
import { FaWhatsapp } from "react-icons/fa";

const GraceHome = () => {
    const whatsappNumber = "9655214330";
    const preOccupiedMessage = "Hello GraceAssociates!\n I would like to know more about your services.";
    // const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(preOccupiedMessage)}`;
    const whatsappLink = `https://wa.me/c/919585833484`;

    return (
        <>
            <GraceHeader />
            <GraceBanner />
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-chat-icon"
            >
                <FaWhatsapp />
            </a>
            <GraceService />
            <GraceAboutUs />
            {/* <PopularServices /> */}
            <TestiMonials />
            <GetInTouch />
            <GraceFooter />
        </>
    );
};

export default GraceHome;