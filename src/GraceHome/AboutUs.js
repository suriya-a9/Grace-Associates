import React, { useEffect } from "react";
import "./AboutUs.css";

const GraceAboutUs = () => {
    useEffect(() => {
        // Create an intersection observer
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // When the section is in view, add animation classes
                        const h4Elements = entry.target.querySelectorAll("h4");
                        h4Elements.forEach((el) => {
                            if (el.classList.contains("bottom-top")) {
                                el.classList.add("animate-bottom-top");
                            } else if (el.classList.contains("top-bottom")) {
                                el.classList.add("animate-top-bottom");
                            }
                        });
                        observer.unobserve(entry.target); // Stop observing once it's in view
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
        );

        // Observe the section with the about us content
        const aboutSection = document.querySelector(".grace_about_us");
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        // Cleanup observer on component unmount
        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    return (
        <>
            <section className="grace_about_us" id="aboutus">
                <div className="container">
                    <h2 className="bordered_text">
                        <span>About Us</span>
                    </h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="grace_about_us_div">
                                <img
                                    src={"assets/original_5db6f2b802c85e01d60fafe6_5db6f4b53022a.webp"}
                                    alt="Grace Associate"
                                />
                                <h4 className="bottom-top" style={{ marginTop: "25px" }}>
                                    Grace Associate
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="grace_about_us_div">
                                <h4 className="top-bottom" style={{ marginBottom: "25px" }}>
                                    Grace Paper Bags
                                </h4>
                                <img
                                    src={"assets/paper-bag-about-us.webp"}
                                    alt="Grace Paper Bags"
                                />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="grace_about_us_div">
                                <img
                                    src={"assets/HeIwY5RBtCc.webp"}
                                    alt="Euro Clean Tech"
                                />
                                <h4 className="bottom-top" style={{ marginTop: "25px" }}>
                                    Euro Clean Tech
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mobile_grace_about_us" id="aboutus" >
                <div className="container">
                    <h2 className="bordered_text">
                        <span>About Us</span>
                    </h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="grace_about_us_div" >
                                <h4 style={{ marginTop: "25px" }}>Grace Associate</h4>
                                <img src={"assets/original_5db6f2b802c85e01d60fafe6_5db6f4b53022a.webp"} alt="Grace Associate" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="grace_about_us_div" >
                                <h4 style={{ marginBottom: "25px" }}>Grace Paper Bags</h4>
                                <img src={"assets/paper-bag-about-us.webp"} alt="Grace Paper Bags" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="grace_about_us_div" >
                                <h4 style={{ marginTop: "25px" }}>Euro Clean Tech</h4>
                                <img src={"assets/HeIwY5RBtCc.webp"} alt="Euro Clean Tech" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GraceAboutUs;
