import React, { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import "./EuroCleanProcess.css";

const EuroCleanProcess = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.euro_clean_process_div, .euro_clean_process_div_left');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        }, { threshold: 0.5 });

        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);
    return (
        <>
            <Helmet>
                <meta name="keywords" content="water tank cleaning, high-pressure cleaning, UV sterilization, antibacterial cleaning, professional housekeeping, home cleaning services, eco-friendly cleaning, sludge removal, house shifting services, tank maintenance solutions." />
            </Helmet>
            <section className="euro_clean_process">
                <div className="container">
                    <h2 className="bordered_text"><span>Our Process</span></h2>
                    <p className="euro_clean_process_p">Our <b>9-stage cleaning process</b> is the result of extensive research and development,
                        ensuring a <b>foolproof, effective, and eco-friendly</b> cleaning solution. Using <b>state-of-the
                            art imported equipment</b> and proprietary <b>antibacterial agents</b>, we guarantee a safe
                        and hygienic environment.</p>
                    <p className="euro_clean_process_p">Before starting the cleaning process, we conduct <b>electrical safety checks</b> and
                        connect all required electrical gadgets. Once verified, the actual cleaning process
                        begins.</p>
                    <div className="row right_row">
                        <div className="col-md-8">
                            <div className="euro_clean_process_div">
                                <img src={"/assets/mechnised.webp"} alt="img" />
                                <div className="euro_clean_process_div_content">
                                    <h4>Mechanized dewatering of the tanks to be<br />cleaned</h4>
                                    <p>A high-power <b>pump removes water</b> from the tank. The <b>manhole and surroundings</b>
                                        are thoroughly cleaned to eliminate dirt, mud, and algae. </p>
                                </div>
                                {/* Horizontal dashed line with arrow */}
                                <div className="horizontal-dashed-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row left_row">
                        <div className='col-md-4'></div>
                        <div className="col-md-8">
                            <div className="euro_clean_process_div_left">
                                <img src={"/assets/sludge-removal-500x500.webp"} alt="img" />
                                <div className="euro_clean_process_div_content">
                                    <h4>Sludge Removal(By mechanized pumps)</h4>
                                    <p>A <b>sludge pump</b> is used to remove dirty water and accumulated sludge from the
                                        tank. </p>
                                </div>
                                {/* Horizontal dashed line with arrow */}
                                <div className="horizontal-dashed-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row right_row">
                        <div className="col-md-8">
                            <div className="euro_clean_process_div">
                                <img src={"/assets/Hi.webp"} alt="img" />
                                <div className="euro_clean_process_div_content">
                                    <h4>High Pressure Cleaning</h4>
                                    <p>The <b>floor, walls, and ceiling</b> of the tank are cleaned with a <b>high-pressure jet</b>,
                                        ensuring deep cleaning.</p>
                                </div>
                                {/* Horizontal dashed line with arrow */}
                                <div className="horizontal-dashed-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row left_row">
                        <div className='col-md-4'></div>
                        <div className="col-md-8">
                            <div className="euro_clean_process_div_left">
                                <img src={"/assets/Vacum.webp"} alt="img" />
                                <div className="euro_clean_process_div_content">
                                    <h4>Vacum Cleaning</h4>
                                    <p>A <b>vacuum pump</b> extracts sludge after high-pressure cleaning. An <b>industrial pump</b>
                                        is then used to remove any remaining dirt.</p>
                                </div>
                                {/* Horizontal dashed line with arrow */}
                                <div className="horizontal-dashed-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row right_row">
                        <div className="col-md-8">
                            <div className="euro_clean_process_div">
                                <img src={"/assets/anti.webp"} alt="img" />
                                <div className="euro_clean_process_div_content">
                                    <h4>Anti-Bacterial Spray</h4>
                                    <p>A natural <b>antibacterial agent</b> is applied to sterilize the <b>walls and floor</b>, eliminating
                                        bacteria.</p>
                                </div>
                                {/* Horizontal dashed line with arrow */}
                                <div className="horizontal-dashed-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row left_row">
                        <div className='col-md-4'></div>
                        <div className="col-md-8">
                            <div className="euro_clean_process_div_left">
                                <img src={"/assets/uv.webp"} alt="img" />
                                <div className="euro_clean_process_div_content">
                                    <h4>UV Radiation</h4>
                                    <p>A <b>UV radiator</b> is used to destroy any **floating or suspended bacteria** that may
                                        remain in the tank.</p>
                                </div>
                                {/* Horizontal dashed line with arrow */}
                                <div className="horizontal-dashed-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row right_row">
                        <div className="col-md-8">
                            <div className="euro_clean_process_div">
                                <img src={"/assets/house (2).webp"} alt="img" />
                                <div className="euro_clean_process_div_content">
                                    <h4>House Keeping Services</h4>
                                    <p> Professional and reliable cleaning services to keep
                                        your space spotless and organized.</p>
                                </div>
                                {/* Horizontal dashed line with arrow */}
                                <div className="horizontal-dashed-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row left_row">
                        <div className='col-md-4'></div>
                        <div className="col-md-8">
                            <div className="euro_clean_process_div_left">
                                <img src={"/assets/house (1).webp"} alt="img" />
                                <div className="euro_clean_process_div_content">
                                    <h4>House Painting & Cleaning Work</h4>
                                    <p>Expert <b>interior and exterior</b> painting and cleaning
                                        services to refresh and revitalize your home.  </p>
                                </div>
                                {/* Horizontal dashed line with arrow */}
                                <div className="horizontal-dashed-arrow"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row right_row">
                        <div className="col-md-8">
                            <div className="euro_clean_process_div_last">
                                <img src={"/assets/house.webp"} alt="img" />
                                <div className="euro_clean_process_div_content">
                                    <h4>House Shifting, Packing & Forwarding</h4>
                                    <p>Efficient house shifting, packing, and
                                        forwarding services for a seamless moving experience.</p>
                                </div>
                                {/* Horizontal dashed line with arrow */}
                                {/* <div className="horizontal-dashed-arrow"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default EuroCleanProcess;