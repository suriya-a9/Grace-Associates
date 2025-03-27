import React from "react";
import "./EuroAboutUs.css";

const EuroAboutUs = () => {
    return (
        <div>
            <section className="paper_about_us" id="aboutus">
                <div className="container">
                    <h2 className="bordered_text"><span>About Us</span></h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="paper_about_us_img">
                                <img className="paper_about_us_img_1" src={"/assets/18-06-3342132.webp"} alt="img" />
                                <img className="paper_about_us_img_2" src={"/assets/kitchen-cleaning-nashville-examish-cleaning-services-1.webp"} alt="img" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="paper_about_us_div_p">
                                <p>Euro Clean Tech is very famous for providing advance and hygenic cleaning service in coimbatore(Tamilnadu,India). In the preofessional cleaning industry Euro clean tech is the name to reckon with having wide network all over coimbatore(Tamilnadu,India).</p>
                                <p>Euro Clean Tech is bringing the latest and innovation cleaning solution for fast changing and highly demanding corporate environment. The ultimate mission of Euro Clean Tech is to keep the nation "clean & healthy" & "Environment friendly"</p>
                                <p>It includes wide range of cleaning service for all kind of water storage like water tank,swimming pools etc,.The company has the finest environmentalist & behavioural team and also has involved its own methodologists. Euro clean tech services are designed by keeping in mind the concept of "Environment care". All of the services are free from pollution, noise and smoke.</p>
                                {/* <p>Along with all of these,we offer a consultancy in preparing cleaning plans, Schedules and updates in water tank cleaning. Our skilled and expertise manpower helps us to do this. Euro clean tech provides very efficient cleaning of water storage tank at attractive budjet.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EuroAboutUs;