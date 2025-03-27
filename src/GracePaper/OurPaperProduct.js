import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./OurPaperProduct.css";
import OurProductDetails from './OurProductDetails';

const OurPaperProduct = () => {

    const testiMonials = [
        {
            name: 'Paper bag',
            description: 'Eco-friendly, reusable paper bag for sustainable packaging and carrying.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/41RVHuEq6FL._AC_UF1000,1000_QL80_.webp'
        },
        {
            name: 'Shopping bag',
            description: 'Durable, reusable shopping bag for convenient, eco-friendly carrying solutions.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/product-2.webp'
        },
        {
            name: 'Jewellery bag',
            description: 'Elegant, protective jewellery bag for safe storage and travel.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/product-3.webp'
        },
        {
            name: 'Zipper bag',
            description: 'Versatile, secure zipper bag for convenient storage and organization.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/Zipper.webp'
        },
        {
            name: 'Paper box',
            description: 'Sturdy, eco-friendly paper box for packaging, storage, and gifting.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/paper box.webp'
        },
        {
            name: 'Tissue box',
            description: 'Compact, convenient tissue box for easy access and hygiene.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/image_483771109.webp'
        },
        {
            name: 'Craft paper bag pouch',
            description: 'Handmade, stylish craft paper bag pouch for eco-friendly gifting.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/Craft.webp'
        },
        {
            name: 'Gift paper bag',
            description: 'Chic, eco-friendly gift paper bag for elegant and sustainable gifting.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/product-6.webp'
        },
    ]
    //Owl Carousel Settings
    const options = {
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
            {/* <section className="our_product_section">
                <div className="container">
                    <h2>Our product</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="our_product_div" id="bio">
                                <img src={"/assets/product-1.webp"} alt="img" />
                                <h4>biodegradable bags</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="our_product_div" id="sos">
                                <img src={"/assets/product-2.webp"} alt="img" />
                                <h4>SOS bags</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="our_product_div" id="professional">
                                <img src={"/assets/product-3.webp"} alt="img" />
                                <h4>Professional bags</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row second-row">
                        <div className="col-md-4">
                            <div className="our_product_div" id="customized">
                                <img src={"/assets/product-4.webp"} alt="img" />
                                <h4>Customized bags</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="our_product_div" id="shopping">
                                <img src={"/assets/product-5.webp"} alt="img" />
                                <h4>Shopping bags</h4>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="our_product_div" id="gift">
                                <img src={"/assets/product-6.webp"} alt="img" />
                                <h4>Gift bags</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section id="testimonial" className="testimonials pt-70 pb-70">
                <div className="container mt-5">
                    <h2 className="bordered_text"><span>Our Product</span></h2>
                    {/* <h2>Our Popular Services</h2> */}
                    {/* <h4 className="miniTitle text-center">TESTIMONIALS</h4>
                <div className="text-center ">
                    <h3 className="sectionTitle">What Our Clients are Saying?</h3>
                </div>
                <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                                {
                                    testiMonials.length === 0 ?
                                        <div class="item">
                                            <div class="shadow-effect">
                                                {/* <img class="img-circle" src={userPic} /> */}

                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                            </div>
                                            <div class="testimonial-name">
                                                <h5>Rajon Rony</h5>
                                                <small>ITALY</small>
                                            </div>
                                        </div> :
                                        testiMonials.map(testiMonialDetail => {
                                            return (
                                                <OurProductDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                            )
                                        })
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OurPaperProduct;