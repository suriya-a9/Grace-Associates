import React, { useEffect } from "react";
import { MdOutlineFax } from "react-icons/md";
import "./AboutUs.css";

const PaperAboutUs = () => {
    useEffect(() => {
        const img1 = document.querySelector('.paper_about_us_img_1');
        const img2 = document.querySelector('.paper_about_us_img_2');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    img1.classList.add('zoomIn'); // Add zoom class to the first image
                    img2.classList.add('zoomIn'); // Add zoom class to the second image
                } else {
                    img1.classList.remove('zoomIn'); // Remove zoom class from the first image
                    img2.classList.remove('zoomIn'); // Remove zoom class from the second image
                }
            });
        }, { threshold: 0.5 }); // 50% of the section in view

        observer.observe(document.querySelector('#aboutus')); // Observe the section

        return () => observer.disconnect(); // Cleanup observer when the component unmounts
    }, []);

    return (
        <>
            <section className="paper_about_us" id="aboutus">
                <div className="container">
                    <h2 className="bordered_text"><span>About Us</span></h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="paper_about_us_img">
                                <img
                                    className="paper_about_us_img_1"
                                    src={"/assets/5c17c522635c5658001804-Photoroom.webp"}
                                    alt="img"
                                />
                                <img
                                    className="paper_about_us_img_2"
                                    src={"/assets/61BaYvV-eGL-Photoroom.webp"}
                                    alt="img"
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="paper_about_us_div">
                                <p>
                                    Grace paper bags was established in 2009, We Grace Traders are
                                    providing the best quality of all types of paper bags. We are
                                    engaged in offering high quality range of Paper Bag to our
                                    esteemed customers. We are the supplier, distributor, wholesaler
                                    and exporter of Designer Paper Bags. These bags are specially
                                    designed for carrying stuff like delicate articles, cosmetic
                                    products, gift items, and also dishu papers etc. Clients can avail
                                    the offered bags from us in various customized designs, colors and
                                    sizes as per the client's requisites.
                                </p>
                                <div className="paper_about_us_icons">
                                    <ul>
                                        <li>
                                            <img src={"assets/icons/reliability.webp"} alt="img" /> High Durability
                                        </li>
                                        <li>
                                            <img src={"assets/icons/light-weight.webp"} alt="img" /> Light Weight
                                        </li>
                                        <li>
                                            <img src={"assets/icons/thumbs-up.webp"} alt="img" /> Intricately Finished
                                        </li>
                                        <li>
                                            <img src={"assets/icons/pantone.webp"} alt="img" /> Attractive Colour
                                        </li>
                                        <li>
                                            <img src={"assets/icons/mop-handle.webp"} alt="img" /> Comfortable Handles
                                        </li>
                                        <li>
                                            <img src={"assets/icons/bio.webp"} alt="img" /> Eco Friendly
                                        </li>
                                    </ul>
                                </div>
                                <button className="paper_about_button">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PaperAboutUs;