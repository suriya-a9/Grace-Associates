import React, { useEffect, useRef, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import "./EuroCleanTechBanner.css";

const EuroCleanTechBanner = () => {
    const bannerStaticRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [initialTop, setInitialTop] = useState(null);
    useEffect(() => {
        if (bannerStaticRef.current) {
            setInitialTop(bannerStaticRef.current.offsetTop);
        }

        const handleScroll = () => {
            if (bannerStaticRef.current && initialTop !== null) {
                if (window.scrollY >= initialTop) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [initialTop]);
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={"assets/Frame (3).webp"} alt="img" width={"100%"} />
                    <Carousel.Caption>
                        <h1>
                            Cleaner Homes, Healthier Lives –<br />Expert Services for a Safer, Spotless Space.
                        </h1>
                        <p>
                            From deep water tank cleaning to thorough home care, we provide trusted solutions to keep your living spaces fresh and hygienic.
                        </p>
                        <button className="euro_clean_banner_button" onClick={() => (window.location.hash = "contact")}>Hire Us</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={"assets/Frame (2).webp"} alt="img" width={"100%"} />
                    <Carousel.Caption>
                        <h1>
                            Cleaner Homes, Healthier Lives –<br />Expert Services for a Safer, Spotless Space.
                        </h1>
                        <p>
                            From deep water tank cleaning to thorough home care, we provide trusted solutions to keep your living spaces fresh and hygienic.
                        </p>
                        <button className="euro_clean_banner_button" onClick={() => (window.location.hash = "contact")}>Hire Us</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div
                ref={bannerStaticRef}
                className={`banner-static ${isSticky ? "sticky" : ""}`}
            >
                <a href="/gracepaperbags">Grace Paper Bags</a>
                <a href="/graceassociates">Grace Associate</a>
                <a href="/eurocleantech" className="paper-banner-static-color">Euro Clean Tech</a>
            </div>
            <div class="center-bottom-container">
                <a href="/gracepaperbags" class="center-link">Grace Paper Bags</a>
                <a href="/graceassociates" class="center-link">Grace Associate</a>
                <a href="/eurocleantech" class="center-link colors">Euro Clean Tech</a>
            </div>
        </>
    )
}

export default EuroCleanTechBanner;