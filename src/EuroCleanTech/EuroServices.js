import React from 'react';
import EuroServiceDetails from './EuroServiceDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./EuroServices.css";

const EuroServices = () => {

    const testiMonials = [
        {
            name: 'Water Tank Cleaning',
            description: 'Efficient water tank cleaning for safe, clean water storage.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/slider_1.webp'
        },
        {
            name: 'Upholstery Cleaning',
            description: 'Professional upholstery cleaning for deep cleaning and restoring fabric freshness.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/6408d4f9bdf048f8931dbac2dafca748.webp'
        },
        {
            name: 'Carpet Cleaning',
            description: 'Expert carpet cleaning for deep stains removal and refreshed texture.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/limpieza-alfombra-hogares.webp'
        },
        {
            name: 'Floor Cleaning',
            description: 'Thorough floor cleaning for spotless surfaces and improved cleanliness.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/601318.webp'
        },
        {
            name: 'House Keeping Services',
            description: 'Comprehensive housekeeping services for clean, organized, and well-maintained spaces.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/slider_8.webp'
        },
        {
            name: 'House Painting & Cleaning Work',
            description: 'Professional house painting for refreshed, vibrant walls and long-lasting finish.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/slider_9.webp'
        },
        {
            name: 'House Shifting, Packing & Forwarding',
            description: 'Reliable house shifting services for smooth, stress-free relocation experiences.',
            address: 'USA',
            img: 'https://graceassociate.com/assets/slider_10.webp'
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
                                                <EuroServiceDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

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

export default EuroServices;