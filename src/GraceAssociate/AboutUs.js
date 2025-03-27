import React, { useEffect } from "react";
import "./AboutUs.css";

const GraceAssociateAbout = () => {
    useEffect(() => {
        const contentElements = document.querySelectorAll('.grace_associate_about_us_content');

        // Create an IntersectionObserver to detect when the content comes into view
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); // Stop observing after the element comes into view
                }
            });
        }, { threshold: 0.5 }); // 50% of the element must be visible

        contentElements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup observer on unmount
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <section className="grace_associate_about_us" id="aboutus">
                <div className="container">
                    <h2 className="bordered_text"><span>About Us</span></h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="grace_associate_about_us_div">
                                <div className="grace_associate_about_us_img_div">
                                    <img src={"/assets/1681725239_sneg-top-p-missiya-kartinka-dlya-prezentatsii-krasivo-32.webp"} alt="img" />
                                </div>
                                <div className="grace_associate_about_us_content">
                                    <h4>Our Mission</h4>
                                    <p>Our mission is to provide businesses with reliable, efficient, and comprehensive statutory services under one roof. We aim to simplify the complex world of compliance, enabling our clients to focus on what they do best—running and growing their businesses.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="grace_associate_about_us_div">
                                <div className="grace_associate_about_us_img_div">
                                    <img src={"/assets/visionlogo_rgb-2048x689.webp"} alt="img" />
                                </div>
                                <div className="grace_associate_about_us_content">
                                    <h4>Our Values</h4>
                                    <p>We leverage over three decades of experience to provide our clients with the best possible advice and solutions. We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GraceAssociateAbout;