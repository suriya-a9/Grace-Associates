import React, { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import userPic from '../../image/user-one.png';
import "./Service.css";

const GraceAssociateService = () => {

    const serviceCarousel = [
        {
            name: 'PAN & TAN Registration',
            description: 'Quick PAN and TAN registration services for hassle-free tax compliance.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/1-d95g410QqrSr9ZjJ.webp'
        },
        {
            name: 'ESI & PF Registration',
            description: 'ESI and PF registration for employee welfare and mandatory benefits compliance.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/2-AoPGJW5Ko4UgBB8Q.webp'
        },
        {
            name: 'GST, Income Tax, & E-TDS Filing',
            description: 'Expert GST, Income Tax, and E-TDS filing services for compliance.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/3-mjE9G7aK37fLWP9Y.webp'
        },
        {
            name: 'Tally, GST & income tax crash course',
            description: 'Tally GST and Income Tax crash course for accounting and taxation skills.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/4-YD04wlkGGguxJng9.webp'
        },
        {
            name: 'Inspector of Factories & Labor Welfare Registration',
            description: 'Inspector of Factories and Welfare Associate for workplace safety and compliance.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/5-Awvk94Wg8ZHDxOLn.webp'
        },
        {
            name: 'Firm/SSI Registration',
            description: 'Official registration for businesses, ensuring legal compliance and recognition.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/6-m6LJbZyGB2SENznl.webp'
        },
        {
            name: 'Customs & Ice Gate Registration',
            description: 'Customs and ICEGATE registration for seamless import/export and trade compliance.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/7-AoPGJW5g60cng3Ld.webp'
        },
        {
            name: 'Importer Exporter Codes (IEC) & DGFT Services',
            description: 'IEC registration and DGFT services for smooth global trade operations.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/8-m6LJbZyXjjh0lw59.webp'
        },
        {
            name: 'Bank Loan Projects & CMA Reports',
            description: 'Comprehensive project plan for securing bank loans and financial support.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/9-YKbrl3kgjbcbVxEZ.webp'
        },
    ]

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
            <section id="testimonial" className="testimonials pt-70 pb-70">
                <div className="container mt-5">
                    <h2 className="bordered_text"><span>Our Services</span></h2>
                    <div className="row">
                        <div className="col-md-12">
                            <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                                {
                                    serviceCarousel.length === 0 ?
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
                                        serviceCarousel.map(testiMonialDetail => {
                                            return (
                                                <ServiceDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                            )
                                        })
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GraceAssociateService;