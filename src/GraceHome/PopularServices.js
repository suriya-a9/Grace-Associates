import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./PopularServices.css";

const PopularServices = () => {
    const carouselOptions = {
        loop: true,
        center: true,
        items: 3,
        margin: 10,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3500,
        smartSpeed: 450,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        onTranslated: () => {
            const items = document.querySelectorAll('.owl-item');
            items.forEach((item) => {
                item.classList.remove('left', 'right');
            });

            const center = document.querySelector('.owl-item.active.center');
            const prev = center?.previousElementSibling;
            const next = center?.nextElementSibling;

            if (prev) prev.classList.add('left');
            if (next) next.classList.add('right');
        }
    };
    return (
        <>
            <section className="grace_popular_service">
                <div className="container">
                    <h2 className="bordered_text"><span>About Us</span></h2>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel className="owl-theme" {...carouselOptions}>
                                <div className="item">
                                    <img src={"/assets/9-YKbrl3kgjbcbVxEZ.webp"} alt="img" />
                                </div>
                                <div className="item">
                                    <img src={"/assets/9-YKbrl3kgjbcbVxEZ.webp"} alt="img" />
                                </div>
                                <div className="item">
                                    <img src={"/assets/9-YKbrl3kgjbcbVxEZ.webp"} alt="img" />
                                </div>
                                <div className="item">
                                    <img src={"/assets/9-YKbrl3kgjbcbVxEZ.webp"} alt="img" />
                                </div>
                                <div className="item">
                                    <img src={"/assets/9-YKbrl3kgjbcbVxEZ.webp"} alt="img" />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PopularServices;