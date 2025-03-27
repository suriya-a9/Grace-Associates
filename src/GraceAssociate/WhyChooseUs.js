import React, { useEffect } from "react";
import "./WhyChooseUs.css";

const GraceChooseUs = () => {
    useEffect(() => {
        const section = document.getElementById("industries");
        const button = document.querySelector(".paper_about_us_img_button");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        button.classList.add("shake"); // Add shake class to the button when section reaches top
                    } else {
                        button.classList.remove("shake"); // Remove shake class when section leaves the view
                    }
                });
            },
            { threshold: 0.1 } // Trigger when at least 10% of the section is visible
        );

        if (section) {
            observer.observe(section); // Observe the section element
        }

        return () => {
            if (section) {
                observer.unobserve(section); // Cleanup observer when component unmounts
            }
        };
    }, []);

    return (
        <>
            <section className="grace_why_choose_section" id="industries">
                <div className="container">
                    <h2 className="bordered_text"><span>Why Choose Us</span></h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="paper_about_us_img">
                                <img className="paper_about_us_img_1" src={"/assets/taxreform.webp"} alt="img" />
                                <img className="paper_about_us_img_2" src={"/assets/shutterstock_723369586.webp"} alt="img" />
                            </div>
                            <button className="paper_about_us_img_button" onClick={() => (window.location.hash = "contact")}>Contact Us</button>
                        </div>
                        <div className="col-md-6">
                            <div className="grace_why_choose_div">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="grace_why_choose_blank">
                                            <img src={"assets/practice.webp"} alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h4>Comprehensive Services Under One Roof</h4>
                                        <p>We offer a full range of services, from PAN and TAN registration to complex GST filings and Tally training. By providing all statutory services under one roof, we save you time and effort, allowing you to focus on growing your business.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="grace_why_choose_blank">
                                            <img src={"assets/transport.webp"} alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h4>Ethical and Transparent Practices</h4>
                                        <p>Integrity and transparency are at the core of our business. We operate with the highest ethical standards, providing clear communication and transparent pricing, so you know exactly what to expect at every step of the process.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="grace_why_choose_blank">
                                            <img src={"assets/on-time (1).webp"} alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <h4>Efficient and Timely Service</h4>
                                        <p>We understand the importance of deadlines in statutory compliance. Our team is committed to delivering efficient and timely services, ensuring that all your statutory obligations are met without delays.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GraceChooseUs;