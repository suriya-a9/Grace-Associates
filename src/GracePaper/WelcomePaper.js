import React, { useEffect } from "react";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import "./WelcomePaper.css";

const WelcomePaper = () => {
    useEffect(() => {
        const button = document.querySelector('.welcome_paper_div_button');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    button.classList.add('shake'); // Add shake animation class to the button
                    setTimeout(() => {
                        button.classList.remove('shake'); // Remove the shake class after 2 seconds
                    }, 2000); // 2 seconds after the animation completes
                }
            });
        }, { threshold: 0.5 }); // 50% of the section in view

        observer.observe(document.querySelector('#welcome')); // Observe the section

        return () => observer.disconnect(); // Cleanup observer when the component unmounts
    }, []);

    return (
        <>
            <section className="welcome_paper_section" id="welcome">
                <div className="container">
                    <h2 className="bordered_text"><span>Our Features</span></h2>
                    <div className="row">
                        <div className="col-md-6">
                            {/* <div className="welcome_paper_image">
                                <img src={"/assets/Бумажная_одноразовая_посуда_банер.webp"} alt="img" />
                            </div> */}
                            <div className="paper_about_us_img">
                                <img className="paper_about_us_img_1" src={"/assets/bt-krar2-Photoroom.webp"} alt="img" />
                                <img className="paper_about_us_img_2" src={"/assets/SGDjfC9EMG-Photoroom.webp"} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="welcome_paper_div">
                                <p>
                                    Established in 2009, <b>Grace Paper Bags (Grace Traders)</b> is a trusted manufacturer,
                                    supplier, distributor, wholesaler, and exporter of premium-quality paper bags. We
                                    specialize in offering a diverse range of eco-friendly and designer paper bags tailored to
                                    meet various business and personal needs.
                                </p>
                                <p>
                                    Our paper bags are carefully designed to carry delicate items, cosmetic products, gift
                                    items, dishware, and more. Clients can choose from a variety of customized designs,
                                    colors, and sizes to suit their specific requirements.
                                </p>
                                <h4>
                                    Manufacturers & exporters <br /> of grace paper bags
                                </h4>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="welcome_paper_div_icons_div">
                                            {/* <LiaHandHoldingHeartSolid /> */}
                                            <img src={"assets/icons/save-the-world (1).webp"} alt="img" />
                                            <span>Eco friendly</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="welcome_paper_div_icons_div">
                                            {/* <LiaHandHoldingHeartSolid /> */}
                                            <img src={"assets/icons/service (1).webp"} alt="img" />
                                            <span>quality products</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="welcome_paper_div_icons_div">
                                            {/* <LiaHandHoldingHeartSolid /> */}
                                            <img src={"assets/icons/money (1).webp"} alt="img" />
                                            <span>competitive prices</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="welcome_paper_div_button"
                                    onClick={() => (window.location.hash = "contact")}
                                >
                                    buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WelcomePaper;