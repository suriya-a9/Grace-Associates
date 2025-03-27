import React, { useEffect, useState } from 'react';
import TestiMonialsDetails from './TestiMonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import userPic from '../../image/user-one.png';
import './TestiMonials.css'

const TestiMonials = () => {

    const testiMonials = [
        {
            name: 'Rekob Ramya',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/product-1.webp'
        },
        {
            name: 'Brandon Savage',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/product-2.webp'
        },
        {
            name: 'Steve Burns',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/product-3.webp'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/product-4.webp'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/product-5.webp'
        },
        {
            name: 'Kevin Canlas',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
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
        dots: false,
        autoplayTimeout: 3500,
        smartSpeed: 450,
        nav: false,
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
        <section id="testimonial" className="testimonials pt-70 pb-70">
            <div className="container">
                {/* <h2>Our Popular Services</h2> */}
                {/* <h4 className="miniTitle text-center">TESTIMONIALS</h4>
                <div className="text-center ">
                    <h3 className="sectionTitle">What Our Clients are Saying?</h3>
                </div>
                <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p> */}
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                    <div class="item" style={{paddingTop: "0px !important"}}>
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
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;