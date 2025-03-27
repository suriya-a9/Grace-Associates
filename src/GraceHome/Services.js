import React, { useEffect, useRef } from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const GraceService = () => {
    const navigate = useNavigate();
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleAnimation = () => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("in-view");
                        }
                    });
                },
                { threshold: 0.1 }
            );

            const leftColumn = sectionRef.current.querySelector(".col-md-6.left");
            const rightColumn = sectionRef.current.querySelector(".col-md-6.right");

            // Only apply animation logic if the screen width is larger than 800px
            if (window.innerWidth > 800) {
                if (leftColumn) observer.observe(leftColumn);
                if (rightColumn) observer.observe(rightColumn);
            } else {
                // Ensure elements are visible without animation
                if (leftColumn) {
                    leftColumn.style.opacity = "1";
                    leftColumn.style.transform = "none";
                }
                if (rightColumn) {
                    rightColumn.style.opacity = "1";
                    rightColumn.style.transform = "none";
                }
            }

            return () => {
                if (leftColumn) observer.unobserve(leftColumn);
                if (rightColumn) observer.unobserve(rightColumn);
            };
        };

        handleAnimation();

        // Reset scroll position to top and re-trigger animations
        window.scrollTo(0, 0);
        const columns = sectionRef.current.querySelectorAll(".col-md-6");
        columns.forEach((column) => column.classList.remove("in-view"));

        // Add event listener to trigger animations when scrolled back to top
        window.addEventListener("scroll", handleAnimation);

        return () => {
            window.removeEventListener("scroll", handleAnimation);
        };
    }, []);

    return (
        <section className="grace_service_section" id="industries" ref={sectionRef}>
            <div className="container">
                <h1>Providing more than services</h1>
                <div className="row">
                    <div className="col-md-6 left">
                        <h4 className="industry_h4">industry sectors</h4>
                    </div>
                    <div className="col-md-6 right">
                        <div className="grace-service_div">
                            <h4 onClick={() => navigate("/graceassociates")}>
                                Grace Associate <GoArrowRight />
                            </h4>
                            <p>
                                Grace Associate is your trusted partner in statutory and compliance services. Established
                                in 2009, we have earned a strong reputation for providing expert solutions across diverse
                                industries. With over 30 years of experience, we specialize in simplifying statutory
                                obligations, ensuring businesses remain compliant with confidence and ease.
                            </p>
                        </div>
                        <div className="grace-service_div">
                            <h4 onClick={() => navigate("/gracepaperbags")}>
                                Grace Paper Bags <GoArrowRight />
                            </h4>
                            <p>
                                Founded in 2009, Grace Paper Bags (Grace Traders) is a leading supplier, distributor,
                                wholesaler, and exporter of high-quality paper bags. We offer a wide range of eco-friendly
                                and designer paper bags, catering to various business needs. Our commitment to quality
                                and sustainability makes us a preferred choice for premium paper bag solutions.
                            </p>
                        </div>
                        <div className="grace-service_div">
                            <h4 onClick={() => navigate("/eurocleantech")}>
                                Euro Clean Tech <GoArrowRight />
                            </h4>
                            <p>
                                Euro Clean Tech delivers innovative and advanced cleaning solutions tailored for the fast
                                evolving corporate environment. Our mission is to promote a “clean and healthy” nation
                                while prioritizing eco-friendly practices. With cutting-edge cleaning technology, we ensure
                                superior hygiene standards for businesses and institutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GraceService;