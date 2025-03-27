import React, { useEffect, useRef, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import "./GraceBanner.css";

const GraceBanner = () => {
    const bannerStaticRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [initialTop, setInitialTop] = useState(null);
    const navigate = useNavigate();
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
            {/* <div className="bannerContainer" style={styles.bannerContainer}>
                <div style={styles.banner}>
                    <img
                        src={"assets/home page grace banner.webp"}
                        alt="Banner"
                        style={styles.image}
                    />
                    <div style={styles.caption}>
                        <h1 style={styles.captionTitle}>
                            Your Trusted Partner in<br />Legal Solutions
                        </h1>
                        <p style={styles.captionText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className="banner_button1" onClick={() => (window.location.hash = "contact")}>Contact Us</button>
                        // <button className="banner_button2" onClick={() => (window.location.hash = "industries")}>Read More</button>
                    </div>
                </div>
            </div>
            <div className="container" id="mobile_banner">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={styles.captionTitle}>
                            Your Trusted Partner in<br />Legal Solutions
                        </h1>
                        <p style={styles.captionText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <button className="banner_button1" onClick={() => (window.location.hash = "contact")}>Contact Us</button>
                        // <button className="banner_button2" onClick={() => (window.location.hash = "industries")}>Read More</button>
                    </div>
                </div>
            </div> */}
            <Carousel>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={"assets/Frame (7).webp"} alt="img" width={"100%"} />
                    <Carousel.Caption>
                        <h1>
                            Your Trusted Partner in Legal Solutions -<br />Expertise You Can Count On.
                        </h1>
                        <p>
                            This conveys reliability and professionalism, which are essential for legal services. Let me know if you'd like a different approach or further adjustments!
                        </p>
                        <button className="banner_button1" onClick={() => (window.location.hash = "contact")}>Contact Us</button>
                        <button className="banner_button2" onClick={() => (window.location.hash = "industries")}>Read More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={"assets/Frame (1).webp"} alt="img" width={"100%"} />
                    <Carousel.Caption>
                        <h1>
                            Your Trusted Partner in Legal Solutions -<br />Expertise You Can Count On.
                        </h1>
                        <p>
                            This conveys reliability and professionalism, which are essential for legal services. Let me know if you'd like a different approach or further adjustments!
                        </p>
                        <button className="banner_button1" onClick={() => (window.location.hash = "contact")}>Contact Us</button>
                        <button className="banner_button2" onClick={() => (window.location.hash = "industries")}>Read More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="First slide" /> */}
                    <img src={"assets/Frame (6).webp"} alt="img" width={"100%"} />
                    <Carousel.Caption>
                        <h1>
                            Crafting Sustainable Packaging Solutions –<br />Helping You Make a Positive Impact on the Planet.
                        </h1>
                        <p>
                            Our eco-friendly paper bags are durable, customizable, and designed with the environment in mind.
                        </p>
                        <button className="banner_button1" onClick={() => (window.location.hash = "contact")}>Contact Us</button>
                        <button className="banner_button2" onClick={() => (window.location.hash = "industries")}>Read More</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    {/* <ExampleCarouselImage text="Second slide" /> */}
                    <img src={"assets/Frame (5).webp"} alt="img" width={"100%"} />
                    <Carousel.Caption>
                        <h1>
                            Crafting Sustainable Packaging Solutions –<br />Helping You Make a Positive Impact on the Planet.
                        </h1>
                        <p>
                            Our eco-friendly paper bags are durable, customizable, and designed with the environment in mind.
                        </p>
                        <button className="banner_button1" onClick={() => (window.location.hash = "contact")}>Contact Us</button>
                        <button className="banner_button2" onClick={() => (window.location.hash = "industries")}>Read More</button>
                    </Carousel.Caption>
                </Carousel.Item>
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
                className={`banner-static-s ${isSticky ? "sticky" : ""}`}
            >
                <div className="row">
                    <div className="col-md-4">
                        <a href="/gracepaperbags">Grace Paper Bags</a>
                    </div>
                    <div className="col-md-4">
                        <a href="/graceassociates">Grace Associate</a>
                    </div>
                    <div className="col-md-4">
                        <a href="/eurocleantech">Euro Clean Tech</a>
                    </div>
                </div>
            </div>
            {/* <div
                ref={bannerStaticRef}
                className={`banner-static-banner ${isSticky ? "sticky" : ""}`}
            >
                <div className="row">
                    <div className="col-md-4">
                        <a href="/gracepaperbags">Grace Paper Bags</a>
                    </div>
                    <div className="col-md-4">
                        <a href="/graceassociates">Grace Associate</a>
                    </div>
                    <div className="col-md-4">
                        <a href="/eurocleantech">Euro Clean Tech</a>
                    </div>
                </div>
            </div> */}
            <div class="center-bottom-container">
                <a href="/gracepaperbags" class="center-link">Grace Paper Bags</a>
                <a href="/graceassociates" class="center-link">Grace Associate</a>
                <a href="/eurocleantech" class="center-link">Euro Clean Tech</a>
            </div>
        </>
    );
};

const styles = {
    bannerContainer: {
        position: "relative",
        width: "100%",
        height: "auto",
        overflow: "hidden",
    },
    banner: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    caption: {
        position: "absolute",
        top: "50%",
        left: "35%",
        transform: "translate(-50%, -50%)",
        color: "white",
        textAlign: "left",
        padding: "20px",
        borderRadius: "10px",
        zIndex: "1",
    },
    captionTitle: {
        fontSize: "60px",
        fontWeight: "bold",
        margin: 0,
    },
    captionText: {
        fontSize: "1.2rem",
        margin: 0,
    },
};

export default GraceBanner;